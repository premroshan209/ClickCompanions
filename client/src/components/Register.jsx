import React, { useState, useEffect } from "react";
import registerImage from "../assets/register.svg";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 p-6">
        {/* Image section */}
        <div
          className={`hidden lg:block transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={registerImage}
            alt="Register"
            className="h-80 w-80 object-contain"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Form section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">
            Create Account
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          >
            Register
          </button>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already registered?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Click here to login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
