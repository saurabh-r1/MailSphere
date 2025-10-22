import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Profile from "./UserLoginProfile/Profile";
import Login from "./UserLoginProfile/Login";
import Register from "./UserLoginProfile/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Profile route */}
        <Route path="/profile" element={<Profile />} />

        {/* Main MailSphere app */}
        <Route path="/app/*" element={<App />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-gray-500">
              404 — Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
