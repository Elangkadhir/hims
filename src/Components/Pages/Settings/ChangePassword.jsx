import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Layout from "../../Layout/Layout";

function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Layout>
      <div className="h-screen bg-slate-100 flex items-center justify-center overflow-hidden rounded-lg px-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="mx-5 rounded-xl bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] shadow-lg">
            <h2 className="text-center text-white text-2xl font-bold py-3">
              Change Password
            </h2>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Current Password */}
            <PasswordInput
              label="Current Password"
              show={showCurrent}
              setShow={setShowCurrent}
            />

            {/* New Password */}
            <PasswordInput
              label="New Password"
              show={showNew}
              setShow={setShowNew}
            />

            {/* Confirm Password */}
            <PasswordInput
              label="Confirm Password"
              show={showConfirm}
              setShow={setShowConfirm}
            />

            {/* Buttons */}
            <div className="flex justify-center gap-5 pt-2">
              <button className="px-8 py-2 rounded-md border-2 border-[#08B8A8] text-[#08B8A8] text-sm font-bold hover:bg-slate-50 transition">
                Cancel
              </button>

              <button className="px-8 py-2 rounded-md bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm font-bold shadow-md">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const PasswordInput = ({ label, show, setShow }) => {
  return (
    <div>
      <label className="text-xs font-bold text-slate-600 mb-2 block">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={`Enter ${label}`}
          className="w-full h-10 border border-slate-200 rounded-md px-4 pr-12 text-sm outline-none focus:border-[#08B8A8]"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          {show ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
