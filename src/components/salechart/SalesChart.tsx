import { Card, Select } from "antd";
import { Line } from "react-chartjs-2";
import styles from "./SalesChart.module.scss";

const { Option } = Select;

const SalesChart = () => {
  // Dummy data for the chart
  const data = {
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
    ],
    datasets: [
      {
        label: "Sales",
        data: [20, 40, 35, 80, 60, 50, 70, 55, 90, 65, 50, 60],
        fill: true,
        backgroundColor: "rgba(63, 145, 255, 0.2)",
        borderColor: "#3F91FF",
        pointBackgroundColor: "#3F91FF",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value: number | string) =>
            `${typeof value === "number" ? value : Number(value)}%`,
          color: "#B0B0B0",
        },
      },
      x: {
        ticks: {
          color: "#B0B0B0",
        },
      },
    },
  };

  return (
    <Card className={styles.salesCard}>
      <div className={styles.header}>
        <h3>Sales Details</h3>
        <Select defaultValue="October" className={styles.monthSelect}>
          <Option value="September">September</Option>
          <Option value="October">October</Option>
          <Option value="November">November</Option>
        </Select>
      </div>
      <Line data={data} options={options} />
    </Card>
  );
};

export default SalesChart;
