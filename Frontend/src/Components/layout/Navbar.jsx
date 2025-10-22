import { useState } from "react";
import MailSphereLogo from "../assets/mailSpherelogo.png"; // adjust path as needed

function Navbar({ onMenuClick, onSearch, isSidebarOpen, windowWidth }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const showMiddleAndRight = !isSidebarOpen || windowWidth >= 1024;

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 h-14 px-3 py-2 flex justify-between items-center">
      {/* Left section: Hamburger + Logo + Brand */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {windowWidth < 1024 && (
          <button
            aria-label="Toggle sidebar"
            onClick={onMenuClick}
            className="btn btn-ghost btn-square flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Logo + Brand */}
        <div
          className={ `flex items-center gap-2 ${
            windowWidth >= 1024 || isSidebarOpen ? "inline-flex" : "hidden"
          }`}
        >
          <img src={MailSphereLogo} alt="MailSphere Logo" className="w-8 h-8" />
          <span
  className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent select-none"
>
  MailSphere
</span>

        </div>
      </div>

      {/* Middle: Search bar */}
      {showMiddleAndRight && (
        <form
          onSubmit={handleSearch}
          className="flex items-center mx-4 bg-base-200 rounded-full px-3 py-1 flex-1 sm:flex-[0.75] md:flex-[0.5] lg:flex-[0.33]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 opacity-60 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search mail"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
        </form>
      )}

      {/* Avatar Dropdown */}
      {showMiddleAndRight && (
        <div className="flex-shrink-0 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-9 rounded-full">
             <img alt="User" src="https://i.pravatar.cc/100?img=47" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 mt-2"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a className="text-red-500">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
