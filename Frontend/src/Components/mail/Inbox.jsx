import { useState } from "react";
import { Star, Mail } from "lucide-react";
import EmailDetail from "./mail/EmailDetail";

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: "John Doe",
      subject: "Project update and next steps",
      preview: "Here’s the latest update on the MailSphere project...",
      time: "10:45 AM",
      date: "2025-10-22",
      starred: true,
      body: `Hello John,

Here’s the latest update on the MailSphere project. We have completed the initial frontend setup and integrated the sidebar and navbar.

Next steps:
1. Add the inbox, sent, drafts, and starred email views.
2. Integrate compose mail functionality with Quill editor.
3. Test responsiveness across mobile, tablet, and desktop.

Please review and share your feedback.

Best regards,
MailSphere Team`,
    },
    {
      id: 2,
      sender: "Jane Smith",
      subject: "Meeting Reminder",
      preview: "Don’t forget our client meeting tomorrow at 3 PM.",
      time: "9:15 AM",
      date: "2025-10-21",
      starred: false,
      body: `Hi Jane,

This is a friendly reminder for our client meeting scheduled tomorrow at 3 PM. Please ensure you have all the required documents ready.

Thanks,
MailSphere Team`,
    },
    {
      id: 3,
      sender: "Team MailSphere",
      subject: "Welcome to MailSphere!",
      preview: "Thanks for joining MailSphere. Let’s get started!",
      time: "Yesterday",
      date: "2025-10-20",
      starred: false,
      body: `Hello,

Welcome to MailSphere! We’re excited to have you on board. You can now start composing, sending, and organizing emails through our platform.

If you have any questions or need assistance, feel free to reach out.

Cheers,
MailSphere Team`,
    },
  ];

  if (selectedEmail) {
    return <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />;
  }

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
        <Mail className="w-5 h-5 md:w-6 md:h-6" /> Inbox
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
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
