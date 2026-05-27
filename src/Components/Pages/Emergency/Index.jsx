import React, { useState } from "react";
import Layout from "../../Layout/Layout";

import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaProcedures,
  FaHeartbeat,
  FaAmbulance,
  FaBed,
  FaUserMd,
  FaBell,
  FaFileMedical,
  FaPrint,
  FaSyringe,
  FaNotesMedical,
  FaHospital,
  FaExclamationTriangle,
} from "react-icons/fa";

function Emergency() {
  const [openEmergencyModal, setOpenEmergencyModal] = useState(false);

  const [openViewModal, setOpenViewModal] = useState(false);
  const [openAddEmergency, setOpenAddEmergency] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const emergencyCards = [
    {
      title: "Emergency Patients",
      value: "128",
      icon: <FaProcedures />,
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },

    {
      title: "Critical Patients",
      value: "18",
      icon: <FaHeartbeat />,
      bg: "bg-red-50",
      text: "text-red-600",
    },

    {
      title: "Ambulance Arrivals",
      value: "12",
      icon: <FaAmbulance />,
      bg: "bg-violet-50",
      text: "text-violet-600",
    },

    {
      title: "Doctors On Duty",
      value: "16",
      icon: <FaUserMd />,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },

    {
      title: "Beds Available",
      value: "24",
      icon: <FaBed />,
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
  ];

  const emergencyPatients = [
    {
      id: "ER-1001",
      patient: "Ravi Kumar",
      ageGender: "45 / Male",
      complaint: "Chest Pain",
      triage: "Critical",
      doctor: "Dr. Sharma",
      date: "24-05-2026",
      time: "10:25 AM",
      bed: "ER-12",
      ambulance: "TN09AB1234",
      status: "Under Treatment",
    },

    {
      id: "ER-1002",
      patient: "Priya S",
      ageGender: "32 / Female",
      complaint: "Accident Injury",
      triage: "Moderate",
      doctor: "Dr. Kumar",
      date: "24-05-2026",
      time: "11:10 AM",
      bed: "ER-08",
      ambulance: "TN10CD5544",
      status: "Waiting",
    },

    {
      id: "ER-1003",
      patient: "Arjun",
      ageGender: "28 / Male",
      complaint: "Breathing Issue",
      triage: "Critical",
      doctor: "Dr. Monica",
      date: "24-05-2026",
      time: "09:40 AM",
      bed: "ICU-02",
      ambulance: "TN11XY7788",
      status: "Admitted",
    },

    {
      id: "ER-1004",
      patient: "Sneha",
      ageGender: "39 / Female",
      complaint: "High Fever",
      triage: "Stable",
      doctor: "Dr. Patel",
      date: "24-05-2026",
      time: "12:15 PM",
      bed: "ER-05",
      ambulance: "TN07QQ9988",
      status: "Discharged",
    },
  ];

  const triageStyle = {
    Critical: "bg-red-50 text-red-600 before:bg-red-500",

    Moderate: "bg-yellow-50 text-yellow-700 before:bg-yellow-500",

    Stable: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
  };

  const statusStyle = {
    Waiting: "bg-yellow-50 text-yellow-600 before:bg-yellow-500",

    "Under Treatment": "bg-cyan-50 text-cyan-600 before:bg-cyan-500",

    Admitted: "bg-violet-50 text-violet-600 before:bg-violet-500",

    Discharged: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
  };

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-cyan-600 text-sm" />

              <h2 className="text-xl font-bold text-slate-800">Emergency</h2>
            </div>

            <button
              onClick={() => setOpenAddEmergency(true)}
              className="bg-[#08B8A8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              Add Emergency
            </button>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-5">
            {emergencyCards.map((card, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl px-4 py-4 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      {card.title}
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-1">
                      {card.value}
                    </h2>
                  </div>

                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg ${card.bg} ${card.text}`}
                  >
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEARCH */}
          <div className="flex items-end gap-4 mb-4">
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

                <input
                  type="text"
                  placeholder="Search (Patient / Complaint / ER ID)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="w-44 ml-auto">
              <select className="w-full h-10 rounded-lg border border-slate-200 px-3 text-xs outline-none bg-white text-slate-600">
                <option>All Status</option>

                <option>Critical</option>

                <option>Moderate</option>

                <option>Stable</option>

                <option>Discharged</option>
              </select>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto scrollHide rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] text-white text-sm">
                  <th className="px-5 py-3 font-semibold">ER ID</th>

                  <th className="px-5 py-3 font-semibold">Patient</th>

                  <th className="px-5 py-3 font-semibold">Complaint</th>

                  <th className="px-5 py-3 font-semibold">Triage</th>

                  <th className="px-5 py-3 font-semibold">Date</th>

                  <th className="px-5 py-3 font-semibold">Time</th>

                  <th className="px-5 py-3 font-semibold">Ambulance</th>

                  <th className="px-5 py-3 font-semibold">Doctor</th>

                  <th className="px-5 py-3 font-semibold">Bed</th>

                  <th className="px-5 py-3 font-semibold">Status</th>

                  <th className="px-5 py-3 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {emergencyPatients.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700 whitespace-nowrap "
                  >
                    <td className="px-5 py-3 font-medium">{item.id}</td>

                    <td className="px-5 py-3">
                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.patient}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          {item.ageGender}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-3">{item.complaint}</td>

                    <td className="px-5 py-3">
                      <span
                        className={`relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold before:content-[''] before:w-2 before:h-2 before:rounded-full ${
                          triageStyle[item.triage]
                        }`}
                      >
                        {item.triage}
                      </span>
                    </td>

                    <td className="px-5 py-3">{item.date}</td>

                    <td className="px-5 py-3">{item.time}</td>

                    <td className="px-5 py-3">{item.ambulance}</td>

                    <td className="px-5 py-3">{item.doctor}</td>

                    <td className="px-5 py-3">{item.bed}</td>

                    <td className="px-5 py-3">
                      <span
                        className={`relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold before:content-[''] before:w-2 before:h-2 before:rounded-full ${
                          statusStyle[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setOpenViewModal(true)}
                          className="px-3 py-1.5 rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-600 text-xs font-bold flex items-center gap-2"
                        >
                          <FaEye className="text-xs" />
                          View
                        </button>

                        <button
                          onClick={() => setOpenUpdateModal(true)}
                          className="px-3 py-1.5 rounded-lg border border-violet-200 bg-violet-50 text-violet-600 text-xs font-bold flex items-center gap-2"
                        >
                          <FaEdit className="text-xs" />
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {openAddEmergency && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3 flex justify-between items-center">
                <h2 className="text-white font-bold text-lg">
                  Emergency Registration
                </h2>

                <button
                  onClick={() => setOpenAddEmergency(false)}
                  className="text-white text-xl"
                >
                  ×
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-5 max-h-[80vh] overflow-y-auto">
                <h3 className="text-sm font-bold text-slate-700 mb-3">
                  Patient Basic Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    placeholder="Patient Name"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Age"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <select className="h-11 border rounded-lg px-3 text-sm bg-white outline-none focus:border-[#0CB8A1]">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>

                  <input
                    placeholder="Mobile Number"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Emergency Contact"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <select className="h-11 border rounded-lg px-3 text-sm bg-white outline-none focus:border-[#0CB8A1]">
                    <option>Blood Group</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                    <option>AB+</option>
                  </select>
                </div>

                {/* EMERGENCY DETAILS */}
                <h3 className="text-sm font-bold text-slate-700 mt-5 mb-3">
                  Emergency Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input
                    placeholder="Complaint (Chest Pain, Accident...)"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <select className="h-11 border rounded-lg px-3 text-sm bg-white outline-none focus:border-[#0CB8A1]">
                    <option>Triage Level</option>
                    <option>Critical</option>
                    <option>Moderate</option>
                    <option>Stable</option>
                  </select>

                  <input
                    type="date"
                    placeholder="Arrival Time"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />
                  <input
                    type="time"
                    placeholder="Arrival Time"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />
                  <div>        
                    <select className="w-full h-11 border border-slate-200 rounded-md px-3 text-sm bg-white outline-none focus:border-[#0CB8A1]">
                      <option>Select Ward</option>
                      <option>General Ward</option>
                      <option>ICU</option>
                      <option>Emergency Ward</option>
                      <option>Private Room</option>
                      <option>Pediatric Ward</option>
                      <option>Maternity Ward</option>
                    </select>
                  </div>
                  <div>

                    <select className="w-full h-11 border border-slate-200 rounded-md px-3 text-sm bg-white outline-none focus:border-[#0CB8A1]">
                      <option>Select Bed</option>
                      <option>Bed - A101</option>
                      <option>Bed - A102</option>
                      <option>Bed - ICU01</option>
                      <option>Bed - ICU02</option>
                      <option>Bed - ER05</option>
                      <option>Bed - P301</option>
                    </select>
                  </div>
                  <input
                    placeholder="Assign Doctor"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />
                </div>

                {/* AMBULANCE */}
                <h3 className="text-sm font-bold text-slate-700 mt-5 mb-3">
                  Ambulance Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    placeholder="Ambulance Number"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Driver Name"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Pickup Location"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />
                </div>

                {/* VITALS */}
                <h3 className="text-sm font-bold text-slate-700 mt-5 mb-3">
                  Initial Vitals
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <input
                    placeholder="BP"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Pulse"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="Temp"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />

                  <input
                    placeholder="SpO2"
                    className="h-11 border rounded-lg px-3 text-sm outline-none focus:border-[#0CB8A1]"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-5 py-3 border-t flex justify-end gap-3">
                <button
                  onClick={() => setOpenAddEmergency(false)}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Cancel
                </button>

                <button className="px-5 py-2 bg-[#08B8A8] text-white rounded-lg text-sm font-semibold">
                  Save Emergency
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODAL */}
        {openViewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">
                  Emergency Patient Details
                </h2>

                <button
                  onClick={() => setOpenViewModal(false)}
                  className="text-white text-xl"
                >
                  ×
                </button>
              </div>

              <div className="p-5 max-h-[85vh] overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">Emergency Notes</p>

                    <h3 className="font-semibold mt-2">
                      Chest pain with breathing difficulty
                    </h3>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">Vitals</p>

                    <h3 className="font-semibold mt-2">
                      BP: 140/90 | Pulse: 102
                    </h3>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">Allergies</p>

                    <h3 className="font-semibold mt-2">Penicillin</h3>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">Treatment Timeline</p>

                    <h3 className="font-semibold mt-2">CPR Initiated</h3>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">
                      Doctor Instructions
                    </p>

                    <h3 className="font-semibold mt-2">Shift to ICU</h3>
                  </div>

                  <div className="border rounded-xl p-4">
                    <p className="text-xs text-slate-500">Billing Summary</p>

                    <h3 className="font-semibold mt-2">₹12,500</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UPDATE MODAL */}
        {openUpdateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">
                  Update Emergency Patient
                </h2>

                <button
                  onClick={() => setOpenUpdateModal(false)}
                  className="text-white text-xl"
                >
                  ×
                </button>
              </div>

              <div className="p-5 max-h-[85vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Update Condition"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <select className="h-11 rounded-lg border border-slate-200 px-3 text-sm bg-white">
                    <option>Change Triage</option>

                    <option>Critical</option>

                    <option>Moderate</option>

                    <option>Stable</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Assign Doctor"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Update Bed"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Treatment Notes"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Add Medication"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Shift Patient"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <select className="h-11 rounded-lg border border-slate-200 px-3 text-sm bg-white">
                    <option>Discharge Status</option>

                    <option>Under Treatment</option>

                    <option>Discharged</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Police Case Entry"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Accident Case Entry"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Blood Requirement Alert"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />

                  <input
                    type="file"
                    className="h-11 rounded-lg border border-slate-200 px-3 text-sm"
                  />
                </div>

                <div className="flex justify-end mt-5">
                  <button className="bg-[#08B8A8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
                    Save Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Emergency;
