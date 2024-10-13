import React from "react";
import Card from "../../components/card/Card";
import DeliveryList from "../../components/delivery/list/DeliveryList";
import DeliveryPagination from "../../components/delivery/pagination/DeliveryPagination";
import DeliverySearchForm from "../../components/filter-delivery/DeliverySearchForm";
import SalesChart from "../../components/salechart/SalesChart";
import "./DashboardPage.scss";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <Card />
      <SalesChart />
      <DeliverySearchForm />
      <DeliveryList />
      <DeliveryPagination />
    </div>
  );
};

export default DashboardPage;
