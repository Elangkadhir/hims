import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState("login");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard-new");
  };

  const handleSendOtp = () => {
    setCurrentScreen("otp");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border">
          <p className="text-2xl text-center font-sans font-semibold mb-5 text-blue-950">HIMS</p>
          <div className="w-full max-w-md">
            {currentScreen === "login" && (
              <form onSubmit={handleLogin} className="flex flex-col">
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    User ID / Mobile Number
                  </label>

                  <input
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-200 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="Enter user ID or mobile number"
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                  </label>

                  <input
                    type="password"
                    className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-200 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="Enter password"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentScreen("forgot")}
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-3 rounded-lg mt-5"
                >
                  Login
                </button>
              </form>
            )}

            {currentScreen === "forgot" && (
              <div>
                <h2 className="text-lg font-bold text-slate-800 mb-1">
                  Forgot Password
                </h2>

                <p className="text-sm text-slate-500 mb-5">
                  Enter your registered mobile number or email.
                </p>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email / Mobile Number
                  </label>

                  <input
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-2 border border-gray-200 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    placeholder="Enter email or mobile number"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg"
                >
                  Send OTP
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentScreen("login")}
                  className="w-full mt-3 text-sm text-blue-600 font-medium"
                >
                  Back to Login
                </button>
              </div>
            )}

            {currentScreen === "otp" && (
              <div>
                <h2 className="text-lg font-bold text-slate-800 mb-1">
                  OTP Verification
                </h2>

                <p className="text-sm text-slate-500 mb-5">
                  Enter the 6-digit OTP sent to your mobile/email.
                </p>

                <div className="flex gap-2 justify-between mb-5">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <input
                      key={item}
                      maxLength={1}
                      type="text"
                      className="w-12 h-12 border border-slate-200 rounded-lg text-center font-bold text-lg outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg"
                >
                  Verify OTP
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentScreen("forgot")}
                  className="w-full mt-3 text-sm text-blue-600 font-medium"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;