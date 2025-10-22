import { useState } from "react";
import { User, Mail, Edit3, Check, X } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Saurabh Singh",
    email: "saurabh@example.com",
    joined: "January 2024",
  });

  const [editData, setEditData] = useState({ ...user });

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editData });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-md border border-base-300">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src="/src/assets/profile-avatar.png"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full border-4 border-primary/40 shadow-md object-cover"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-md hover:bg-primary/80">
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>

          <h1 className="text-2xl font-bold mt-3 text-primary">Profile</h1>
          <p className="text-sm text-gray-500">Manage your MailSphere account</p>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                className="input input-bordered w-full"
              />
            ) : (
              <p className="text-base-content font-medium">{user.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                className="input input-bordered w-full"
              />
            ) : (
              <p className="text-base-content font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                {user.email}
              </p>
            )}
          </div>

          {/* Joined Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Member Since
            </label>
            <p className="text-base-content font-medium">{user.joined}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="btn btn-success flex items-center gap-2"
              >
                <Check className="w-4 h-4" /> Save
              </button>
              <button
                onClick={handleCancel}
                className="btn btn-ghost flex items-center gap-2"
              >
                <X className="w-4 h-4" /> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEdit}
              className="btn btn-primary flex items-center gap-2 mx-auto"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
