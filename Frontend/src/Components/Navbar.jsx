function Navbar({ onMenuClick, onSearch, isSidebarOpen }) {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Menu button */}
        <button
          onClick={onMenuClick}
          className="btn btn-ghost btn-circle"
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* MailSphere title (hide on small screens) */}
        <span
          className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent select-none"
>
         MailSphere
        </span>
      </div>

      {/* Search bar */}
      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search mail"
          className="input input-bordered w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Avatar */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://api.dicebear.com/9.x/identicon/svg?seed=MailSphere"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
