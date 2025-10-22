import { useState } from "react";
import { Send } from "lucide-react";
import EmailDetail from "./EmailDetail";

const Sent = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: "You",
      subject: "Project Proposal",
      preview: "Sharing the project proposal with all details...",
      time: "Yesterday 3:30 PM",
      date: "2025-10-21",
      starred: false,
      body: `Hello Team,

Please find attached the project proposal document for your review. Let me know your feedback and any required changes.

Best regards,
You`,
    },
    {
      id: 2,
      sender: "You",
      subject: "Weekly Report",
      preview: "Attached is the weekly report for MailSphere...",
      time: "2025-10-20 5:15 PM",
      date: "2025-10-20",
      starred: false,
      body: `Hello Manager,

Please find attached the weekly progress report for MailSphere project. Key highlights and pending tasks are included.

Regards,
You`,
    },
  ];

  if (selectedEmail) {
    return <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />;
  }

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
        <Send className="w-5 h-5 md:w-6 md:h-6" /> Sent
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

            {email.starred && (
              <div className="mt-2 flex justify-end">
                <Send className="w-4 h-4 text-blue-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sent;
