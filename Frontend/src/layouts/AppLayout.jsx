// inside AppLayout or App.jsx
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const user = { name: "Saurabh Kumar", email: "saurabh@example.com" };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col">
        <Navbar
          onMenuClick={() => setSidebarOpen((s) => !s)}
          onSearch={(q) => console.log("search:", q)}
          isSidebarOpen={sidebarOpen}
          notificationsCount={4}
          user={user}
          onProfile={() => console.log("go to profile")}
          onSettings={() => console.log("go to settings")}
          onLogout={() => console.log("logout")}
        />
        <div className="flex flex-1">
          <Sidebar open={sidebarOpen} />
          <main className="flex-1 p-6">Main area</main>
        </div>
      </div>
    </div>
  );
}
