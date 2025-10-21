import React from "react";

const sentEmails = [
  {
    recipient: "Alice Smith",
    subject: "Project Update",
    snippet: "Here is the latest update on our project...",
    time: "Today, 10:15 AM",
  },
  {
    recipient: "Bob Johnson",
    subject: "Invoice #4567",
    snippet: "Attached is the invoice for last month...",
    time: "Yesterday, 02:30 PM",
  },
  {
    recipient: "Charlie Brown",
    subject: "Meeting Follow-up",
    snippet: "Thanks for attending the meeting, here are the notes...",
    time: "Oct 20, 2025",
  },
  // Add more sent emails as needed
];

function Sent() {
  return (
    <div className="flex flex-col space-y-3">
      {/* Header */}
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
          Sent
        </h1>
      </div>

      {/* Sent emails list */}
      <div className="flex flex-col divide-y divide-gray-300">
        {sentEmails.map((email, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 hover:bg-base-200 rounded-lg transition-colors cursor-pointer"
          >
            {/* Recipient and subject */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="font-semibold text-sm sm:text-sm md:text-base lg:text-base">
                {email.recipient}
              </span>
              <span className="text-gray-700 text-sm sm:text-sm md:text-base lg:text-base">
                {email.subject}
              </span>
            </div>

            {/* Snippet */}
            <p className="text-gray-500 text-xs sm:text-xs md:text-sm lg:text-sm mt-1 sm:mt-0">
              {email.snippet}
            </p>

            {/* Time */}
            <span className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-sm mt-1 sm:mt-0">
              {email.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sent;
