import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ComposeDrawer from "./components/mail/ComposeDrawer";
import Inbox from "./components/mail/Inbox";
import Sent from "./components/mail/Sent";
import EmailDetails from "./components/mail/EmailDetails";
import Drafts from "./components/mail/Drafts";
import Starred from "./components/mail/Starred";
import Spam from "./components/mail/Spam";
import Trash from "./components/mail/Trash";
import Settings from "./components/mail/Settings";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (windowWidth < 1024) setIsSidebarOpen((v) => !v);
  };

  const openCompose = () => setIsComposeOpen(true);
  const closeCompose = () => setIsComposeOpen(false);

  const setActiveView = (view) => {
    navigate(`/app/${view}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar
        onMenuClick={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        windowWidth={windowWidth}
      />

      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={openCompose}
          setActiveView={setActiveView}
        />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300">
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/app/inbox" element={<Inbox />} />
            <Route path="/app/sent" element={<Sent />} />
            <Route path="/app/email/:id" element={<EmailDetails />} />
            <Route path="/app/drafts" element={<Drafts />} />
            <Route path="/app/starred" element={<Starred />} />
            <Route path="/app/spam" element={<Spam />} />
            <Route path="/app/trash" element={<Trash />} />
            <Route path="/app/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>

      {windowWidth < 1024 && (
        <button
          onClick={openCompose}
          className="btn btn-accent rounded-full w-14 h-14 fixed bottom-6 right-6 shadow-lg flex items-center justify-center text-white text-3xl lg:hidden"
        >
          +
        </button>
      )}

      <ComposeDrawer isOpen={isComposeOpen} onClose={closeCompose} />
    </div>
  );
}

export default App;
