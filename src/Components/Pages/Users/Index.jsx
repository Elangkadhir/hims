import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaUserTie,
} from "react-icons/fa";

import user1 from "../../../assets/Images/pexels1.jpg";
import user2 from "../../../assets/Images/pexels2.jpg";
import user3 from "../../../assets/Images/pexels3.jpg";
import user4 from "../../../assets/Images/pexels4.jpg";

function Users() {
  const [openAddUser, setOpenAddUser] = useState(false);

  const users = [
    {
      id: "EMP-1001",
      image: user1,
      name: "Dr. Sharma",
      role: "Doctor",
      department: "Cardiology",
      shift: "Morning",
      contact: "9876543210",
      email: "sharma@gmail.com",
      joining: "12 Jan 2023",
      status: "Active",
    },

    {
      id: "EMP-1002",
      image: user2,
      name: "Nurse Priya",
      role: "Nurse",
      department: "ICU",
      shift: "Night",
      contact: "9123456780",
      email: "priya@gmail.com",
      joining: "05 Feb 2024",
      status: "Active",
    },

    {
      id: "EMP-1003",
      image: user3,
      name: "Arjun Kumar",
      role: "Pharmacist",
      department: "Pharmacy",
      shift: "Evening",
      contact: "9988776655",
      email: "arjun@gmail.com",
      joining: "10 Mar 2022",
      status: "On Leave",
    },

    {
      id: "EMP-1004",
      image: user4,
      name: "Monica Rao",
      role: "Receptionist",
      department: "Front Office",
      shift: "General",
      contact: "9871122334",
      email: "monica@gmail.com",
      joining: "18 Jul 2021",
      status: "Inactive",
    },
  ];

  const statusStyle = {
    Active: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
    "On Leave": "bg-yellow-50 text-yellow-600 before:bg-yellow-500",
    Inactive: "bg-red-50 text-red-600 before:bg-red-500",
  };

  const roleStyle = {
    Doctor: "bg-blue-50 text-blue-600",
    Nurse: "bg-pink-50 text-pink-600",
    Pharmacist: "bg-orange-50 text-orange-600",
    Receptionist: "bg-cyan-50 text-cyan-600",
  };

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FaUserTie />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Hospital Users
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Manage all hospital staffs & users
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpenAddUser(true)}
              className="bg-gradient-to-r from-[#8C3EA8] to-[#5E73B7] text-white px-5 h-10 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg shadow-purple-100"
            >
              <FaPlus className="text-xs" />
              Add User
            </button>
          </div>

          {/* FILTERS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
            <div className="relative md:col-span-2">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

              <input
                type="text"
                placeholder="Search (Name / Mobile / Employee ID)"
                className="w-full h-11 rounded-xl border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-purple-400"
              />
            </div>

            <select className="w-full h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none bg-white text-slate-600">
              <option>All Department</option>
              <option>Cardiology</option>
              <option>ICU</option>
              <option>Pharmacy</option>
              <option>Radiology</option>
              <option>Laboratory</option>
              <option>Administration</option>
            </select>

            <select className="w-full h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none bg-white text-slate-600">
              <option>All Status</option>
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm">
                  <th className="px-5 py-4 font-semibold">User</th>
                  <th className="px-5 py-4 font-semibold">Employee ID</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 font-semibold">Department</th>
                  <th className="px-5 py-4 font-semibold">Shift</th>
                  <th className="px-5 py-4 font-semibold">Contact</th>
                  <th className="px-5 py-4 font-semibold">Joining Date</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-all duration-200"
                  >
                    {/* USER */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-slate-200"
                        />

                        <div>
                          <h3 className="font-bold text-slate-800">
                            {item.name}
                          </h3>

                          <p className="text-xs text-slate-500 mt-1">
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMPLOYEE ID */}
                    <td className="px-5 py-4 font-semibold text-slate-700">
                      {item.id}
                    </td>

                    {/* ROLE */}
                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          roleStyle[item.role]
                        }`}
                      >
                        {item.role}
                      </span>
                    </td>

                    {/* DEPARTMENT */}
                    <td className="px-5 py-4">
                      {item.department}
                    </td>

                    {/* SHIFT */}
                    <td className="px-5 py-4">
                      {item.shift}
                    </td>

                    {/* CONTACT */}
                    <td className="px-5 py-4">
                      {item.contact}
                    </td>

                    {/* JOINING */}
                    <td className="px-5 py-4">
                      {item.joining}
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4">
                      <span
                        className={`relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold before:content-[''] before:w-2 before:h-2 before:rounded-full ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center">
                        <button className="px-3 py-2 rounded-xl border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold flex items-center gap-2 hover:bg-purple-100 transition-all">
                          <FaEye className="text-xs" />
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-between mt-5">
            <p className="text-sm text-slate-500">
              Showing 1 to 4 of 48 users
            </p>

            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-xl border border-slate-200 text-slate-400 flex items-center justify-center">
                <FaChevronLeft className="text-xs" />
              </button>

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 rounded-xl border text-sm font-semibold ${
                    page === 1
                      ? "bg-purple-50 border-purple-200 text-purple-600"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button className="w-9 h-9 rounded-xl border border-slate-200 text-slate-500 flex items-center justify-center">
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {/* ADD USER MODAL */}
        {openAddUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-2 bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Add User
                  </h2>

                  <p className="text-xs text-white/80 mt-1">
                    Create hospital staff profile
                  </p>
                </div>

                <button
                  onClick={() => setOpenAddUser(false)}
                  className="w-10 h-10 rounded-xl bg-white/20 text-white text-xl"
                >
                  ×
                </button>
              </div>

              {/* BODY */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <InputField
                    label="Full Name"
                    placeholder="Enter full name"
                  />

                  <InputField
                    label="Employee ID"
                    placeholder="EMP-1005"
                  />

                  <SelectField
                    label="Role"
                    options={[
                      "Doctor",
                      "Nurse",
                      "Receptionist",
                      "Lab Technician",
                      "Pharmacist",
                      "Admin",
                      "Radiologist",
                      "Billing Staff",
                    ]}
                  />

                  <SelectField
                    label="Department"
                    options={[
                      "Cardiology",
                      "ICU",
                      "Pharmacy",
                      "Radiology",
                      "Administration",
                      "Laboratory",
                    ]}
                  />

                  <SelectField
                    label="Shift"
                    options={[
                      "Morning",
                      "Evening",
                      "Night",
                      "General",
                    ]}
                  />

                  <InputField
                    label="Mobile Number"
                    placeholder="Enter mobile number"
                  />

                  <InputField
                    label="Email Address"
                    placeholder="Enter email address"
                  />

                  <InputField
                    label="Joining Date"
                    type="date"
                  />

                  <SelectField
                    label="Status"
                    options={[
                      "Active",
                      "On Leave",
                      "Inactive",
                    ]}
                  />

                  <InputField
                    label="Profile Image"
                    type="file"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t bg-slate-50">
                <button
                  onClick={() => setOpenAddUser(false)}
                  className="px-5 py-2 rounded-md font-sans border border-slate-300 text-slate-600 text-sm font-semibold"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setOpenAddUser(false)}
                  className="px-5 py-2 font-sans rounded-md bg-[#0CB8A1] text-white text-sm font-bold shadow-lg shadow-emerald-100"
                >
                  Save User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const InputField = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>

    <input
      {...props}
      className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all"
    />
  </div>
);

const SelectField = ({ label, options = [] }) => (
  <div>
    <label className="text-sm font-semibold text-slate-700 mb-2 block">
      {label}
    </label>

    <select className="w-full border border-slate-200 rounded-md px-4 py-2 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 bg-white transition-all">
      <option>Select</option>

      {options.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  </div>
);

export default Users;