import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Automatically close sidebar on mobile screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCompose = () => alert("📧 Compose Mail (coming soon!)");

  const handleSearch = (query) => console.log("Searching for:", query);

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Navbar */}
      <Navbar
        onMenuClick={toggleSidebar}
        onSearch={handleSearch}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 relative transition-all duration-300">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onComposeClick={handleCompose}
        />

        {/* Main Content */}
        <main
          className={`flex-1 p-4 md:p-6 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
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

      {/* Floating Compose Button for mobile */}
      <button
        onClick={handleCompose}
        className="btn btn-accent rounded-full w-14 h-14 fixed bottom-6 right-6 shadow-lg flex items-center justify-center text-white text-3xl lg:hidden"
      >
        +
      </button>
    </div>
  );
}

export default App;
