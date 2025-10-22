import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-md border border-base-300">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/src/assets/mailSpherelogo.png"
            alt="MailSphere Logo"
            className="w-16 h-16 mb-2"
          />
          <h1 className="text-3xl font-extrabold text-primary tracking-wide">
            MailSphere
          </h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Please log in.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="grow outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="input input-bordered flex items-center gap-2">
              <Lock className="w-4 h-4 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="grow outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm mt-2">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full mt-2">
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-6 text-gray-500">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
