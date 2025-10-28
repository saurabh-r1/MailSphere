import Inbox from "./components/mail/Inbox";
import Sent from "./components/mail/Sent";
import Drafts from "./components/mail/Drafts";
import Starred from "./components/mail/Starred";
import Spam from "./components/mail/Spam";
import Trash from "./components/mail/Trash";
import EmailDetail from "./components/mail/EmailDetail";
import { useState } from "react";

function App() {
  const [activeView, setActiveView] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => setSelectedEmail(email);
  const handleBackToFolder = () => setSelectedEmail(null);

  const renderActiveView = () => {
    if (selectedEmail) return <EmailDetail email={selectedEmail} onBack={handleBackToFolder} />;
    switch (activeView) {
      case "sent": return <Sent onEmailClick={handleEmailClick} />;
      case "drafts": return <Drafts onEmailClick={handleEmailClick} />;
      case "starred": return <Starred onEmailClick={handleEmailClick} />;
      case "spam": return <Spam onEmailClick={handleEmailClick} />;
      case "trash": return <Trash onEmailClick={handleEmailClick} />;
      default: return <Inbox onEmailClick={handleEmailClick} />;
    }
  };

  return (
    <div className="w-full h-full animate-fadeIn">
      {renderActiveView()}
    </div>
  );
}

export default App;
