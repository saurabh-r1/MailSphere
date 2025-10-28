import { useParams, useNavigate } from "react-router-dom";
import { inboxEmails, sentEmails } from "../../services/mockData";

function EmailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const all = [...inboxEmails, ...sentEmails];
  const email = all.find((e) => String(e._id) === String(id));

  if (!email) {
    return (
      <div className="p-4">
        <p className="text-error">Email not found.</p>
        <button className="btn mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <div className="flex justify-between mb-2">
        <h1 className="text-2xl font-bold">{email.subject}</h1>
        <span className="text-sm text-gray-400">{email.time}</span>
      </div>
      <div className="text-sm text-gray-600 mb-2">
        From: <strong>{email.sender}</strong>
      </div>
      <div
        className="prose bg-base-100 p-4 rounded-lg border"
        dangerouslySetInnerHTML={{ __html: email.body }}
      ></div>
      <div className="mt-4 flex gap-2">
        <button className="btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default EmailDetails;
