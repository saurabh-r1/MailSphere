import {
  Inbox,
  Send,
  Star,
  FileText,
  Trash2,
  AlertTriangle,
  Settings,
  Pencil,
} from "lucide-react"; // icon set
import { useNavigate } from "react-router-dom";

function Sidebar({ activeView, setActiveView, onComposeClick }) {
  const navigate = useNavigate();

  const menuItems = [
    { key: "inbox", label: "Inbox", icon: <Inbox className="w-4 h-4" /> },
    { key: "sent", label: "Sent", icon: <Send className="w-4 h-4" /> },
    { key: "drafts", label: "Drafts", icon: <FileText className="w-4 h-4" /> },
    { key: "starred", label: "Starred", icon: <Star className="w-4 h-4" /> },
    { key: "spam", label: "Spam", icon: <AlertTriangle className="w-4 h-4" /> },
    { key: "trash", label: "Trash", icon: <Trash2 className="w-4 h-4" /> },
    { key: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <aside className="bg-base-100 border-r border-base-200 w-60 flex flex-col h-full shadow-sm sticky left-0 top-0 z-40">
      {/* 🔹 Compose Button */}
      <div className="p-4 border-b border-base-200">
        <button
          onClick={onComposeClick}
          className="btn btn-primary w-full flex items-center gap-2 font-medium shadow-md hover:shadow-lg transition"
        >
          <Pencil className="w-4 h-4" />
          Compose
        </button>
      </div>

      {/* 🔹 Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-3">
        <ul className="menu text-sm px-2">
          {menuItems.map((item) => {
            const isActive = activeView === item.key;
            return (
              <li key={item.key} className="my-[2px]">
                <button
                  onClick={() => setActiveView(item.key)}
                  className={`flex items-center gap-3 w-full rounded-lg px-3 py-2 font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                      : "hover:bg-base-200 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* 🔹 Footer */}
      <div className="p-3 border-t border-base-200 text-center text-xs text-gray-500">
        <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          MailSphere
        </span>{" "}
        © 2025
      </div>
    </aside>
  );
}

export default Sidebar;
