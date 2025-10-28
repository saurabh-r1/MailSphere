import { useEffect, useState } from "react";
import axios from "axios";

function Inbox() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const res = await axios.get("http://localhost:5000/api/messages/inbox");
    setEmails(res.data);
  };

  const toggleRead = async (id) => {
    await axios.patch(`http://localhost:5000/api/messages/${id}/toggle`);
    fetchEmails();
  };

  const deleteEmail = async (id) => {
    await axios.delete(`http://localhost:5000/api/messages/${id}`);
    fetchEmails();
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">Inbox</h1>
      <div className="space-y-2">
        {emails.length === 0 ? (
          <p className="text-gray-500">No messages</p>
        ) : (
          emails.map((email) => (
            <div
              key={email._id}
              className="flex justify-between items-center hover:bg-base-200 p-2 rounded"
            >
              <div>
                <div className="flex gap-2 items-center">
                  <span className={`font-semibold ${!email.read ? "text-primary" : ""}`}>
                    {email.sender}
                  </span>
                  <span className="text-gray-500 text-sm">{email.time}</span>
                </div>
                <p className="text-gray-800 text-sm">{email.subject}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleRead(email._id)}
                  className="btn btn-xs"
                >
                  {email.read ? "Unread" : "Read"}
                </button>
                <button
                  onClick={() => deleteEmail(email._id)}
                  className="btn btn-xs btn-error"
                >
                  🗑
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Inbox;
