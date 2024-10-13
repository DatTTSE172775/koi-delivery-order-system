import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import SettingsPage from "../pages/setting/SettingsPage";

// Define routes with the AdminLayout wrapping them
const AdminRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* AdminLayout wraps all routes related to the admin section */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
