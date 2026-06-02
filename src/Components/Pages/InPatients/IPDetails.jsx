import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClipboardList,
  FaFileMedical,
  FaHeartbeat,
  FaPills,
  FaFlask,
  FaXRay,
  FaProcedures,
  FaUserNurse,
  FaFileInvoiceDollar,
  FaFileAlt,
  FaHospital,
  FaMoneyCheckAlt,
  FaBed,
  FaNotesMedical,
  FaPrescriptionBottleAlt,
  FaStream,
  FaUserMd,
  FaTimes,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";
import Overview from "./Overview";
import Medication from "./Medication";
import Labs from "./Labs";
import Operation from "./Operation";
import ConsultantRegister from "./ConsultantRegister";
import NursingNotes from "./NurseNotes";
import TimeLine from "./TimeLine";
import Prescription from "./Prescription";
import Charges from "./Charges";
import TreatmentHistory from "./TreatmentHistory";
import DischargeSummary from "./DischargeSummary";
import ClinicalNotes from "./ClinicalNotes";
import Billingsummary from "./Billingsummary";

function IPDetails() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const tabs = [
    { name: "Overview", icon: <FaClipboardList /> },

    { name: "Medication", icon: <FaPills /> },

    { name: "Labs", icon: <FaFlask /> },

    { name: "Operation", icon: <FaProcedures /> },

    { name: "Doctor / Nurse Notes", icon: <FaUserMd /> },

    // { name: "Nursing Notes", icon: <FaUserNurse /> },

    { name: "Timeline", icon: <FaStream /> },

    { name: "Prescription", icon: <FaPrescriptionBottleAlt /> },

    { name: "Charges", icon: <FaFileInvoiceDollar /> },

    { name: "Treatment History", icon: <FaNotesMedical /> },

    { name: "Discharge Summary", icon: <FaBed /> },

    { name: "Billing", icon: <FaMoneyCheckAlt /> },
  ];

  return (
    <Layout>
      <div className="min-h-screen p-[12px] font-sans">
        {/* ================= HEADER ================= */}
        <div className="bg-white border border-[#e9edf5] rounded-lg overflow-hidden">
          <div className="grid grid-cols-12">
            {/* LEFT */}
            <div className="col-span-5 border-r border-[#edf1f7] px-6 py-3 flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="w-[75px] h-[75px] rounded-full object-cover border-[5px] border-[#dff7e8]"
              />

              <div className="flex-1">
                <h1 className="text-lg font-sans leading-[42px] font-bold text-[#111827]">
                  Ravi Kumar
                </h1>

                <div className="flex items-center gap-5 text-xs font-bold font-sans text-[#4b5563]">
                  <span>45 Years / Male</span>
                  <span>UHID: UHID-2026-10234</span>
                  <span>Blood Group: B+</span>
                </div>

                <div className="flex items-center gap-8 mt-5">
                  <div className="flex items-center gap-2 text-sm font-sans font-semibold text-[#374151]">
                    <FaPhoneAlt className="text-[#5b5bd6] text-[13px]" />
                    <span>9876543210</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-sans font-semibold text-[#374151]">
                    <FaEnvelope className="text-[#5b5bd6] text-[13px]" />
                    <span>ravikumar@gmail.com</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-5 items-center">
                  <h2 className="text-sm font-sans font-bold text-[#10b981]">
                    Star Health Insurance
                  </h2>
                  <h3 className="text-sm font-sans font-semibold ">
                    ₹5,00,000
                  </h3>
                  <button
                    className="bg-[#5b5bd6] text-white px-2 py-1 rounded-lg text-xs font-sans font-semibold hover:bg-[#4a48b0]"
                    onClick={() => setOpenClaimModal(true)}
                  >
                    Fill Claim Form
                  </button>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-7 grid grid-cols-3">
              <div className="px-6 py-5 border-r border-[#edf1f7]">
                <p className="text-[13px] text-[#6b7280]">IP Number</p>

                <h2 className="text-sm font-sans font-bold text-[#10b981] mt-2">
                  IP-2026-01568
                </h2>

                <p className="text-[13px] text-[#6b7280] mt-6">Department</p>

                <h3 className="text-sm font-sans font-semibold mt-1">
                  Cardiology
                </h3>
              </div>

              <div className="px-6 py-5 border-r border-[#edf1f7]">
                <p className="text-xs font-sans font-semibold text-[#6b7280]">
                  Admission Date & Time
                </p>

                <h3 className="text-sm font-sans font-semibold mt-2">
                  15 Jan 2026, 10:30 AM
                </h3>

                <p className="text-xs font-sans font-semibold text-[#6b7280] mt-6">
                  Treatment Doctor
                </p>

                <h3 className="text-sm font-sans font-semibold mt-1">
                  Dr. Sharma
                </h3>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs font-sans font-semibold text-[#6b7280]">
                  Ward / Room / Bed
                </p>

                <h3 className="text-sm font-sans font-semibold mt-2 leading-7">
                  Ward A / Room 12 / Bed B-12
                </h3>

                <p className="text-xs font-sans font-semibold text-[#6b7280] mt-4">
                  Patient Status
                </p>

                <span className="inline-flex bg-[#dcfce7] text-[#16a34a] text-sm font-medium px-3 py-1 rounded-lg mt-2">
                  Stable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="grid grid-cols-12 gap-3 mt-3">
          {/* LEFT */}
          <div className="col-span-9 space-y-3">
            {/* TABS */}
            <div className="bg-white border border-[#e9edf5] rounded-[22px] h-[58px] px-5 flex items-center gap-8 overflow-x-auto scrollHide">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 h-full whitespace-nowrap text-[13px] transition-all duration-200 ${
                    activeTab === tab.name
                      ? "border-b-[2px] border-[#5b5bd6] font-bold text-[#5b5bd6]"
                      : "text-blue-950 font-semibold hover:text-[#5b5bd6]"
                  }`}
                >
                  <span className="text-sm">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>

            <div className="mt-4 ">
              {activeTab === "Overview" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Overview />
                </div>
              )}

              {activeTab === "Medication" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Medication />
                </div>
              )}

              {activeTab === "Labs" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Labs />
                </div>
              )}

              {activeTab === "Operation" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Operation />
                </div>
              )}

              {activeTab === "Doctor / Nurse Notes" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5 h-[1000px] overflow-y-auto scrollHide">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  {/* <ConsultantRegister/> */}
                  <ClinicalNotes />
                </div>
              )}

              {activeTab === "Nursing Notes" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <NursingNotes />
                </div>
              )}

              {activeTab === "Timeline" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5 h-[1000px] overflow-y-auto scrollHide">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <TimeLine />
                </div>
              )}

              {activeTab === "Prescription" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Prescription />
                </div>
              )}

              {activeTab === "Charges" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <Charges />
                </div>
              )}

              {activeTab === "Treatment History" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <TreatmentHistory />
                </div>
              )}

              {activeTab === "Discharge Summary" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5 h-[1000px] overflow-y-auto scrollHide">
                  <div className="flex justify-end gap-3 mb-2">
                    <input
                      type="date"
                      className="h-8 rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]"
                    />
                    <select className="h-8 min-w-[140px] cursor-pointer rounded-md border border-[#e5e7eb] bg-white px-4 text-[13px] font-semibold text-[#111827] outline-none focus:border-[#5b5bd6]">
                      <option>IP1</option>
                      <option>IP2</option>
                      <option>IP3</option>
                      <option>IP4</option>
                    </select>
                  </div>
                  <hr className="mb-2" />
                  <DischargeSummary />
                </div>
              )}

              {activeTab === "Billing" && (
                <div className="bg-white rounded-[22px] border border-[#e9edf5] p-5">
                  <Billingsummary />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 space-y-3">
            {/* ALERTS */}
            <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#edf1f7]">
                <h2 className="text-[14px] font-bold">ALERTS & RISK</h2>
              </div>

              <div className="p-4 space-y-3">
                {[
                  [
                    "Drug Allergy",
                    "Penicillin",
                    "bg-[#fff1f2]",
                    "text-[#ef4444]",
                  ],
                  ["Fall Risk", "Medium", "bg-[#fff7ed]", "text-[#f97316]"],
                  ["DNR Status", "Not Set", "bg-[#eff6ff]", "text-[#3b82f6]"],
                  ["Critical Alerts", "None", "bg-[#f0fdf4]", "text-[#22c55e]"],
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`${item[2]} ${item[3]} rounded-xl px-4 py-3 flex justify-between text-[13px]`}
                  >
                    <p>{item[0]}</p>
                    <p>{item[1]}</p>
                  </div>
                ))}

                <button className="w-full border border-[#e5e7eb] rounded-xl py-3 text-[#5b5bd6] text-[13px] font-medium">
                  View All Alerts
                </button>
              </div>
            </div>

            {/* TASKS */}
            <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#edf1f7]">
                <h2 className="text-[14px] font-bold">PENDING TASKS</h2>
              </div>

              <div className="p-4 space-y-3">
                {[
                  ["Lab Reports", "2 Pending"],
                  ["Doctor Review", "Today, 5 PM"],
                  ["Medication Review", "Tonight"],
                  ["Physiotherapy", "Tomorrow"],
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border border-[#edf1f7] rounded-xl px-3 py-3 flex justify-between text-[13px]"
                  >
                    <p>{item[0]}</p>

                    <p className="text-[#6b7280]">{item[1]}</p>
                  </div>
                ))}

                <button className="w-full border border-[#e5e7eb] rounded-xl py-3 text-[#5b5bd6] text-[13px] font-medium">
                  View All Tasks
                </button>
              </div>
            </div>

            {/* BILLING */}
            {/* <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#edf1f7]">
                <h2 className="text-[14px] font-bold">BILLING SUMMARY</h2>
              </div>

              <div className="p-4 space-y-5 text-[13px]">
                {[
                  ["Insurance", "Star Health"],
                  ["Approval Status", "Approved"],
                  ["Package", "Cardiac Care Package"],
                  ["Advance Paid", "₹ 25,000"],
                  ["Current Bill", "₹ 48,750"],
                  ["Pending Amount", "₹ 23,750"],
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <p className="text-[#6b7280]">{item[0]}</p>

                    <p
                      className={`font-medium ${
                        item[0] === "Pending Amount"
                          ? "text-[#ef4444]"
                          : item[0] === "Approval Status"
                            ? "text-[#22c55e]"
                            : ""
                      }`}
                    >
                      {item[1]}
                    </p>
                  </div>
                ))}

                <button className="w-full border border-[#e5e7eb] rounded-xl py-3 text-[#5b5bd6] text-[13px] font-medium">
                  View Billing Details
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* ================= TAB CONTENT ================= */}

        {/* CLAIM FORM MODAL */}
        {openClaimModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
            <div className="bg-white rounded-[24px] w-full max-w-[900px] max-h-[90vh] overflow-hidden flex flex-col">
              {/* HEADER */}
              <div className="px-6 py-2 border-b border-[#edf1f7] flex items-center justify-between shrink-0">
                <div>
                  <h2 className="text-lg font-sans font-bold text-[#111827]">
                    Insurance Claim Form
                  </h2>

                  <p className="text-xs font-sans text-[#6b7280] mt-1">
                    Fill insurance details for cashless / reimbursement claim
                  </p>
                </div>

                <button
                  onClick={() => setOpenClaimModal(false)}
                  className="w-10 h-10 rounded-xl bg-[#f4f6fb] flex items-center justify-center text-[#6b7280]"
                >
                  <FaTimes />
                </button>
              </div>

              {/* BODY */}
              <div className="flex-1 overflow-y-auto scrollHide">
                <div className="p-6 grid grid-cols-2 gap-5">
                  {/* PATIENT NAME */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Patient Name
                    </label>

                    <input
                      type="text"
                      defaultValue="Ravi Kumar"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* UHID */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      UHID Number
                    </label>

                    <input
                      type="text"
                      defaultValue="UHID-2026-10234"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* INSURANCE COMPANY */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Insurance Company
                    </label>

                    <input
                      type="text"
                      defaultValue="Star Health Insurance"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* POLICY NUMBER */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Policy Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter policy number..."
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* CLAIM TYPE */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Claim Type
                    </label>

                    <select className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                      <option>Cashless</option>
                      <option>Reimbursement</option>
                    </select>
                  </div>

                  {/* CLAIM AMOUNT */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Claim Amount
                    </label>

                    <input
                      type="text"
                      defaultValue="₹ 5,00,000"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* ADMISSION DATE */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Admission Date
                    </label>

                    <input
                      type="date"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* DISCHARGE DATE */}
                  <div>
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Expected Discharge Date
                    </label>

                    <input
                      type="date"
                      className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* DIAGNOSIS */}
                  <div className="col-span-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Diagnosis / Treatment Details
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Enter diagnosis and treatment details..."
                      className="w-full rounded-2xl border border-[#e5e7eb] mt-2 p-4 text-[13px] resize-none outline-none focus:border-[#5b5bd6]"
                    />
                  </div>

                  {/* DOCUMENT UPLOAD */}
                  <div className="col-span-2">
                    <label className="text-[13px] font-semibold text-[#374151]">
                      Upload Documents
                    </label>

                    <div className="mt-2 border border-dashed border-[#cbd5e1] rounded-2xl p-6 bg-[#f8fafc]">
                      <input type="file" className="text-[13px]" />

                      <p className="text-[11px] text-[#6b7280] mt-3">
                        Upload insurance card, reports, ID proof, bills and
                        discharge summary
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-6 py-5 border-t border-[#edf1f7] flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setOpenClaimModal(false)}
                  className="h-8 px-5 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
                >
                  Cancel
                </button>

                <button className="h-8 px-6 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold hover:bg-[#4a48b0]">
                  Submit Claim
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default IPDetails;
