import {
  DollarOutlined,
  ReloadOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import styles from "./Overview.module.scss";

const Overview = () => {
  const statsData = [
    {
      title: "Total User",
      value: "40,689",
      icon: <UserOutlined style={{ fontSize: "32px", color: "#a29bfe" }} />,
      change: "+8.5% Up from yesterday",
      changeColor: "#28a745",
    },
    {
      title: "Total Order",
      value: "10,293",
      icon: <ShoppingOutlined style={{ fontSize: "32px", color: "#ffeaa7" }} />,
      change: "+1.3% Up from past week",
      changeColor: "#28a745",
    },
    {
      title: "Total Payments",
      value: "$89,000",
      icon: <DollarOutlined style={{ fontSize: "32px", color: "#81ecec" }} />,
      change: "-4.3% Down from yesterday",
      changeColor: "#dc3545",
    },
    {
      title: "Total Pending",
      value: "2,040",
      icon: <ReloadOutlined style={{ fontSize: "32px", color: "#fab1a0" }} />,
      change: "+1.8% Up from yesterday",
      changeColor: "#28a745",
    },
  ];

  return (
    <>
      <Row gutter={[16, 16]} className={styles.statsRow}>
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className={styles.statsCard}>
              <div className={styles.cardHeader}>
                <div>{stat.icon}</div>
                <div>
                  <h3>{stat.title}</h3>
                  <h1>{stat.value}</h1>
                  <p style={{ color: stat.changeColor }}>{stat.change}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Overview;
