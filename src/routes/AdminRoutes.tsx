import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage";

const AdminRoutes = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};
export default AdminRoutes;
