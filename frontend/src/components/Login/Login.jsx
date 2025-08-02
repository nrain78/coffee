import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../axiosInstance";
import { motion } from "framer-motion";
import Toast from "../../components/Toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://coffee-blue-seven.vercel.app/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setToast({ show: true, message: "Login successful!", type: "success" });

      setTimeout(() => {
        setToast({ ...toast, show: false });
        navigate("/");
      }, 2500);
    } catch (err) {
      setToast({
        show: true,
        message: err.response?.data?.msg || "Invalid email or password",
        type: "error",
      });
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
    }
  };

  return (
    <>
      {toast.show && <Toast message={toast.message} type={toast.type} />}
      <div className="flex justify-center items-center min-h-screen bg-[#fdf6f0] text-[#3b2f2f] px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-amber-900 hover:bg-amber-800 text-white py-2 rounded-lg font-semibold transition"
            >
              Login
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Create Account
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
