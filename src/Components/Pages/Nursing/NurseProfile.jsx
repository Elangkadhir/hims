import React, { useState } from "react";
import Layout from "../../Layout/Layout";

import {
  FaBars,
  FaBell,
  FaUsers,
  FaHeartbeat,
  FaCapsules,
  FaFlask,
  FaBellSlash,
  FaChevronRight,
  FaUserMd,
  FaClipboardList,
  FaNotesMedical,
  FaTint,
  FaStethoscope,
  FaSyringe,
  FaExchangeAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import PatientCareProfile from "./PatientCareProfile";
import { useLocation, useNavigate } from "react-router-dom";

function NurseProfile() {
  const [openQuickModal, setOpenQuickModal] = useState(false);

  const [selectedAction, setSelectedAction] = useState(null);

  const [patientSearch, setPatientSearch] = useState("");

  const [selectedPatientData, setSelectedPatientData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("");


  const [openPatientProfile, setOpenPatientProfile] = useState(false);
const navigate = useNavigate();
const location = useLocation();

const patient = location.state?.patient;
  const topCards = [
    {
      value: "5",
      title: "Assigned Patients",
      action: "View patients",
      icon: <FaUsers />,
      color: "text-violet-600",
      bg: "bg-violet-100",
    },

    {
      value: "4",
      title: "Vitals Pending",
      action: "Update now",
      icon: <FaHeartbeat />,
      color: "text-pink-600",
      bg: "bg-pink-100",
    },

    {
      value: "5",
      title: "Medications Due",
      action: "View MAR",
      icon: <FaCapsules />,
      color: "text-green-600",
      bg: "bg-green-100",
    },

    {
      value: "4",
      title: "Lab Samples Pending",
      action: "View status",
      icon: <FaFlask />,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },

    {
      value: "3",
      title: "Alerts",
      action: "View alerts",
      icon: <FaBell />,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  const schedules = [
    {
      time: "08:00 AM",
      title: "Shift Handover",
      icon: <FaUsers />,
      color: "bg-violet-100 text-violet-600",
    },

    {
      time: "09:00 AM",
      title: "Doctor Rounds",
      icon: <FaStethoscope />,
      color: "bg-green-100 text-green-600",
    },

    {
      time: "11:00 AM",
      title: "Medication Round",
      icon: <FaCapsules />,
      color: "bg-pink-100 text-pink-600",
    },

    {
      time: "02:00 PM",
      title: "Vitals Check",
      icon: <FaHeartbeat />,
      color: "bg-blue-100 text-blue-600",
    },

    {
      time: "04:00 PM",
      title: "Care Plan Review",
      icon: <FaClipboardList />,
      color: "bg-orange-100 text-orange-500",
    },
  ];

  const quickActions = [
    {
      title: "Vitals Entry",
      icon: <FaHeartbeat />,
      color: "bg-violet-100 text-violet-600",
    },

    {
      title: "Medication (MAR)",
      icon: <FaCapsules />,
      color: "bg-pink-100 text-pink-600",
    },

    {
      title: "Nursing Notes",
      icon: <FaNotesMedical />,
      color: "bg-blue-100 text-blue-600",
    },

    {
      title: "Doctor Orders",
      icon: <FaClipboardList />,
      color: "bg-green-100 text-green-600",
    },

    {
      title: "Intake & Output",
      icon: <FaTint />,
      color: "bg-sky-100 text-sky-600",
    },

    {
      title: "Procedure Tracking",
      icon: <FaSyringe />,
      color: "bg-orange-100 text-orange-500",
    },

    {
      title: "Lab Sample Status",
      icon: <FaFlask />,
      color: "bg-violet-100 text-violet-600",
    },

    {
      title: "Emergency Alerts",
      icon: <FaBellSlash />,
      color: "bg-red-100 text-red-500",
    },

    {
      title: "Shift Handover",
      icon: <FaExchangeAlt />,
      color: "bg-cyan-100 text-cyan-600",
    },

    {
      title: "Discharge Checklist",
      icon: <FaCheckCircle />,
      color: "bg-green-100 text-green-600",
    },
  ];

  const doctorOrderTemplates = [
    {
      category: "Medication Orders",
      items: [
        "Paracetamol 500mg",
        "IV Antibiotics",
        "Pain Management",
        "Diabetic Medication",
      ],
    },

    {
      category: "Lab Test Orders",
      items: ["CBC Test", "Blood Sugar", "LFT", "RFT"],
    },

    {
      category: "Radiology / Scan Orders",
      items: ["X-Ray Chest", "CT Brain", "MRI Spine", "Ultrasound Abdomen"],
    },

    {
      category: "Diet Instructions",
      items: [
        "Diabetic Diet",
        "Low Salt Diet",
        "Liquid Diet",
        "High Protein Diet",
      ],
    },

    {
      category: "IV Fluids",
      items: ["Normal Saline", "DNS", "RL Fluid", "Dextrose"],
    },

    {
      category: "Bed Rest / Mobility",
      items: [
        "Strict Bed Rest",
        "Wheelchair Support",
        "Physiotherapy",
        "Walk with Assistance",
      ],
    },

    {
      category: "Oxygen Support",
      items: [
        "Nasal Cannula",
        "Face Mask Oxygen",
        "BiPAP Support",
        "Ventilator Support",
      ],
    },

    {
      category: "Procedure Orders",
      items: ["Wound Dressing", "Catheter Insertion", "Central Line", "ECG"],
    },

    {
      category: "Monitoring Instructions",
      items: [
        "Vitals Every 4 Hours",
        "Continuous ECG",
        "BP Monitoring",
        "SpO2 Monitoring",
      ],
    },

    {
      category: "Nursing Instructions",
      items: [
        "Fall Precautions",
        "Pressure Care",
        "Fluid Charting",
        "Isolation Care",
      ],
    },
  ];

  const patientData = [
    {
      id: "IP1023",
      name: "Kumar S",
      age: 56,
      gender: "Male",
      ward: "ICU",
      bed: "B12",
    },

    {
      id: "IP1045",
      name: "Meena R",
      age: 34,
      gender: "Female",
      ward: "General",
      bed: "G08",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#F7F8FC] p-5">
        <p className="text-xl mb-5 font-bold text-[#1F2A5A]">Nurse Dashboard</p>
        {/* HEADER */}
        <div className="flex items-start justify-between mb-6">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 text-2xl shadow-sm">
                <FaUserMd />
              </div>

              <div>
                <h3 className="font-bold text-[#1F2A5A] text-sm">
                  Priya Ramesh
                </h3>

                <p className="text-xs text-slate-500">Staff Nurse</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* DATE */}
            <select className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-600 outline-none shadow-sm">
              <option>15 May 2025</option>
            </select>

            {/* WARD */}
            <select className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-600 outline-none shadow-sm">
              <option>General Ward - 2nd Floor</option>
            </select>

            {/* PROFILE */}
          </div>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-5 gap-4 mb-5">
          {topCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-2xl ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="text-right">
                  <h2 className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </h2>

                  <p className="text-sm font-sans text-slate-600 mt-1">
                    {item.title}
                  </p>

                  <button className="text-xs font-semibold text-violet-600 mt-3 flex items-center gap-1 ml-auto">
                    {item.action}
                    <FaChevronRight className="text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE + SCHEDULE */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          {/* ASSIGNED PATIENTS */}
          <div className="col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <h2 className="font-bold text-[#1F2A5A]">Assigned Patients</h2>

              <button className="text-sm font-semibold text-violet-600 flex items-center gap-1">
                View all
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              {/* TABLE SCROLL */}
              <div className="max-h-[400px] overflow-y-auto overflow-x-auto scrollHide">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500 sticky top-0 z-10">
                    <tr>
                      <th className="px-5 py-4 text-left">Patient Details</th>

                      <th className="px-5 py-4 text-left">Contact</th>

                      <th className="px-5 py-4 text-left">Doctor</th>

                      <th className="px-5 py-4 text-left">Diagnosis</th>

                      <th className="px-5 py-4 text-left">Bed</th>

                      <th className="px-5 py-4 text-left">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        id: "PID-1001",
                        name: "Ramesh Kumar",
                        ageGender: "52 / Male",
                        mobile: "+91 9876543210",
                        doctor: "Dr. Ravi Kumar",
                        diagnosis: "Hypertension",
                        bed: "202-B",
                        status: "Stable",
                      },

                      {
                        id: "PID-1002",
                        name: "Lakshmi Devi",
                        ageGender: "45 / Female",
                        mobile: "+91 9876543211",
                        doctor: "Dr. Priya",
                        diagnosis: "Diabetes Mellitus",
                        bed: "203-A",
                        status: "Monitoring",
                      },

                      {
                        id: "PID-1003",
                        name: "Arun Prakash",
                        ageGender: "60 / Male",
                        mobile: "+91 9876543212",
                        doctor: "Dr. Arjun",
                        diagnosis: "Cardiac Arrest",
                        bed: "204-B",
                        status: "Critical",
                      },

                      {
                        id: "PID-1004",
                        name: "Meena Suresh",
                        ageGender: "34 / Female",
                        mobile: "+91 9876543213",
                        doctor: "Dr. Kavya",
                        diagnosis: "Viral Fever",
                        bed: "205-A",
                        status: "Stable",
                      },

                      {
                        id: "PID-1005",
                        name: "Karthik Raja",
                        ageGender: "28 / Male",
                        mobile: "+91 9876543214",
                        doctor: "Dr. Naveen",
                        diagnosis: "Asthma",
                        bed: "206-B",
                        status: "Monitoring",
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        onClick={() =>
                          navigate("/patient-care-profile", {
                            state: { patient: item },
                          })
                        }
                        className="border-t border-slate-100 hover:bg-slate-50 transition"
                      >
                        {/* PATIENT DETAILS */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={`https://ui-avatars.com/api/?name=${item.name}`}
                              alt={item.name}
                              className="w-10 h-10 rounded-xl text-xs font-sans object-cover"
                            />

                            <div>
                              <h3 className="text-sm font-bold text-slate-800">
                                {item.name}
                              </h3>

                              <p className="text-xs text-slate-500 mt-1">
                                {item.id}
                              </p>

                              <p className="text-xs text-slate-400 mt-1">
                                {item.ageGender}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* MOBILE */}
                        <td className="px-5 py-4">
                          <p className="text-sm font-medium text-slate-700">
                            {item.mobile}
                          </p>
                        </td>

                        {/* DOCTOR */}
                        <td className="px-5 py-4">
                          <p className="text-sm font-semibold text-[#0CB8A1]">
                            {item.doctor}
                          </p>
                        </td>

                        {/* DIAGNOSIS */}
                        <td className="px-5 py-4">
                          <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-xs font-bold">
                            {item.diagnosis}
                          </span>
                        </td>

                        {/* BED */}
                        <td className="px-5 py-4 font-medium text-slate-700">
                          {item.bed}
                        </td>

                        {/* STATUS */}
                        <td className="px-5 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              item.status === "Stable"
                                ? "bg-green-100 text-green-600"
                                : item.status === "Critical"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-orange-100 text-orange-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* TODAY SCHEDULE */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <h2 className="font-bold text-[#1F2A5A]">Today's Schedule</h2>
            </div>

            <div className="divide-y divide-slate-100">
              {schedules.map((item, index) => (
                <div key={index} className="flex items-center gap-4 px-5 py-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-[90px] text-sm font-semibold text-slate-600">
                    {item.time}
                  </div>

                  <div className="text-sm text-slate-700 font-medium">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK ACTIONS + ALERTS */}
        <div className="grid grid-cols-3 gap-5">
          {/* QUICK ACTIONS */}
          <div className="col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <h2 className="font-bold text-[#1F2A5A] mb-5">Quick Actions</h2>

            <div className="grid grid-cols-5 gap-4">
              {quickActions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAction(item);
                    setOpenQuickModal(true);
                  }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <p className="text-xs font-semibold text-slate-700 text-center leading-5">
                    {item.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* ALERTS */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#1F2A5A]">Recent Alerts</h2>

              <button className="text-sm font-semibold text-violet-600 flex items-center gap-1">
                View all
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>

            <div className="space-y-5">
              {[
                "PID-1003 (Arun Prakash) - High BP",

                "Medication due for PID-1002 (Lakshmi Devi)",

                "Lab sample pending for PID-1005 (Karthik Raja)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-slate-700 font-medium leading-6">
                      {item}
                    </p>
                  </div>

                  <span className="text-xs text-slate-400">10:15 AM</span>
                </div>
              ))}
            </div>

            <button className="w-full h-11 rounded-xl bg-red-50 text-red-500 text-sm font-bold mt-5">
              View All Alerts
            </button>
          </div>
        </div>
        {openQuickModal && selectedAction && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] px-6 py-2 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-lg font-bold">
                    {selectedAction.title}
                  </h2>
                </div>

                <button
                  onClick={() => setOpenQuickModal(false)}
                  className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
                >
                  <FaTimes />
                </button>
              </div>

              {/* BODY */}
              <div className="p-6 h-96 overflow-y-scroll scrollHide">
                {/* VITALS ENTRY */}
                {selectedAction.title === "Vitals Entry" && (
                  <div className="space-y-5">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold hover:bg-[#08B8A8]"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT DETAILS */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* VITALS FORM */}
                    {selectedPatientData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input label="Blood Pressure" placeholder="120/80" />

                        <Input label="Heart Rate" placeholder="72 bpm" />

                        <Input label="Temperature" placeholder="98.6°F" />

                        <Input label="SpO2" placeholder="98%" />

                        <Input label="Respiration" placeholder="18/min" />

                        <Input label="Weight" placeholder="70 kg" />

                        <Input label="Height" placeholder="172 cm" />

                        <Input label="BMI" placeholder="23.8" />
                      </div>
                    )}
                  </div>
                )}

                {/* MEDICATION */}
                {selectedAction.title === "Medication (MAR)" && (
                  <div className="space-y-5">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold hover:bg-[#08B8A8]"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT DETAILS */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* MEDICATION FORM */}
                    {selectedPatientData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input
                          label="Medicine Name"
                          placeholder="Paracetamol"
                        />

                        <Input label="Dosage" placeholder="500mg" />

                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Route
                          </label>

                          <select className="w-full h-10 rounded-lg border border-slate-200 px-4 text-sm outline-none">
                            <option>Oral</option>

                            <option>IV</option>

                            <option>Injection</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Frequency
                          </label>

                          <select className="w-full h-10 rounded-lg border border-slate-200 px-4 text-sm outline-none">
                            <option>Once Daily</option>

                            <option>Twice Daily</option>

                            <option>SOS</option>

                            <option>Morning</option>

                            <option>Night</option>
                          </select>
                        </div>

                        <Input label="Start Date" type="date" />

                        <Input label="Start Time" type="time" />

                        <Input
                          label="Administered By"
                          placeholder="Nurse Name"
                        />

                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Medication Status
                          </label>

                          <select className="w-full h-10 rounded-lg border border-slate-200 px-4 text-sm outline-none">
                            <option>Administered</option>

                            <option>Pending</option>

                            <option>Skipped</option>

                            <option>Completed</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Notes
                          </label>

                          <textarea
                            placeholder="Enter medication notes..."
                            className="w-full h-28 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* NURSING NOTES */}
                {selectedAction.title === "Nursing Notes" && (
                  <div className="space-y-5">
                    <Input
                      label="Patient Name"
                      placeholder="Enter patient name"
                    />

                    <textarea
                      placeholder="Enter nursing observations..."
                      className="w-full h-40 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                    />
                  </div>
                )}

                {/* DOCTOR ORDERS */}
                {selectedAction.title === "Doctor Orders" && (
                  <div className="space-y-6">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT CARD */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ORDER TEMPLATES */}
                    {selectedPatientData && (
                      <div className="space-y-6">
                        {doctorOrderTemplates.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-sm font-bold text-slate-700 mb-3">
                              {section.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                              {section.items.map((item, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedTemplate(item)}
                                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                    selectedTemplate === item
                                      ? "bg-[#0CB8A1] text-white"
                                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                                  }`}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* AUTO FILLED ORDER FORM */}
                    {/* {selectedTemplate && (
                      <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50">
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                          Doctor Order Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <Input
                            label="Selected Order"
                            value={selectedTemplate}
                          />

                          <Input
                            label="Doctor Name"
                            placeholder="Dr. Ravi Kumar"
                          />

                          <Input label="Start Date" type="date" />

                          <Input label="Start Time" type="time" />

                          <div>
                            <label className="text-sm font-semibold text-slate-600 mb-2 block">
                              Priority
                            </label>

                            <select className="w-full h-10 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                              <option>Routine</option>

                              <option>Urgent</option>

                              <option>STAT</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-sm font-semibold text-slate-600 mb-2 block">
                              Status
                            </label>

                            <select className="w-full h-10 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                              <option>Active</option>

                              <option>Pending</option>

                              <option>Completed</option>
                            </select>
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-sm font-semibold text-slate-600 mb-2 block">
                              Additional Instructions
                            </label>

                            <textarea
                              placeholder="Additional doctor instructions..."
                              className="w-full h-32 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                            />
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>
                )}
                {/* INTAKE & OUTPUT */}
                {selectedAction.title === "Intake & Output" && (
                  <div className="space-y-6">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT CARD */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* IO FORM */}
                    {selectedPatientData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* INTAKE */}
                        <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50">
                          <h3 className="text-sm font-bold text-emerald-700 mb-4">
                            Intake
                          </h3>

                          <div className="space-y-4">
                            <Input label="Oral Intake" placeholder="1000 ml" />

                            <Input label="IV Fluids" placeholder="500 ml" />

                            <Input label="Tube Feeding" placeholder="300 ml" />

                            <Input
                              label="Blood Transfusion"
                              placeholder="1 Unit"
                            />
                          </div>
                        </div>

                        {/* OUTPUT */}
                        <div className="border border-rose-200 rounded-2xl p-5 bg-rose-50">
                          <h3 className="text-sm font-bold text-rose-700 mb-4">
                            Output
                          </h3>

                          <div className="space-y-4">
                            <Input label="Urine Output" placeholder="700 ml" />

                            <Input label="Drain Output" placeholder="100 ml" />

                            <Input label="Vomiting" placeholder="50 ml" />

                            <Input
                              label="Suction Output"
                              placeholder="150 ml"
                            />
                          </div>
                        </div>

                        {/* TIME */}
                        <Input label="Recorded Time" type="time" />

                        {/* NURSE */}
                        <Input label="Recorded By" placeholder="Nurse Priya" />

                        {/* NOTES */}
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Notes
                          </label>

                          <textarea
                            placeholder="Additional intake/output observations..."
                            className="w-full h-28 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* PROCEDURE TRACKING */}
                {selectedAction.title === "Procedure Tracking" && (
                  <div className="space-y-6">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT CARD */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PROCEDURE FORM */}
                    {selectedPatientData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* PROCEDURE TYPE */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Procedure Type
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>Wound Dressing</option>

                            <option>IV Cannulation</option>

                            <option>ECG</option>

                            <option>Catheter Insertion</option>

                            <option>Nebulization</option>

                            <option>Suctioning</option>

                            <option>Blood Transfusion</option>

                            <option>Ryles Tube Insertion</option>
                          </select>
                        </div>

                        <Input label="Performed By" placeholder="Nurse Priya" />

                        <Input label="Procedure Date" type="date" />

                        <Input label="Procedure Time" type="time" />

                        {/* STATUS */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Status
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>Completed</option>

                            <option>In Progress</option>

                            <option>Pending</option>

                            <option>Cancelled</option>
                          </select>
                        </div>

                        <Input label="Duration" placeholder="20 mins" />

                        {/* COMPLICATIONS */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Complications
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>None</option>

                            <option>Mild Bleeding</option>

                            <option>Pain</option>

                            <option>Patient Discomfort</option>
                          </select>
                        </div>

                        <Input
                          label="Doctor In Charge"
                          placeholder="Dr. Ravi Kumar"
                        />

                        {/* REMARKS */}
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Procedure Notes
                          </label>

                          <textarea
                            placeholder="Enter procedure observations and remarks..."
                            className="w-full h-32 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* LAB SAMPLE STATUS */}
                {selectedAction.title === "Lab Sample Status" && (
                  <div className="space-y-6">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT CARD */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* LAB FORM */}
                    {selectedPatientData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* TEST TYPE */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Lab Test
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>CBC</option>

                            <option>Blood Sugar</option>

                            <option>LFT</option>

                            <option>RFT</option>

                            <option>Urine Routine</option>

                            <option>Blood Culture</option>

                            <option>Electrolytes</option>

                            <option>Thyroid Profile</option>
                          </select>
                        </div>

                        {/* SAMPLE TYPE */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Sample Type
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>Blood</option>

                            <option>Urine</option>

                            <option>Sputum</option>

                            <option>Swab</option>

                            <option>Stool</option>
                          </select>
                        </div>

                        <Input
                          label="Collected By"
                          placeholder="Lab Technician"
                        />

                        <Input label="Collection Date" type="date" />

                        <Input label="Collection Time" type="time" />

                        {/* PRIORITY */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Priority
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>Routine</option>

                            <option>Urgent</option>

                            <option>STAT</option>
                          </select>
                        </div>

                        {/* STATUS */}
                        <div>
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Sample Status
                          </label>

                          <select className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none">
                            <option>Collected</option>

                            <option>Sent to Lab</option>

                            <option>Processing</option>

                            <option>Completed</option>

                            <option>Rejected</option>
                          </select>
                        </div>

                        <Input
                          label="Lab Technician"
                          placeholder="Technician Name"
                        />

                        {/* NOTES */}
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-slate-600 mb-2 block">
                            Remarks
                          </label>

                          <textarea
                            placeholder="Enter sample notes / observations..."
                            className="w-full h-32 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* EMERGENCY ALERTS */}
                {selectedAction.title === "Emergency Alerts" && (
                  <div className="space-y-6">
                    {/* ACTIVE ALERTS */}
                    <div>
                      <h3 className="text-base font-bold text-slate-800 mb-4">
                        Active Emergency Alerts
                      </h3>

                      <div className="space-y-4">
                        {[
                          {
                            patient: "Ramesh B",
                            type: "Low SpO2 Alert",
                            ward: "ICU - B12",
                            time: "10:15 AM",
                            color: "bg-red-100 text-red-600",
                          },

                          {
                            patient: "Lakshmi Devi",
                            type: "High BP Emergency",
                            ward: "General - G08",
                            time: "09:40 AM",
                            color: "bg-orange-100 text-orange-600",
                          },

                          {
                            patient: "Arun Kumar",
                            type: "Fall Risk Alert",
                            ward: "Ward - P03",
                            time: "08:55 AM",
                            color: "bg-yellow-100 text-yellow-700",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="border border-slate-200 rounded-2xl p-4 flex items-start justify-between"
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${item.color}`}
                              >
                                <FaExclamationTriangle />
                              </div>

                              <div>
                                <h3 className="text-sm font-bold text-slate-800">
                                  {item.type}
                                </h3>

                                <p className="text-sm text-slate-600 mt-1">
                                  {item.patient}
                                </p>

                                <p className="text-xs text-slate-500 mt-1">
                                  {item.ward}
                                </p>
                              </div>
                            </div>

                            <span className="text-xs text-slate-400">
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* QUICK EMERGENCY ACTIONS */}
                    <div>
                      <h3 className="text-base font-bold text-slate-800 mb-4">
                        Trigger Emergency Alert
                      </h3>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          "Code Blue",
                          "Cardiac Arrest",
                          "Low SpO2",
                          "Fall Alert",
                          "High Fever",
                          "ICU Escalation",
                        ].map((item, index) => (
                          <button
                            key={index}
                            className="h-14 rounded-2xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-sm font-semibold transition"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SHIFT HANDOVER */}
                {selectedAction.title === "Shift Handover" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Outgoing Nurse" placeholder="Nurse Priya" />

                    <Input label="Incoming Nurse" placeholder="Nurse Deepa" />

                    <Input label="Ward" placeholder="ICU" />

                    <Input label="Pending Tasks" placeholder="2 Tasks" />

                    <div className="md:col-span-2">
                      <textarea
                        placeholder="Enter handover notes..."
                        className="w-full h-32 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-[#0CB8A1]"
                      />
                    </div>
                  </div>
                )}

                {/* DISCHARGE CHECKLIST */}
                {selectedAction.title === "Discharge Checklist" && (
                  <div className="space-y-6">
                    {/* PATIENT SEARCH */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <label className="text-sm font-semibold text-slate-600 mb-2 block">
                        Search Patient
                      </label>

                      <div className="flex gap-3">
                        <input
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                          placeholder="Enter UHID / Patient Name"
                          className="flex-1 h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0CB8A1]"
                        />

                        <button
                          onClick={() => {
                            const foundPatient = patientData.find(
                              (p) =>
                                p.id
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()) ||
                                p.name
                                  .toLowerCase()
                                  .includes(patientSearch.toLowerCase()),
                            );

                            setSelectedPatientData(foundPatient);
                          }}
                          className="px-5 rounded-xl bg-[#0CB8A1] text-white text-sm font-semibold"
                        >
                          Search
                        </button>
                      </div>

                      {/* PATIENT CARD */}
                      {selectedPatientData && (
                        <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-base font-bold text-slate-800">
                                {selectedPatientData.name}
                              </h3>

                              <p className="text-sm text-slate-500 mt-1">
                                {selectedPatientData.id} •{" "}
                                {selectedPatientData.age} Yrs •{" "}
                                {selectedPatientData.gender}
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-[#0CB8A1]">
                                {selectedPatientData.ward}
                              </p>

                              <p className="text-xs text-slate-500">
                                Bed : {selectedPatientData.bed}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CHECKLIST */}
                    {selectedPatientData && (
                      <div>
                        <h3 className="text-base font-bold text-slate-800 mb-5">
                          Discharge Clearance Status
                        </h3>

                        <div className="space-y-4">
                          {[
                            {
                              title: "Doctor Approval",
                              status: "Completed",
                              by: "Dr. Ravi Kumar",
                              time: "10:15 AM",
                              color: "bg-emerald-100 text-emerald-600",
                            },

                            {
                              title: "Billing Clearance",
                              status: "Pending",
                              by: "Accounts Dept",
                              time: "--",
                              color: "bg-yellow-100 text-yellow-700",
                            },

                            {
                              title: "Pharmacy Clearance",
                              status: "Completed",
                              by: "Pharmacy Team",
                              time: "09:40 AM",
                              color: "bg-emerald-100 text-emerald-600",
                            },

                            {
                              title: "Discharge Summary",
                              status: "Pending",
                              by: "Duty Doctor",
                              time: "--",
                              color: "bg-orange-100 text-orange-600",
                            },

                            {
                              title: "Patient Counseling",
                              status: "Completed",
                              by: "Nurse Priya",
                              time: "11:00 AM",
                              color: "bg-emerald-100 text-emerald-600",
                            },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between"
                            >
                              <div className="flex items-center gap-4">
                                <input
                                  type="checkbox"
                                  checked={item.status === "Completed"}
                                  className="w-5 h-5 accent-[#0CB8A1]"
                                />

                                <div>
                                  <h3 className="text-sm font-bold text-slate-800">
                                    {item.title}
                                  </h3>

                                  <p className="text-xs text-slate-500 mt-1">
                                    Cleared By : {item.by}
                                  </p>
                                </div>
                              </div>

                              <div className="text-right">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}
                                >
                                  {item.status}
                                </span>

                                <p className="text-xs text-slate-400 mt-2">
                                  {item.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* FOOTER */}
              <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setOpenQuickModal(false)}
                  className="h-8 px-5 rounded-md text-sm font-sans border border-slate-300 text-slate-600 font-semibold"
                >
                  Cancel
                </button>

                <button className="h-8 px-6 rounded-md text-sm font-sans bg-[#0CB8A1] text-white font-semibold hover:bg-[#08B8A8]">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PATIENT PROFILE COMPONENT */}
        {openPatientProfile && selectedPatient && (
          <PatientCareProfile patient={selectedPatient} />
        )}
      </div>
    </Layout>
  );
}

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-600 mb-2 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full h-10 rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default NurseProfile;
