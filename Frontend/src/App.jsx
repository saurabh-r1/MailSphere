import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Update sidebar automatically
    if (window.innerWidth >= 1024) setIsSidebarOpen(true);
    else setIsSidebarOpen(false);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar (only for mobile/tablet)
  const toggleSidebar = () => {
    if (windowWidth < 1024) setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCompose = () => {
    alert("📧 Compose Mail (coming soon!)");
  };

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Navbar
        onMenuClick={toggleSidebar}
        onSearch={handleSearch}
        isSidebarOpen={isSidebarOpen}
        windowWidth={windowWidth} // pass width to Navbar
      />

      <div className="flex flex-1 relative">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={handleCompose}
        />

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
          onClick={handleCompose}
          className="btn btn-accent rounded-full w-14 h-14 fixed bottom-6 right-6 shadow-lg flex items-center justify-center text-white text-3xl lg:hidden"
        >
          +
        </button>
      )}
    </div>
  );
}

export default App;
