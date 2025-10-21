function Sidebar({ isOpen, toggleSidebar, onComposeClick }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar drawer */}
      <aside
        className={`
          fixed lg:static top-14 lg:top-0 left-0
          h-[calc(100%-3.5rem)] lg:h-[100vh]
          bg-base-100 shadow-lg w-64 p-4
          transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 overflow-y-auto
        `}
      >
        {/* Desktop Compose button */}
        <button
          onClick={onComposeClick}
          className="btn btn-accent w-full mb-4 hidden lg:block"
        >
          + Compose
        </button>

        {/* Menu Items */}
        <ul className="menu text-base-content space-y-1">
          {[
            "📥 Inbox",
            "📤 Sent",
            "📝 Drafts",
            "⭐ Starred",
            "🚫 Spam",
            "🗑 Trash",
            "⚙️ Settings",
          ].map((item) => (
            <li key={item}>
              <a
                className="hover:bg-base-200 rounded-md px-2 py-1 transition-colors"
                onClick={() => isOpen && window.innerWidth < 1024 && toggleSidebar()}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
