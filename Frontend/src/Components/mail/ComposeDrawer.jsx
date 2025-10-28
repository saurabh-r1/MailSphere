import { useState } from "react";
import axios from "axios";

function ComposeDrawer({ isOpen, onClose }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = async () => {
    if (!to || !subject || !body) return alert("All fields are required");

    await axios.post("http://localhost:5000/api/messages/send", {
      to,
      subject,
      body,
    });

    setTo("");
    setSubject("");
    setBody("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-base-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">New Message</h2>
          <button onClick={onClose} className="btn btn-ghost btn-sm">✕</button>
        </div>
        <div className="p-4 space-y-3 flex-1 overflow-y-auto">
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="textarea textarea-bordered w-full h-40"
          ></textarea>
        </div>
        <div className="p-4 border-t flex justify-end">
          <button onClick={handleSend} className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default ComposeDrawer;
