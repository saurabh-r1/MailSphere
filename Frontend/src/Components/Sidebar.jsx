function Sidebar({ isOpen, toggleSidebar, onComposeClick, setActiveView }) {
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
        className={`fixed lg:static top-14 lg:top-0 left-0 h-[calc(100%-3.5rem)] lg:h-[100vh] bg-base-100 shadow-lg w-64 p-4 transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Compose button (desktop only, balanced spacing) */}
        <button
          onClick={onComposeClick}
          className="btn btn-accent w-full mt-3 mb-4 hidden lg:block"
        >
          + Compose
        </button>

        {/* Sidebar menu */}
        <ul className="menu text-base-content space-y-1">
          <li>
            <button
              onClick={() => setActiveView("inbox")}
              className="font-semibold w-full text-left"
            >
              📥 Inbox
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("sent")}
              className="w-full text-left"
            >
              📤 Sent
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("drafts")}
              className="w-full text-left"
            >
              📝 Drafts
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("starred")}
              className="w-full text-left"
            >
              ⭐ Starred
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("spam")}
              className="w-full text-left"
            >
              🚫 Spam
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("trash")}
              className="w-full text-left"
            >
              🗑 Trash
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveView("settings")}
              className="w-full text-left"
            >
              ⚙️ Settings
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
