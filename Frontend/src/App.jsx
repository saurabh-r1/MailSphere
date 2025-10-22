import { useState, useEffect } from "react";
import Navbar from "./Components/layout/Navbar";
import Sidebar from "./Components/layout/Sidebar";
import ComposeDrawer from "./Components/mail/ComposeDrawer";

// Folder components
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Drafts from "./Components/mail/Drafts";
import Starred from "./components/Starred";
import Spam from "./Components/mail/Spam";
import Trash from "./Components/mail/Trash";
import EmailDetail from "./Components/mail/EmailDetail";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [activeView, setActiveView] = useState("inbox");

  const [selectedEmail, setSelectedEmail] = useState(null); // for detail view

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

  // Handle email click from list
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  // Back to folder from detail view
  const handleBackToFolder = () => {
    setSelectedEmail(null);
  };

  // Render folder or detail view
  const renderActiveView = () => {
    if (selectedEmail) {
      return <EmailDetail email={selectedEmail} onBack={handleBackToFolder} />;
    }

    switch (activeView) {
      case "inbox":
        return <Inbox onEmailClick={handleEmailClick} />;
      case "sent":
        return <Sent onEmailClick={handleEmailClick} />;
      case "drafts":
        return <Drafts onEmailClick={handleEmailClick} />;
      case "starred":
        return <Starred onEmailClick={handleEmailClick} />;
      case "spam":
        return <Spam onEmailClick={handleEmailClick} />;
      case "trash":
        return <Trash onEmailClick={handleEmailClick} />;
      case "settings":
        return <p className="text-gray-500">Settings page coming soon...</p>;
      default:
        return <Inbox onEmailClick={handleEmailClick} />;
    }
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
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={openCompose}
          setActiveView={setActiveView}
        />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300">
          {renderActiveView()}
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
