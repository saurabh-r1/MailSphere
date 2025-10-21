import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ComposeDrawer from "./Components/ComposeDrawer";



function App() {
  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Compose drawer state
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) setIsSidebarOpen(true);
      else setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar (mobile only)
  const toggleSidebar = () => {
    if (windowWidth < 1024) setIsSidebarOpen(!isSidebarOpen);
  };

  // Compose drawer handlers
  const openCompose = () => setIsComposeOpen(true);
  const closeCompose = () => setIsComposeOpen(false);

  // Search handler
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

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={openCompose}
        />

        {/* Main content */}
        <main
          className={`flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen && windowWidth >= 1024 ? "lg:ml-64" : ""
          }`}
        >
          <h1 className="text-3xl font-bold mb-4 text-primary">
            Welcome to MailSphere 📧
          </h1>
          <p className="text-base-content/70">
            Manage your emails — Inbox, Sent, Drafts, and compose new messages easily.
          </p>
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
