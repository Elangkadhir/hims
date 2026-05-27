import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import User from "../../assets/Images/user1.jpg";
import { MdOutlineNotifications } from "react-icons/md";
import { FiLogOut, FiMail, FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Header({ onToggle }) {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log("path", path);
    navigate(path);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className=" h-[60px] rounded-xl flex items-center justify-between bg-white px-3">
      <div className="flex items-center gap-5">
        <GiHamburgerMenu
          className="h-5 w-5 cursor-pointer"
          onClick={onToggle}
        />
      </div>
      <div className="flex gap-3 items-center mr-3">
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              onClick={() => {
                setOpenModal(true);
                setShowRegister(false);
              }}
              type="text"
              placeholder="Search patient..."
              className="border rounded-md pl-10 pr-3 py-1.5 outline-none w-full"
            />
          </div>{" "}
          {openModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-2 border-b border-gray-100 bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
                  <div>
                    <h2 className="text-base font-bold text-white font-sans">
                      {showRegister ? "Register New Patient" : "Search Patient"}
                    </h2>
                  </div>

                  <button
                    onClick={() => setOpenModal(false)}
                    className="flex items-center justify-center text-white hover:text-red-200 transition"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Top Register Button */}
                  {!showRegister && (
                    <div className="flex justify-end mb-5">
                      <button
                        onClick={() => setShowRegister(true)}
                        className="bg-[#0CB8A1] text-white px-5 py-2 rounded-md text-sm font-medium shadow hover:scale-105 transition-all"
                      >
                        + Register New
                      </button>
                    </div>
                  )}

                  {/* Search Form */}
                  {!showRegister ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-sans font-medium text-gray-600 mb-2 block">
                            Patient Name
                          </label>

                          <input
                            type="text"
                            placeholder="Enter patient name"
                            className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-cyan-400 placeholder:text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-sans font-medium text-gray-600 mb-2 block">
                            Mobile Number
                          </label>

                          <input
                            type="text"
                            placeholder="Enter mobile number"
                            className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-cyan-400 placeholder:text-sm"
                          />
                        </div>
                      </div>

                      {/* Bottom Buttons */}
                      <div className="flex items-center justify-end gap-4 mt-8">
                        <button
                          onClick={() => setOpenModal(false)}
                          className="px-6 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                          Cancel
                        </button>

                        <button className="bg-[#0CB8A1] text-white px-8 py-1.5 rounded-md shadow-lg hover:scale-105 transition-all">
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Register Form */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-2 block">
                            Full Name
                          </label>

                          <input
                            type="text"
                            placeholder="Enter full name"
                            className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-emerald-400 placeholder:text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-2 block">
                            Mobile Number
                          </label>

                          <input
                            type="text"
                            placeholder="Enter mobile number"
                            className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-emerald-400 placeholder:text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-2 block">
                            Age
                          </label>

                          <input
                            type="number"
                            placeholder="Enter age"
                            className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-emerald-400 placeholder:text-sm"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-2 block">
                            Gender
                          </label>

                          <select className="w-full h-10 rounded-md border border-gray-200 px-4 outline-none focus:ring-1 focus:ring-emerald-400 text-sm">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="text-sm font-medium text-gray-600 mb-2 block">
                            Address
                          </label>

                          <textarea
                            rows="3"
                            placeholder="Enter address"
                            className="w-full rounded-md border border-gray-200 p-4 outline-none focus:ring-1 focus:ring-emerald-400 placeholder:text-sm"
                          ></textarea>
                        </div>
                      </div>

                      {/* Register Buttons */}
                      <div className="flex items-center justify-end gap-4 mt-8">
                        <button
                          onClick={() => setShowRegister(false)}
                          className="px-6 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                          Back
                        </button>

                        <button className="bg-[#0CB8A1] text-white px-8 py-1.5 rounded-md shadow-lg hover:scale-105 transition-all">
                          Register
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border rounded-md w-8 h-8 flex items-center justify-center">
          <MdOutlineNotifications className="w-5 h-5" />
        </div>
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setOpenProfileMenu(!openProfileMenu)}
            className="w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]"
          >
            <p className="text-white font-sans text-sm font-semibold">RB</p>
          </div>

          {openProfileMenu && (
            <div className="absolute right-0 top-12 w-52 bg-white rounded-xl border border-slate-200 shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                <p className="text-xs text-slate-500 font-semibold mb-2">
                  Signed in as
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FiMail className="text-blue-600 w-4 h-4" />
                  </div>

                  <p className="text-sm font-medium text-slate-700 break-all">
                    rajbalaji@gmail.com
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleClick("/")}
                className="w-full px-4 py-3 flex items-center gap-3 text-sm text-red-600 hover:bg-red-50 transition"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
