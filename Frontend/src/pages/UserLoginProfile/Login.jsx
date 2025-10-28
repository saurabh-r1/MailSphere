import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import { showLoading, hideLoading } from "../../features/ui/uiSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields ❌");
      return;
    }

    dispatch(showLoading());
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const fakeToken = "dummy-token-123";
      const fakeUser = { email: formData.email, name: "Saurabh" };

      dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));
      toast.success("Login successful 🎉");
      navigate("/app");
    } catch {
      toast.error("Something went wrong ❌");
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/20 dark:border-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/mailSpherelogo.png"
            alt="MailSphere Logo"
            className="w-20 h-20 mb-3 drop-shadow-lg"
          />
          <h1 className="text-3xl font-extrabold text-primary dark:text-white">MailSphere</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Welcome back 👋
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <div className="input input-bordered flex items-center gap-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-md">
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="grow outline-none bg-transparent text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <div className="input input-bordered flex items-center gap-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-md">
              <Lock className="w-4 h-4 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="grow outline-none bg-transparent text-gray-800 dark:text-gray-200"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 shadow-md hover:scale-[1.02] transition-transform"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
