function Sidebar({ isOpen, toggleSidebar, onComposeClick }) {
  return (
    <>
      {/* Overlay (only mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-base-100 shadow-lg w-64 p-4 transition-transform duration-300 ease-in-out z-40
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:-translate-x-64"
          }
        `}
      >
        {/* Compose Button (desktop only) */}
        <button
          onClick={onComposeClick}
          className="btn btn-accent w-full mb-4 hidden lg:block"
        >
          + Compose
        </button>

        {/* Sidebar menu */}
        <ul className="menu text-base-content space-y-1">
          <li><a className="font-semibold">📥 Inbox</a></li>
          <li><a>📤 Sent</a></li>
          <li><a>📝 Drafts</a></li>
          <li><a>⭐ Starred</a></li>
          <li><a>🚫 Spam</a></li>
          <li><a>🗑 Trash</a></li>
          <li><a>⚙️ Settings</a></li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
