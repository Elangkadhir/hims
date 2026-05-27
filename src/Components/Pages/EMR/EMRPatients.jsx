import React from "react";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaNotesMedical,
  FaHeartbeat,
  FaProcedures,
  FaUserInjured,
} from "react-icons/fa";

function EMRPatients() {
  const navigate = useNavigate();

  const handleViewEMR = (patient) => {
    navigate("/emr-details", {
      state: { patient },
    });
  };

const patients = [
  {
    id: "MRN-1001",
    name: "Ramesh Kumar",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    ageGender: "52 / Male",
    mobile: "+91 9876543210",
    email: "ramesh@gmail.com",
    doctor: "Dr. Sharma",
    department: "Cardiology",
    lastVisit: "12 Mar 2026",
    status: "Stable",
  },

  {
    id: "MRN-1002",
    name: "Lakshmi Devi",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    ageGender: "45 / Female",
    mobile: "+91 9876543211",
    email: "lakshmi@gmail.com",
    doctor: "Dr. Kumar",
    department: "Neurology",
    lastVisit: "10 Mar 2026",
    status: "Monitoring",
  },

  {
    id: "MRN-1003",
    name: "Arun Prakash",
    image:
      "https://randomuser.me/api/portraits/men/54.jpg",
    ageGender: "60 / Male",
    mobile: "+91 9876543212",
    email: "arun@gmail.com",
    doctor: "Dr. Patel",
    department: "Orthopedics",
    lastVisit: "08 Mar 2026",
    status: "Critical",
  },

  {
    id: "MRN-1004",
    name: "Meena Suresh",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    ageGender: "34 / Female",
    mobile: "+91 9876543213",
    email: "meena@gmail.com",
    doctor: "Dr. Monica",
    department: "General Medicine",
    lastVisit: "05 Mar 2026",
    status: "Stable",
  },

  {
    id: "MRN-1005",
    name: "Karthik Raja",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    ageGender: "28 / Male",
    mobile: "+91 9876543214",
    email: "karthik@gmail.com",
    doctor: "Dr. Arjun",
    department: "Urology",
    lastVisit: "04 Mar 2026",
    status: "Monitoring",
  },
];

  return (
    <Layout>
      <div className="min-h-screen font-sans p-5">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <FaArrowRight className="text-purple-600 text-sm" />

            <h2 className="text-xl font-bold text-slate-800">EMR Records</h2>
          </div>
        </div>
        {/* TOP CARDS */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {/* CARD */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Total Records
                </p>

                <h2 className="text-2xl font-bold text-violet-600 mt-2">248</h2>
              </div>

              <div className="w-14 h-14 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center text-2xl">
                <FaNotesMedical />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Critical Cases
                </p>

                <h2 className="text-2xl font-bold text-red-500 mt-2">36</h2>
              </div>

              <div className="w-14 h-14 rounded-xl bg-red-100 text-red-500 flex items-center justify-center text-2xl">
                <FaHeartbeat />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Active Admissions
                </p>

                <h2 className="text-2xl font-bold text-cyan-600 mt-2">142</h2>
              </div>

              <div className="w-14 h-14 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-2xl">
                <FaProcedures />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Pending Reviews
                </p>

                <h2 className="text-2xl font-bold text-orange-500 mt-2">58</h2>
              </div>

              <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
                <FaUserInjured />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN TABLE CARD */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          {/* HEADER */}

          {/* FILTERS */}
          <div className="flex items-end gap-4 mb-4">
            {/* SEARCH */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

                <input
                  type="text"
                  placeholder="Search (Patient / MRN / Doctor)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* STATUS */}
            <div className="w-40 ml-auto">
              <select className="w-full h-10 cursor-pointer rounded-lg border border-slate-200 px-3 text-xs outline-none bg-white text-slate-600">
                <option>All Status</option>

                <option>Stable</option>

                <option>Monitoring</option>

                <option>Critical</option>
              </select>
            </div>

            {/* BUTTON */}
            {/* <button className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">

              <FaPlus className="text-xs" />

              Add EMR

            </button> */}
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm">

                  <th className="px-5 py-3 font-semibold">Patient Name</th>

                  <th className="px-5 py-3 font-semibold">Age / Gender</th>
                  <th className="px-5 py-3 font-semibold">Email</th>
                  <th className="px-5 py-3 font-semibold">Mobile Number</th>

                  <th className="px-5 py-3 font-semibold">Department</th>

                  <th className="px-5 py-3 font-semibold">Doctor</th>

                  <th className="px-5 py-3 font-semibold">Last Updated</th>

                  <th className="px-5 py-3 font-semibold">Status</th>

                  <th className="px-5 py-3 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>

             <tbody>
  {patients.map((item, index) => (
    <tr
      key={index}
      className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition"
    >

      {/* PATIENT */}
      <td className="px-5 py-3">
        <div className="flex items-center gap-3">

          {/* PROFILE IMAGE */}
          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />

          </div>

          {/* NAME + ID */}
          <div className="flex flex-col">

            <span className="font-medium text-slate-700">
              {item.name}
            </span>

            <span className="text-xs text-slate-400 mt-1">
              {item.id}
            </span>

          </div>

        </div>
      </td>

      {/* AGE */}
      <td className="px-5 py-3">
        {item.ageGender}
      </td>

      {/* EMAIL */}
      <td className="px-5 py-3">
        {item.email}
      </td> 

      {/* MOBILE */}
      <td className="px-5 py-3">
        {item.mobile}
      </td>

      {/* DEPARTMENT */}
      <td className="px-5 py-3">
        {item.department}
      </td>

      {/* DOCTOR */}
      <td className="px-5 py-3 font-medium">
        {item.doctor}
      </td>

      {/* DATE */}
      <td className="px-5 py-3">
        {item.lastVisit}
      </td>

      {/* STATUS */}
      <td className="px-5 py-3">

        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
            item.status === "Stable"
              ? "bg-emerald-50 text-emerald-600"
              : item.status === "Monitoring"
              ? "bg-yellow-50 text-yellow-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {item.status}
        </span>

      </td>

      {/* ACTION */}
      <td className="px-5 py-3">

        <div className="flex justify-center">

          <button
            onClick={() => handleViewEMR(item)}
            className="px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold flex items-center gap-2 hover:bg-purple-100 transition"
          >

            <FaEye className="text-xs" />

            View EMR

          </button>

        </div>

      </td>

    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-500">
              Showing 1 to 5 of 248 EMR records
            </p>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-400 flex items-center justify-center">
                <FaChevronLeft className="text-xs" />
              </button>

              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-md border text-xs font-semibold ${
                    page === 1
                      ? "bg-purple-50 border-purple-200 text-purple-600"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-600 text-xs">
                ...
              </button>

              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-600 text-xs">
                20
              </button>

              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-500 flex items-center justify-center">
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EMRPatients;
