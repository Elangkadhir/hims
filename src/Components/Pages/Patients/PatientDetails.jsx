import React, { useState } from "react";
import {
  FaArrowRight,
  FaEdit,
  FaPlus,
  FaUpload,
  FaFileMedical,
  FaHeartbeat,
  FaFileAlt,
  FaCalendarCheck,
  FaShieldAlt,
  FaVenusMars,
  FaPhoneAlt,
  FaWeight,
  FaThermometerHalf,
  FaHeart,
  FaLungs,
  FaIdCard,
  FaBriefcaseMedical,
  FaEnvelope,
  FaProcedures,
  FaBed,
  FaNotesMedical,
  FaUser,
  FaWalking,
  FaTint,
  FaWind,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";
import MedicalHistory from "./MedicalHistory";
import { useLocation } from "react-router-dom";

function PatientDetails() {
  const location = useLocation();
  const patient = location.state?.patient;

  const patientType = patient?.patientType || "OP";
  const isIP = patientType === "IP";

  const tabs = isIP
    ? [
        { label: "Vitals History", icon: FaHeartbeat },
        { label: "Medical History", icon: FaFileMedical },
        { label: "Medications", icon: FaFileMedical },
        { label: "Activity Timeline", icon: FaCalendarCheck },
        { label: "Documents / Reports", icon: FaFileAlt },
        { label: "Insurance Details", icon: FaShieldAlt },
      ]
    : [
        { label: "Vitals History", icon: FaHeartbeat },
        { label: "Medical History", icon: FaFileMedical },
        { label: "Documents / Reports", icon: FaFileAlt },
        { label: "Visit History", icon: FaCalendarCheck },
        { label: "Insurance Details", icon: FaShieldAlt },
      ];

  const [activeTab, setActiveTab] = useState("Vitals History");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openVisitModal, setOpenVisitModal] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [openVitalsModal, setOpenVitalsModal] = useState(false);
  const [showVitalsHistory, setShowVitalsHistory] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [openDischargeModal, setOpenDischargeModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-purple-600 text-sm" />
                <h2 className="text-xl font-bold text-slate-800">
                  Patient Profile
                </h2>
              </div>
              <p className="text-sm text-slate-500 ml-6">
                View detailed information and medical records
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpenEditModal(true)}
                className="h-8 px-3 rounded-lg border border-purple-300 text-purple-600 bg-white text-sm font-bold flex items-center gap-2"
              >
                <FaEdit />
                Edit Profile
              </button>

              {isIP && (
                <>
                  <button
                    onClick={() => setOpenTransferModal(true)}
                    className="h-8 px-3 rounded-lg bg-orange-500 text-white text-sm font-bold"
                  >
                    Transfer
                  </button>

                  <button
                    onClick={() => setOpenDischargeModal(true)}
                    className="h-8 px-3 rounded-lg bg-red-500 text-white text-sm font-bold"
                  >
                    Discharge
                  </button>
                </>
              )}

              <button
                onClick={() => setOpenVisitModal(true)}
                className="h-8 px-3 rounded-lg bg-[#0CB8A1] text-white text-sm font-bold flex items-center gap-2"
              >
                <FaPlus />
                Add Visit
              </button>

              <button
                onClick={() => setOpenUploadModal(true)}
                className="h-8 px-3 rounded-lg bg-[#8C3EA8] text-white text-sm font-bold flex items-center gap-2"
              >
                <FaUpload />
                Upload Report
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 p-4">
            <div className="col-span-12 lg:col-span-2">
              <div className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex flex-col items-center px-4 py-5">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-300 to-purple-300 p-1">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Patient"
                      className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>

                  <h3 className="text-base font-sans font-bold text-slate-900 mt-4">
                    {patient?.name || "Ravi Kumar"}
                  </h3>

                  <span className="mt-2 px-3 py-1 rounded-lg bg-purple-50 text-[#0CB8A1] text-xs font-sans font-bold">
                    Patient ID: {patient?.id || "PT-10234"}
                  </span>
                  <div className="mt-3 space-y-2 w-full">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50">
                      <FaBriefcaseMedical className="text-blue-600 text-xs" />

                      <p className="text-xs font-bold text-blue-700">
                        {patient?.doctor || "Dr. Sharma"}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-50">
                      <FaFileMedical className="text-emerald-600 text-xs" />

                      <p className="text-xs font-bold text-emerald-700">
                        {patient?.department || "Cardiology"}
                      </p>
                    </div>
                  </div>
                  {isIP && (
                    <div className="mt-2 w-full">
                      <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-orange-50 border border-orange-100">
                        <FaBriefcaseMedical className="text-orange-600 text-xs" />

                        <p className="text-xs font-bold text-orange-700">
                          Ward: {patient?.ward || "Ward A"} | Bed:{" "}
                          {patient?.bed || "B-12"}
                        </p>
                      </div>
                    </div>
                  )}
                  <span
                    className={`mt-3 px-4 py-2 rounded-full text-xs font-bold ${
                      isIP
                        ? "bg-orange-50 text-orange-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    ● {patientType} Patient
                  </span>
                </div>

                <div className="border-t border-slate-200 px-4 py-4 space-y-5">
                  <InfoRow
                    icon={<FaVenusMars />}
                    label="Age / Gender:"
                    value={patient?.ageGender || "45 Years / Male"}
                  />
                  <InfoRow
                    icon={<FaEnvelope />}
                    label="Email:"
                    value="ravikumar@gmail.com"
                  />
                  <InfoRow
                    icon={<FaPhoneAlt />}
                    label="Contact:"
                    value={patient?.contact || "9876543210"}
                  />
                  <InfoRow
                    icon={<FaIdCard />}
                    label="UHID:"
                    value="UHID-2026-10234"
                  />
                  <InfoRow
                    icon={<FaBriefcaseMedical />}
                    label="Registered On:"
                    value="15 Jan 2026"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-10">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="flex overflow-x-auto border-b border-slate-200 bg-slate-50">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.label;

                    return (
                      <button
                        key={tab.label}
                        onClick={() => setActiveTab(tab.label)}
                        className={`min-w-fit px-5 py-4 text-xs font-sans font-bold flex items-center gap-2 border-b-4 transition ${
                          active
                            ? "text-[#0CB8A1] border-[#0CB8A1] bg-white"
                            : "text-slate-600 border-transparent hover:text-purple-600"
                        }`}
                      >
                        <Icon className="text-base" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-5">
                  {activeTab === "Medical History" && <MedicalHistory />}

                  {activeTab === "Vitals History" && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-700">
                          Latest Vitals
                        </h3>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setShowVitalsHistory(!showVitalsHistory)
                            }
                            className="px-3 py-2 rounded-lg border border-purple-300 text-purple-600 text-xs font-bold"
                          >
                            {showVitalsHistory
                              ? "Hide History"
                              : "View History"}
                          </button>

                          <button
                            onClick={() => setOpenVitalsModal(true)}
                            className="px-3 py-2 rounded-lg bg-[#0CB8A1] text-white text-xs font-bold"
                          >
                            + Add Vitals
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        <VitalCard
                          icon={<FaLungs />}
                          title="BP"
                          value="120/80"
                          unit="mmHg"
                          color="blue"
                          textColor="text-rose-600"
                        />

                        <VitalCard
                          icon={<FaHeart />}
                          title="Heart Rate"
                          value="72"
                          unit="bpm"
                          color="red"
                        />

                        <VitalCard
                          icon={<FaThermometerHalf />}
                          title="Temperature"
                          value="98.6"
                          unit="°F"
                          color="orange"
                        />

                        <VitalCard
                          icon={<FaWeight />}
                          title="Weight"
                          value="70.5"
                          unit="kg"
                          color="teal"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaWind />}
                          title="Respiration"
                          value="18"
                          unit="/min"
                          color="cyan"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaTint />}
                          title="SpO2"
                          value="98"
                          unit="%"
                          color="sky"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaWalking />}
                          title="Pulse Rate"
                          value="74"
                          unit="bpm"
                          color="pink"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaUser />}
                          title="Height"
                          value="172"
                          unit="cm"
                          color="violet"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaHeartbeat />}
                          title="BMI"
                          value="23.8"
                          unit=""
                          color="emerald"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaNotesMedical />}
                          title="Sugar Level"
                          value="110"
                          unit="mg/dL"
                          color="amber"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaBed />}
                          title="Pain Score"
                          value="2"
                          unit="/10"
                          color="rose"
                        />

                        {/* NEW */}
                        <VitalCard
                          icon={<FaProcedures />}
                          title="Consciousness"
                          value="Normal"
                          unit=""
                          color="indigo"
                        />
                      </div>

                      {showVitalsHistory && (
                        <div className="mt-6">
                          <div className="flex justify-end">
                            <button
                              onClick={() => setOpenFilterModal(true)}
                              className="bg-[#0CB8A1] hover:bg-[#089981] text-white px-4 py-1 rounded-lg text-sm font-semibold transition flex items-center gap-2 shadow-sm"
                            >
                              <FaFilter className="text-xs" />
                              Filter
                            </button>
                          </div>
                          <div className="mt-5 rounded-xl border border-slate-200 overflow-x-auto scrollWidth">
                            <table className="w-full text-sm min-w-[1600px]">
                              <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                  <th className="px-4 py-3 text-left">Date</th>
                                  <th className="px-4 py-3 text-left">Time</th>
                                  <th className="px-4 py-3 text-left">BP</th>
                                  <th className="px-4 py-3 text-left">
                                    Heart Rate
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Temperature
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Weight
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Respiration
                                  </th>
                                  <th className="px-4 py-3 text-left">SpO2</th>
                                  <th className="px-4 py-3 text-left">
                                    Pulse Rate
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Height
                                  </th>
                                  <th className="px-4 py-3 text-left">BMI</th>
                                  <th className="px-4 py-3 text-left">
                                    Sugar Level
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Pain Score
                                  </th>
                                  <th className="px-4 py-3 text-left">
                                    Consciousness
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                                  <td className="px-4 py-3 font-medium text-slate-700">
                                    12 Mar 2026
                                  </td>

                                  <td className="px-4 py-3 text-slate-600">
                                    08:30 AM
                                  </td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">
                                      120/80
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">72 bpm</td>

                                  <td className="px-4 py-3">98.6°F</td>

                                  <td className="px-4 py-3">70.5 kg</td>

                                  <td className="px-4 py-3">18/min</td>

                                  <td className="px-4 py-3">
                                    <span className="text-emerald-600 font-semibold">
                                      98%
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">74 bpm</td>

                                  <td className="px-4 py-3">172 cm</td>

                                  <td className="px-4 py-3">23.8</td>

                                  <td className="px-4 py-3">110 mg/dL</td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold">
                                      2/10
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">
                                      Normal
                                    </span>
                                  </td>
                                </tr>

                                <tr className="hover:bg-slate-50 transition">
                                  <td className="px-4 py-3 font-medium text-slate-700">
                                    08 Mar 2026
                                  </td>

                                  <td className="px-4 py-3 text-slate-600">
                                    09:15 AM
                                  </td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">
                                      118/78
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">74 bpm</td>

                                  <td className="px-4 py-3">98.2°F</td>

                                  <td className="px-4 py-3">71.0 kg</td>

                                  <td className="px-4 py-3">17/min</td>

                                  <td className="px-4 py-3">
                                    <span className="text-emerald-600 font-semibold">
                                      97%
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">76 bpm</td>

                                  <td className="px-4 py-3">172 cm</td>

                                  <td className="px-4 py-3">24.0</td>

                                  <td className="px-4 py-3">108 mg/dL</td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
                                      1/10
                                    </span>
                                  </td>

                                  <td className="px-4 py-3">
                                    <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">
                                      Alert
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "Medications" && (
                    <div className="rounded-xl border border-slate-200 overflow-hidden">
                      <div className="flex items-center justify-end p-3">
                        <button
                          onClick={() => setOpenModal(true)}
                          className="flex items-center gap-2 bg-[#0CB8A1] hover:bg-[#089981] text-white px-4 py-1 rounded-lg text-sm font-semibold transition"
                        >
                          <FaPlus />
                          Add
                        </button>
                      </div>
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                          <tr>
                            <th className="px-4 py-3 text-left">Date</th>

                            <th className="px-4 py-3 text-left">Time</th>

                            <th className="px-4 py-3 text-left">Medicine</th>

                            <th className="px-4 py-3 text-left">Dosage</th>

                            <th className="px-4 py-3 text-left">Frequency</th>

                            <th className="px-4 py-3 text-left">Route</th>

                            <th className="px-4 py-3 text-left">
                              Prescribed By
                            </th>

                            <th className="px-4 py-3 text-left">
                              Administered By
                            </th>

                            <th className="px-4 py-3 text-left">Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {[
                            [
                              "12 Mar 2026",
                              "08:00 AM",
                              "Paracetamol 500mg",
                              "1 Tablet",
                              "Twice Daily",
                              "Oral",
                              "Dr. Sharma",
                              "Nurse Priya",
                              "Active",
                            ],

                            [
                              "12 Mar 2026",
                              "07:30 AM",
                              "Pantoprazole 40mg",
                              "1 Tablet",
                              "Morning",
                              "Oral",
                              "Dr. Kumar",
                              "Nurse Anitha",
                              "Active",
                            ],

                            [
                              "11 Mar 2026",
                              "09:00 PM",
                              "Ceftriaxone",
                              "1g",
                              "Once Daily",
                              "IV",
                              "Dr. Patel",
                              "Nurse Deepa",
                              "Completed",
                            ],
                          ].map((item, index) => (
                            <tr
                              key={index}
                              className="border-t border-slate-100 hover:bg-slate-50"
                            >
                              {/* DATE */}
                              <td className="px-4 py-3 text-slate-600">
                                {item[0]}
                              </td>

                              {/* TIME */}
                              <td className="px-4 py-3 font-medium text-slate-700">
                                {item[1]}
                              </td>

                              {/* MEDICINE */}
                              <td className="px-4 py-3 font-semibold text-slate-800">
                                {item[2]}
                              </td>

                              {/* DOSAGE */}
                              <td className="px-4 py-3">{item[3]}</td>

                              {/* FREQUENCY */}
                              <td className="px-4 py-3">{item[4]}</td>

                              {/* ROUTE */}
                              <td className="px-4 py-3">
                                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold">
                                  {item[5]}
                                </span>
                              </td>

                              {/* PRESCRIBED BY */}
                              <td className="px-4 py-3 font-medium text-[#0CB8A1]">
                                {item[6]}
                              </td>

                              {/* ADMINISTERED BY */}
                              <td className="px-4 py-3 font-medium text-purple-600">
                                {item[7]}
                              </td>

                              {/* STATUS */}
                              <td className="px-4 py-3">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    item[8] === "Active"
                                      ? "bg-emerald-50 text-emerald-600"
                                      : "bg-slate-100 text-slate-600"
                                  }`}
                                >
                                  {item[8]}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "Activity Timeline" && (
                    <div className="space-y-4">
                      {[
                        [
                          "12 Mar 2026",
                          "09:00 AM",
                          "Doctor Round Completed",
                          "Dr. Kumar reviewed patient condition.",
                        ],

                        [
                          "12 Mar 2026",
                          "10:30 AM",
                          "Medication Given",
                          "Pantoprazole 40mg administered.",
                        ],

                        [
                          "12 Mar 2026",
                          "12:00 PM",
                          "Vitals Recorded",
                          "BP 120/80, HR 72 bpm, Temp 98.6°F.",
                        ],

                        [
                          "12 Mar 2026",
                          "02:00 PM",
                          "Nursing Note",
                          "Patient stable. No complaints.",
                        ],
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-slate-200 bg-white p-4 flex gap-4 hover:shadow-sm transition"
                        >
                          {/* DATE + TIME */}
                          <div className="min-w-[110px]">
                            <p className="text-xs font-semibold text-slate-500">
                              {item[0]}
                            </p>

                            <p className="text-sm font-bold text-[#0CB8A1] mt-1">
                              {item[1]}
                            </p>
                          </div>

                          {/* CONTENT */}
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-slate-800">
                              {item[2]}
                            </h3>

                            <p className="text-xs text-slate-500 mt-1 leading-5">
                              {item[3]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Documents / Reports" && (
                    <div className="rounded-xl border border-slate-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                          <tr>
                            <th className="px-4 py-3 text-left">Document</th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-4 py-3">Blood Report</td>
                            <td className="px-4 py-3">Lab Report</td>
                            <td className="px-4 py-3">12 Mar 2026</td>
                            <td className="px-4 py-3">
                              <button className="text-purple-600 font-semibold">
                                View
                              </button>
                            </td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-4 py-3">Prescription</td>
                            <td className="px-4 py-3">Doctor Note</td>
                            <td className="px-4 py-3">10 Mar 2026</td>
                            <td className="px-4 py-3">
                              <button className="text-purple-600 font-semibold">
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "Visit History" && (
                    <div className="rounded-xl border border-slate-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                          <tr>
                            <th className="px-4 py-3 text-left">Visit ID</th>
                            <th className="px-4 py-3 text-left">Visit Date</th>
                            <th className="px-4 py-3 text-left">Visit Type</th>
                            <th className="px-4 py-3 text-left">Department</th>
                            <th className="px-4 py-3 text-left">Doctor</th>
                            <th className="px-4 py-3 text-left">Diagnosis</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-center">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            [
                              "VIS-1021",
                              "12 Mar 2026",
                              "Follow-up",
                              "Cardiology",
                              "Dr. Sharma",
                              "Hypertension",
                              "Completed",
                            ],
                            [
                              "VIS-1020",
                              "08 Mar 2026",
                              "Consultation",
                              "General Medicine",
                              "Dr. Kumar",
                              "Diabetes Review",
                              "Reviewed",
                            ],
                            [
                              "VIS-1019",
                              "01 Mar 2026",
                              "Lab Review",
                              "Diagnostics",
                              "Dr. Patel",
                              "Blood Report Review",
                              "Follow-up",
                            ],
                          ].map((item, index) => (
                            <tr
                              key={index}
                              className="border-b last:border-b-0 border-slate-100"
                            >
                              <td className="px-4 py-3 font-medium">
                                {item[0]}
                              </td>
                              <td className="px-4 py-3">{item[1]}</td>
                              <td className="px-4 py-3">{item[2]}</td>
                              <td className="px-4 py-3">{item[3]}</td>
                              <td className="px-4 py-3">{item[4]}</td>
                              <td className="px-4 py-3">{item[5]}</td>
                              <td className="px-4 py-3">
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                                  {item[6]}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-center">
                                <button className="text-purple-600 font-semibold">
                                  View
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === "Insurance Details" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InfoBox
                        label="Insurance Provider"
                        value="Star Health Insurance"
                      />
                      <InfoBox label="Policy Number" value="POL-2026-10234" />
                      <InfoBox label="Coverage Amount" value="₹5,00,000" />
                      <InfoBox label="Valid Till" value="31 Dec 2026" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {openEditModal && (
          <CommonModal
            title="Edit Patient Profile"
            onClose={() => setOpenEditModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Patient Name" defaultValue="Ravi Kumar" />
              <Input label="Mobile Number" defaultValue="9876543210" />
              <Input label="Age" defaultValue="45" />
              <Select label="Gender" options={["Male", "Female", "Other"]} />
              <Input label="Date of Birth" type="date" />
              <Input label="Blood Group" defaultValue="B+" />
              <div className="md:col-span-2">
                <TextArea
                  label="Address"
                  defaultValue="123, Green Street, Mumbai"
                />
              </div>
            </div>
          </CommonModal>
        )}

        {openVisitModal && (
          <CommonModal
            title={isIP ? "Add IP Activity" : "Add Visit"}
            onClose={() => setOpenVisitModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isIP ? (
                <>
                  <Input label="Activity Date" type="date" />
                  <Input label="Activity Time" type="time" />
                  <Select
                    label="Activity Type"
                    options={[
                      "Doctor Round",
                      "Medication Given",
                      "Vitals Recorded",
                      "Nursing Note",
                    ]}
                  />
                  <Input label="Performed By" placeholder="Nurse / Doctor" />
                  <Select
                    label="Status"
                    options={["Completed", "Pending", "Hold"]}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Activity Notes"
                      placeholder="Enter IP activity notes"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Input label="Visit Date" type="date" />
                  <Select
                    label="Visit Type"
                    options={["OPD", "Emergency", "Follow-up"]}
                  />
                  <Select
                    label="Department"
                    options={["Cardiology", "General Medicine", "Diagnostics"]}
                  />
                  <Select
                    label="Doctor"
                    options={["Dr. Sharma", "Dr. Kumar", "Dr. Patel"]}
                  />
                  <Input
                    label="Diagnosis / Reason"
                    placeholder="Enter diagnosis"
                  />
                  <Select
                    label="Status"
                    options={["Completed", "Reviewed", "Follow-up"]}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Visit Notes"
                      placeholder="Enter visit notes"
                    />
                  </div>
                </>
              )}
            </div>
          </CommonModal>
        )}

        {openUploadModal && (
          <CommonModal
            title="Upload Report"
            onClose={() => setOpenUploadModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Report Title" placeholder="Enter report title" />
              <Select
                label="Report Type"
                options={[
                  "Lab Report",
                  "Prescription",
                  "Radiology",
                  "Discharge Summary",
                  "Insurance",
                ]}
              />
              <Input label="Date" type="date" />
              <Input label="Upload File" type="file" />
              <div className="md:col-span-2">
                <TextArea label="Remarks" placeholder="Enter remarks" />
              </div>
            </div>
          </CommonModal>
        )}

        {openVitalsModal && (
          <CommonModal
            title="Add Vitals"
            onClose={() => setOpenVitalsModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Blood Pressure" placeholder="120/80" />
              <Input label="Heart Rate" placeholder="72 bpm" />
              <Input label="Temperature" placeholder="98.6°F" />
              <Input label="Weight" placeholder="70.5 kg" />
              <Input label="Height" placeholder="170 cm" />
              <Input label="Recorded Date" type="date" />
            </div>
          </CommonModal>
        )}

        {openTransferModal && (
          <CommonModal
            title="Patient Transfer"
            onClose={() => setOpenTransferModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Current Ward"
                value={patient?.ward || "Ward A"}
                readOnly
              />

              <Input
                label="Current Bed"
                value={patient?.bed || "B-12"}
                readOnly
              />

              <Select
                label="Transfer Ward *"
                options={[
                  "General Ward",
                  "ICU",
                  "Emergency",
                  "Private Room",
                  "Semi-Private Ward",
                  "Pediatric Ward",
                  "Maternity Ward",
                  "Surgical Ward",
                ]}
              />

              <Select
                label="Transfer Bed *"
                options={["A-01", "A-02", "B-08", "ICU-03"]}
              />

              <Select
                label="Transfer Reason *"
                options={[
                  "Condition Critical",
                  "Doctor Request",
                  "Ward Change",
                  "Bed Availability",
                ]}
              />

              <Input label="Transfer Date" type="date" />

              <Select
                label="Approval Status *"
                options={["Pending Approval", "Approved", "Rejected"]}
              />

              <Select
                label="Approved By *"
                options={[
                  "Duty Doctor",
                  "Chief Doctor",
                  "Ward Incharge",
                  "Admin",
                ]}
              />

              <div className="md:col-span-2">
                <TextArea
                  label="Transfer Notes"
                  placeholder="Enter transfer notes"
                />
              </div>
            </div>
          </CommonModal>
        )}
        {openDischargeModal && (
          <CommonModal
            title="Patient Discharge"
            onClose={() => setOpenDischargeModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Admission Date" value="10 Mar 2026" readOnly />

              <Input label="Discharge Date" type="date" />

              <Select
                label="Discharge Type *"
                options={[
                  "Regular",
                  "Against Medical Advice",
                  "Referral",
                  "Expired",
                ]}
              />

              <Select
                label="Condition at Discharge *"
                options={["Stable", "Improved", "Critical"]}
              />

              <Input label="Final Diagnosis" placeholder="Enter diagnosis" />

              <Input label="Follow-up Date" type="date" />

              <div className="md:col-span-2">
                <TextArea
                  label="Discharge Summary"
                  placeholder="Enter discharge notes"
                />
              </div>
            </div>
          </CommonModal>
        )}

        {openFilterModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-1 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-800">
                  Filter Records
                </h2>

                <button
                  onClick={() => setOpenFilterModal(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-4">
                <Input label="From Date" type="date" />

                <Input label="To Date" type="date" />
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200">
                <button
                  onClick={() => setOpenFilterModal(false)}
                  className="px-5 py-1 rounded-md border text-sm font-sans border-slate-300 text-slate-600 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>

                <button className="px-5 py-1 rounded-md text-sm font-sans bg-[#0CB8A1] text-white font-semibold hover:bg-[#089981] transition">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        )}
        {openModal && (
          <CommonModal
            title="Add Medication"
            onClose={() => setOpenModal(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Input label="Date" type="date" />

              <Input label="Time" type="time" />

              <Input label="Medicine" placeholder="Enter medicine" />

              <Input label="Dosage" placeholder="1 Tablet" />

              <Select
                label="Frequency"
                options={["Once Daily", "Twice Daily", "Morning", "Night"]}
              />

              <Select label="Route" options={["Oral", "IV", "Injection"]} />

              <Input label="Prescribed By" placeholder="Doctor name" />

              <Input label="Administered By" placeholder="Nurse name" />
              <Select
                label="Status"
                options={["Active", "Completed", "Pending"]}
              />
            </div>
          </CommonModal>
        )}
      </div>
    </Layout>
  );
}

const InfoRow = ({ icon, label, value }) => (
  <div className="flex gap-3">
    <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-sans text-slate-500 font-semibold">{label}</p>
      <p className="text-xs font-sans text-slate-800 font-bold mt-1">{value}</p>
    </div>
  </div>
);

const InfoBox = ({ label, value }) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
    <p className="text-xs text-slate-500 font-semibold">{label}</p>
    <h3 className="text-sm font-sans font-bold text-slate-800 mt-2">{value}</h3>
  </div>
);

const VitalCard = ({ icon, title, value, unit, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-600",
    orange: "bg-orange-50 text-orange-600",
    teal: "bg-teal-50 text-teal-600",

    cyan: "bg-cyan-50 text-cyan-600",
    sky: "bg-sky-50 text-sky-600",
    pink: "bg-pink-50 text-pink-600",
    violet: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    indigo: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className={`text-xl ${colors[color]}`}>{icon}</span>
        <p className="text-sm text-slate-600 font-bold">{title}</p>
      </div>
      <h3 className="text-xl font-bold text-slate-600 mt-3">{value}</h3>
      <p className="text-sm text-slate-500 font-semibold text-center">{unit}</p>
    </div>
  );
};

const CommonModal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
    <div className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="shrink-0 flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <button onClick={onClose} className="text-white text-xl font-bold">
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">{children}</div>

      <div className="shrink-0 flex justify-end gap-3 px-5 py-4 border-t bg-slate-50">
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm font-semibold"
        >
          Cancel
        </button>

        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-[#0CB8A1] text-white text-sm font-bold"
        >
          Save
        </button>
      </div>
    </div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600 mb-1 block">
      {label}
    </label>
    <input
      {...props}
      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
    />
  </div>
);

const Select = ({ label, options = [] }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600 mb-1 block">
      {label}
    </label>
    <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white focus:border-purple-400">
      <option>Select</option>
      {options.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div>
    <label className="text-xs font-semibold text-slate-600 mb-1 block">
      {label}
    </label>
    <textarea
      rows="3"
      {...props}
      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
    />
  </div>
);

export default PatientDetails;
