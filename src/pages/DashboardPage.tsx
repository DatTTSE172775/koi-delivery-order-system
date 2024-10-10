import React from "react";
import Overview from "../components/overview/Overview";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Overview />
      {/* <SalesChart /> */}
    </div>
  );
};

export default DashboardPage;
