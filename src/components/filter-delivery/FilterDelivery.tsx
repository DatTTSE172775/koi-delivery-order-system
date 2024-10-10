import { Col, Input, Row } from "antd";
import React from "react";
import styles from "./FilterDelivery.module.scss";

const FilterDelivery: React.FC = () => {
  return (
    <Row gutter={[16, 16]} className={styles.filterRow}>
      <Col xs={24} sm={12} md={6}>
        <Input
          placeholder="Enter Customer Name"
          className={styles.inputField}
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Input placeholder="Enter Order Number" className={styles.inputField} />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Input placeholder="Start Date" className={styles.inputField} />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <Input placeholder="End Date" className={styles.inputField} />
      </Col>
    </Row>
  );
};

export default FilterDelivery;
