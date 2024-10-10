import { Table } from "antd";
import React from "react";
import styles from "./OrderTable.module.scss";

interface Order {
  key: string;
  orderNumber: string;
  date: string;
  customer: string;
  time: string;
  amount: string;
  destination: string;
}

const OrderTable: React.FC = () => {
  const columns = [
    {
      title: "Order Number",
      dataIndex: "orderNumber",
      key: "orderNumber",
      render: (text: string) => <a href="#">{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
  ];

  const data: Order[] = [
    {
      key: "1",
      orderNumber: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      time: "2:00 pm",
      amount: "N3400.00",
      destination: "342 Oron road, Uyo",
    },
    {
      key: "2",
      orderNumber: "#AHGA69",
      date: "24/09/2022",
      customer: "Emma Johnson",
      time: "3:00 pm",
      amount: "N3500.00",
      destination: "12 Akwa road, Uyo",
    },
    // Thêm dữ liệu nếu cần thiết
  ];

  return (
    <Table
      className={styles.orderTable}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      bordered
    />
  );
};

export default OrderTable;
