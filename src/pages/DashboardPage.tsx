import React from "react";
import FilterDelivery from "../components/filter-delivery/FilterDelivery";
import OrderTable from "../components/order-table/OrderTable";
import Overview from "../components/overview/Overview";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Overview />
      <FilterDelivery />
      <OrderTable />
      {/* <SalesChart /> */}
    </div>
  );
};

export default DashboardPage;
