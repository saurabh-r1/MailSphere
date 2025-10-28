import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "../components/common/PrivateRoute";
import Login from "../pages/UserLoginProfile/Login";
import Register from "../pages/UserLoginProfile/Register";
import Inbox from "../components/mail/Inbox";
import Profile from "../pages/UserLoginProfile/Profile";
import AppLayout from "../layouts/AppLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (with persistent layout) */}
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          {/* Child routes inside the layout */}
          <Route index element={<Inbox />} />           {/* /app */}
          <Route path="profile" element={<Profile />} /> {/* /app/profile */}
          <Route path="settings" element={<div>Settings page coming soon...</div>} /> {/* /app/settings */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<div className="text-center mt-20 text-gray-500">404 | Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
