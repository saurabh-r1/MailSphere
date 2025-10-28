import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Page Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto transition-all duration-300">
          {/* Nested Routes Render Here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
