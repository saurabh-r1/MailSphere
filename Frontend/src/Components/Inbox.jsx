import React from "react";

const emails = [
  {
    sender: "John Doe",
    subject: "Meeting Reminder",
    snippet: "Don't forget our meeting tomorrow at 10 AM.",
    time: "09:45 AM",
  },
  {
    sender: "Amazon",
    subject: "Your Order Has Shipped",
    snippet: "Your order #123456 is on the way!",
    time: "08:30 AM",
  },
  {
    sender: "GitHub",
    subject: "New Pull Request",
    snippet: "A new pull request has been assigned to you.",
    time: "Yesterday",
  },
  // Add more sample emails here
];

function Inbox() {
  return (
    <div className="flex flex-col space-y-3">
      {/* Header */}
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
          Inbox
        </h1>
      </div>

      {/* Email list */}
      <div className="flex flex-col divide-y divide-gray-300">
        {emails.map((email, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 hover:bg-base-200 rounded-lg transition-colors cursor-pointer"
          >
            {/* Sender and subject */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="font-semibold text-sm sm:text-sm md:text-base lg:text-base">
                {email.sender}
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

export default Inbox;
