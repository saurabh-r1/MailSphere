import React from "react";

const draftsEmails = [
  {
    recipient: "Emily Clark",
    subject: "Draft: Proposal",
    snippet: "Draft version of the proposal for your review...",
    time: "Today, 09:00 AM",
  },
  {
    recipient: "Michael Lee",
    subject: "Draft: Meeting Notes",
    snippet: "Initial draft of meeting notes...",
    time: "Yesterday, 03:15 PM",
  },
];

function Drafts() {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        Drafts
      </h1>
      <div className="flex flex-col divide-y divide-gray-300">
        {draftsEmails.map((email, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 hover:bg-base-200 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span className="font-semibold text-sm sm:text-sm md:text-base lg:text-base">
                {email.recipient}
              </span>
              <span className="text-gray-700 text-sm sm:text-sm md:text-base lg:text-base">
                {email.subject}
              </span>
            </div>
            <p className="text-gray-500 text-xs sm:text-xs md:text-sm lg:text-sm mt-1 sm:mt-0">
              {email.snippet}
            </p>
            <span className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-sm mt-1 sm:mt-0">
              {email.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drafts;
