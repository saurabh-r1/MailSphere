import { useState } from "react";
import { Trash2 } from "lucide-react";
import EmailDetail from "./EmailDetails";

const Trash = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: "Old Sender",
      subject: "Old newsletter",
      preview: "This email has been deleted and moved to trash...",
      time: "2025-10-20 3:45 PM",
      date: "2025-10-20",
      starred: false,
      body: `Hello,

This email was deleted and is now in your Trash folder. You can recover or permanently delete it as needed.

Regards,
MailSphere Team`,
    },
    {
      id: 2,
      sender: "Spammy Sender",
      subject: "Unused account notice",
      preview: "Your unused account will be deleted soon...",
      time: "2025-10-18 10:30 AM",
      date: "2025-10-18",
      starred: false,
      body: `Hello,

This email has been moved to Trash. It was either marked as spam or deleted manually.

Best,
MailSphere Team`,
    },
  ];

  if (selectedEmail) {
    return <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />;
  }

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
        <Trash2 className="w-5 h-5 md:w-6 md:h-6" /> Trash
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

export default Trash;




