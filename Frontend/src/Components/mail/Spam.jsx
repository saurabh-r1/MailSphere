import { useState } from "react";
import { AlertCircle } from "lucide-react";
import EmailDetail from "./EmailDetails";

const Spam = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: "Unknown Sender",
      subject: "You won a prize!",
      preview: "Congratulations! Claim your free prize now...",
      time: "Today 2:15 PM",
      date: "2025-10-22",
      starred: false,
      body: `Hello,

This appears to be a spam email offering a prize. Please do not click any links or provide personal information.

Stay safe,
MailSphere Security Team`,
    },
    {
      id: 2,
      sender: "marketing@randomsite.com",
      subject: "Limited Time Offer!",
      preview: "Get 50% off on our services for the next 24 hours...",
      time: "Yesterday 6:30 PM",
      date: "2025-10-21",
      starred: false,
      body: `Hello,

This email is categorized as spam. It contains promotional content from unknown sources. Avoid clicking any links.

Best,
MailSphere Security Team`,
    },
  ];

  if (selectedEmail) {
    return <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />;
  }

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
        <AlertCircle className="w-5 h-5 md:w-6 md:h-6" /> Spam
      </h2>

      <div className="space-y-3 md:space-y-4">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            className="p-4 bg-base-100 rounded-xl shadow-sm border border-base-300 cursor-pointer hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-medium text-base-content">
                {email.sender}
              </h3>
              <span className="text-xs md:text-sm text-gray-400">{email.time}</span>
            </div>

            <p className="text-sm md:text-base font-semibold mt-1">{email.subject}</p>
            <p className="text-xs md:text-sm text-gray-500 truncate">{email.preview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spam;
