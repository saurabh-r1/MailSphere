import React, { useState } from "react";
import { Sun, Moon, Bell, PenLine } from "lucide-react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Toggle light/dark mode by adding or removing "dark" class on <html>
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6 h-[70px] flex justify-between items-center">
      {/* LEFT — App Logo */}
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-primary cursor-pointer">
          📧 MailSphere
        </div>
      </div>

      {/* MIDDLE — Search Bar */}
      <div className="flex-1 flex justify-center px-4">
        <div className="relative w-1/2 max-w-xl">
          <input
            type="text"
            placeholder="Search mails..."
            className="input input-bordered w-full pl-10 rounded-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>
      </div>

      {/* RIGHT — Actions */}
      <div className="flex items-center gap-4">
        {/* Compose */}
        <button className="btn btn-sm btn-primary rounded-full flex items-center gap-1">
          <PenLine size={16} />
          Compose
        </button>

        {/* Notifications */}
        <button className="btn btn-ghost btn-circle">
          <Bell size={20} />
        </button>

        {/* Theme Toggle */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* User Profile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
