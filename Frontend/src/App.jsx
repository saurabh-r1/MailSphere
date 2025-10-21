import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ComposeDrawer from "./components/ComposeDrawer";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [activeView, setActiveView] = useState("inbox");

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) setIsSidebarOpen(true);
      else setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (windowWidth < 1024) setIsSidebarOpen(!isSidebarOpen);
  };

  const openCompose = () => setIsComposeOpen(true);
  const closeCompose = () => setIsComposeOpen(false);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Navbar */}
      <Navbar
        onMenuClick={toggleSidebar}
        onSearch={handleSearch}
        isSidebarOpen={isSidebarOpen}
        windowWidth={windowWidth}
      />

      {/* Sidebar + Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={openCompose}
          setActiveView={setActiveView}
        />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300">
          {activeView === "inbox" && <Inbox />}
          {activeView === "sent" && <Sent />}
          {activeView === "drafts" && <p>Drafts folder coming soon...</p>}
          {activeView === "starred" && <p>Starred folder coming soon...</p>}
          {activeView === "spam" && <p>Spam folder coming soon...</p>}
          {activeView === "trash" && <p>Trash folder coming soon...</p>}
          {activeView === "settings" && <p>Settings page coming soon...</p>}
        </main>
      </div>

      {/* Mobile Compose Button */}
      {windowWidth < 1024 && (
        <button
          onClick={openCompose}
          className="btn btn-accent rounded-full w-14 h-14 fixed bottom-6 right-6 shadow-lg flex items-center justify-center text-white text-3xl lg:hidden"
        >
          +
        </button>
      )}

      {/* Compose Drawer */}
      <ComposeDrawer isOpen={isComposeOpen} onClose={closeCompose} />
    </div>
  );
}

export default App;
