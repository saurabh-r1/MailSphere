import { useState } from "react";
import { FileText } from "lucide-react";
import EmailDetail from "./EmailDetail";

const Drafts = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: "You",
      subject: "Pending Proposal Draft",
      preview: "Working on the proposal draft for MailSphere...",
      time: "Today 11:00 AM",
      date: "2025-10-22",
      starred: false,
      body: `Hello Team,

This is a draft of the pending project proposal. I am still refining the details and will send the final version shortly.

Best regards,
You`,
    },
    {
      id: 2,
      sender: "You",
      subject: "Draft: Meeting Notes",
      preview: "Notes from today's team meeting, still editing...",
      time: "Yesterday 4:20 PM",
      date: "2025-10-21",
      starred: false,
      body: `Hi Team,

These are draft notes from today's meeting. I will finalize and circulate them once everyone confirms the points.

Thanks,
You`,
    },
  ];

  if (selectedEmail) {
    return <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />;
  }

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
        <FileText className="w-5 h-5 md:w-6 md:h-6" /> Drafts
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

export default Drafts;
