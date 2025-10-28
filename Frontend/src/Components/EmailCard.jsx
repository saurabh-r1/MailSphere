import { Link } from "react-router-dom";

function EmailCard({ email, onToggleRead, onDelete }) {
  return (
    <div className="flex justify-between items-center hover:bg-base-200 rounded-lg p-2 transition">
      <Link to={`/app/email/${email._id}`} className="flex-1 flex flex-col cursor-pointer">
        <div className="flex justify-between">
          <span className={`font-semibold ${!email.read ? "text-primary" : ""}`}>
            {email.sender}
          </span>
          <span className="text-gray-400 text-sm">{email.time}</span>
        </div>
        <span className="text-gray-700 text-sm">{email.subject}</span>
        <p className="text-gray-500 text-xs line-clamp-1">{email.snippet}</p>
      </Link>

      <div className="flex gap-2 ml-2">
        <button
          onClick={() => onToggleRead(email._id)}
          className="btn btn-xs"
        >
          {email.read ? "Unread" : "Read"}
        </button>
        <button
          onClick={() => onDelete(email._id)}
          className="btn btn-xs btn-error"
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default EmailCard;
