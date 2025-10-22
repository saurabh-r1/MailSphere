import { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function ComposeDrawer({ isOpen, onClose }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [attachments, setAttachments] = useState([]);
  const quillRef = useRef(null);
  const toolbarRef = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (isOpen && quillRef.current && !quillRef.current._quill) {
      quillRef.current._quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarRef.current,
        },
      });
    }
  }, [isOpen]);

  const getMessage = () => quillRef.current?._quill?.root.innerHTML || "";

  const handleFileChange = (e) => setAttachments([...e.target.files]);
  const removeAttachment = (index) =>
    setAttachments(attachments.filter((_, i) => i !== index));

  const handleSend = () => {
    if (!to.trim() || !subject.trim()) {
      alert("To and Subject fields are required!");
      return;
    }

    const message = getMessage();
    console.log({ to, subject, message, attachments });
    alert("Mail sent successfully! (Check console)");

    setTo("");
    setSubject("");
    setAttachments([]);
    if (quillRef.current?._quill) quillRef.current._quill.setText("");
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full 
          max-w-md lg:max-w-2xl  /* mobile vs desktop */
          bg-base-100 shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-base-300">
          <h2 className="text-xl font-bold">Compose Mail</h2>
          <button onClick={onClose} className="btn btn-ghost btn-square">
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-3">
          <input
            type="email"
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

          {/* Rich text editor */}
          <div
            ref={quillRef}
            className="h-48 lg:h-64 bg-white border border-base-300 p-3 lg:p-5"
          ></div>

          {/* Bottom toolbar */}
          <div
            ref={toolbarRef}
            className="flex gap-2 p-2 border border-base-300 rounded mt-2 bg-base-100 justify-start flex-wrap w-full"
          >
            <button className="ql-bold">B</button>
            <button className="ql-italic">I</button>
            <button className="ql-underline">U</button>
            <button className="ql-strike">S</button>
            <button className="ql-list" value="ordered">OL</button>
            <button className="ql-list" value="bullet">UL</button>
            <button className="ql-link">Link</button>
            <button className="ql-clean">Clear</button>
          </div>

          {/* Attachments */}
          <div className="flex flex-col gap-2">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
            />
            {attachments.length > 0 && (
              <ul className="flex flex-col gap-1 mt-2">
                {attachments.map((file, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-base-200 p-2 rounded"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      onClick={() => removeAttachment(index)}
                      className="btn btn-sm btn-circle btn-ghost text-red-500"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Send Button */}
          <div className="flex justify-end mt-auto">
            <button onClick={handleSend} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComposeDrawer;
