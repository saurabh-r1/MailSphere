import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Trash2, Reply, Forward, Star } from "lucide-react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const EmailDetail = ({ email, onBack }) => {
  const [action, setAction] = useState(null); // 'reply' or 'forward'
  const [message, setMessage] = useState("");
  const editorRef = useRef(null);

  // Initialize Quill editor when Reply or Forward is clicked
  useEffect(() => {
    if (action && editorRef.current && !editorRef.current.__quill) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: `Type your ${action} message...`,
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        },
      });

      quill.on("text-change", () => {
        setMessage(quill.root.innerHTML);
      });
    }
  }, [action]);

  const handleSend = () => {
    alert(`${action === "reply" ? "Reply" : "Forward"} sent!`);
    setAction(null);
    setMessage("");
  };

  if (!email) return null;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base md:text-lg font-medium">Back</span>
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setAction(action === "reply" ? null : "reply")}
            className="btn btn-sm btn-ghost hover:bg-base-200"
            title="Reply"
          >
            <Reply className="w-4 h-4" />
          </button>
          <button
            onClick={() => setAction(action === "forward" ? null : "forward")}
            className="btn btn-sm btn-ghost hover:bg-base-200"
            title="Forward"
          >
            <Forward className="w-4 h-4" />
          </button>
          <button className="btn btn-sm btn-ghost hover:bg-base-200" title="Star">
            <Star className="w-4 h-4" />
          </button>
          <button className="btn btn-sm btn-ghost hover:bg-base-200 text-error" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email Content */}
      <div className="bg-base-100 rounded-xl shadow-sm border border-base-300 p-5 md:p-8 space-y-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-base-content">{email.subject}</h2>
          <p className="text-sm md:text-base text-gray-500 mt-1">
            From: <span className="font-medium">{email.sender}</span>
          </p>
          <p className="text-xs md:text-sm text-gray-400">{email.time}</p>
        </div>

        <div className="text-base-content/90 text-sm md:text-base leading-relaxed space-y-3">
          <p>Hello {email.sender.split(" ")[0]},</p>
          <p>{email.preview} This is a demo of the detailed email view inside <strong>MailSphere</strong>. In a real setup, this section would display the full message body.</p>
          <p>Best regards,</p>
          <p className="font-medium">MailSphere Team</p>
        </div>

        {/* Quill Editor for Reply/Forward */}
        {action && (
          <div className="mt-4">
            <div ref={editorRef} className="bg-white rounded-md min-h-[120px]"></div>
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSend}
                className="btn btn-accent btn-sm flex items-center gap-2"
              >
                {action === "reply" ? <Reply className="w-4 h-4 md:w-5 md:h-5" /> : <Forward className="w-4 h-4 md:w-5 md:h-5" />} 
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailDetail;
