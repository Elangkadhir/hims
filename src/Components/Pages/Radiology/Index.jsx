import React from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaXRay,
} from "react-icons/fa";

function Radiology() {
  const cards = [
    {
      title: "Total Scans",
      value: 156,
      icon: <FaXRay />,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Pending Reports",
      value: 42,
      icon: <FaClock />,
      color: "text-orange-600 bg-orange-50",
    },
    {
      title: "Completed",
      value: 98,
      icon: <FaCheckCircle />,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Emergency Cases",
      value: 8,
      icon: <FaExclamationTriangle />,
      color: "text-red-600 bg-red-50",
    },
  ];

  const scans = [
    {
      token: "RAD-1001",
      patient: "Arun Kumar",
      uhid: "UHID: 100234",
      age: "45 / Male",
      scan: "CT Abdomen",
      type: "Plain",
      doctor: "Dr. Pradeep",
      time: "09:00 AM",
      status: "Waiting",
    },
    {
      token: "RAD-1002",
      patient: "Meena B",
      uhid: "UHID: 100235",
      age: "32 / Female",
      scan: "MRI Brain",
      type: "Contrast",
      doctor: "Dr. S Kumar",
      time: "09:15 AM",
      status: "In Progress",
    },
    {
      token: "RAD-1003",
      patient: "Ramesh P",
      uhid: "UHID: 100236",
      age: "60 / Male",
      scan: "X-Ray Chest",
      type: "PA View",
      doctor: "Dr. Senthil",
      time: "09:30 AM",
      status: "Completed",
    },
    {
      token: "RAD-1004",
      patient: "Sangeetha R",
      uhid: "UHID: 100237",
      age: "29 / Female",
      scan: "USG Abdomen",
      type: "Whole Abdomen",
      doctor: "Dr. Latha",
      time: "10:00 AM",
      status: "Reporting",
    },
  ];

  const statusStyle = {
    Waiting: "bg-blue-50 text-blue-600",
    "In Progress": "bg-orange-50 text-orange-600",
    Completed: "bg-emerald-50 text-emerald-600",
    Reporting: "bg-purple-50 text-purple-600",
  };

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-purple-600 text-sm" />

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Radiology
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Manage scans and radiology workflow
                </p>
              </div>
            </div>

            <button className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
              <FaPlus className="text-xs" />
              New Scan
            </button>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="text-2xl font-bold text-slate-800 mt-1">
                    {item.value}
                  </h2>
                </div>

                <div className={`p-3 rounded-lg text-lg ${item.color}`}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          {/* FILTERS */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">

            {/* SEARCH */}
            <div className="relative w-[280px]">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

              <input
                type="text"
                placeholder="Search Patient / Token"
                className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-purple-400"
              />
            </div>

            {/* SELECT */}
            <select className="h-10 border border-slate-200 rounded-lg px-3 text-sm outline-none bg-white">
              <option>Scan Type</option>
            </select>

            <select className="h-10 border border-slate-200 rounded-lg px-3 text-sm outline-none bg-white">
              <option>Status</option>
            </select>

            <select className="h-10 border border-slate-200 rounded-lg px-3 text-sm outline-none bg-white">
              <option>Doctor</option>
            </select>

            <button className="h-10 px-4 rounded-lg border border-slate-200 text-sm font-medium">
              Today
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-lg border border-slate-200">

            <table className="w-full text-left">

              {/* TABLE HEAD */}
              <thead>
                <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm">

                  <th className="px-5 py-3 font-semibold">
                    Token
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Patient
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Age / Gender
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Scan Type
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Doctor
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Time
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Status
                  </th>

                  <th className="px-5 py-3 font-semibold text-center">
                    Action
                  </th>

                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {scans.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition"
                  >

                    {/* TOKEN */}
                    <td className="px-5 py-4 font-bold text-purple-600">
                      {item.token}
                    </td>

                    {/* PATIENT */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">
                          {item.patient.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {item.patient}
                          </p>

                          <p className="text-xs text-slate-500">
                            {item.uhid}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* AGE */}
                    <td className="px-5 py-4">
                      {item.age}
                    </td>

                    {/* SCAN */}
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-800">
                        {item.scan}
                      </p>

                      <p className="text-xs text-slate-500">
                        {item.type}
                      </p>
                    </td>

                    {/* DOCTOR */}
                    <td className="px-5 py-4">
                      {item.doctor}
                    </td>

                    {/* TIME */}
                    <td className="px-5 py-4">
                      {item.time}
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyle[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center">

                        <button className="px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold flex items-center gap-2">
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

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-500">
              Showing {scans.length} radiology scans
            </p>

            <div className="flex items-center gap-2">

              <button className="w-8 h-8 rounded-lg bg-[#8C3EA8] text-white text-xs font-bold">
                1
              </button>

              <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold">
                2
              </button>

              <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold">
                3
              </button>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Radiology;