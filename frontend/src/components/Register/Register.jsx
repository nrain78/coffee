import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Toast from "../../components/Toast";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "", email:"" });
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", form);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      }, 2500);
    } catch (err) {
      alert(err.response?.data?.msg || "Register failed");
    }
  };

  return (
    <>
      <Toast show={showToast} message="Account created! Now login." />
      <div className="flex justify-center items-center min-h-screen bg-[#fdf6f0] text-[#3b2f2f] px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
              <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <input
              type="password"
              name="password"
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
              Create Account
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </>
  );
}
