import React, { useState } from "react";
import {
  FaHeartbeat,
  FaUserNurse,
  FaClipboardList,
  FaCapsules,
  FaExchangeAlt,
  FaTasks,
  FaPhoneAlt,
  FaEnvelope,
  FaChartLine,
  FaFileMedical,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";
import Vitals from "./Vitals";
import NursingNotes from "./NursingNotes";
import NurseMedication from "./NurseMedication";
import PendingTasks from "./PendingTasks";
import IOChart from "./IOChart";
import CaseSheetForm from "./CaseSheetForm";
import Summary from "./Summary";
import DischargeSummary from "../InPatients/DischargeSummary";
import CarePlan from "./CarePlan";

function PatientCareProfile() {
  const [activeTab, setActiveTab] = useState("Vitals");

  const patient = {
    name: "Ravi Kumar",
    age: 45,
    gender: "Male",
    uhid: "UHID-2026-10234",
    phone: "9876543210",
    email: "ravikumar@gmail.com",
    ipNumber: "IP-2026-01568",
    ward: "ICU - Bed B12",
    admissionDate: "15 Jan 2026",
    doctor: "Dr. Sharma",
    diagnosis: "Cardiac Observation",
    status: "Stable",
  };

  const tabs = [
    {
      name: "Vitals",
      icon: <FaHeartbeat />,
    },

    {
      name: "Nursing Notes",
      icon: <FaUserNurse />,
    },

    {
      name: "Care Plan",
      icon: <FaClipboardList />,
    },

    {
      name: "Medications",
      icon: <FaCapsules />,
    },

    {
      name: "Shift Handover",
      icon: <FaExchangeAlt />,
    },

    {
      name: "Pending Tasks",
      icon: <FaTasks />,
    },
    {
      name: "I/O Chart",
      icon: <FaChartLine />,
    },
    {
      name: "Case Sheet",
      icon: <FaFileMedical />,
    },
    {
      name: "Summary",
      icon: <FaFileMedical />,
    },
  ];

  return (
    <Layout>
      <div className="p-5 space-y-5">
        {/* PATIENT PROFILE */}
        <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
          <div className="grid grid-cols-12">
            {/* LEFT */}
            <div className="col-span-5 border-r border-[#edf1f7] px-6 py-4 flex items-center gap-4">
              <img
                src={`https://ui-avatars.com/api/?name=${patient.name}&background=EEF2FF&color=3730A3`}
                alt=""
                className="w-[70px] h-[70px] rounded-full object-cover border-[5px] border-[#dff7e8]"
              />

              <div className="flex-1">
                <h1 className="text-lg font-bold text-[#111827]">
                  {patient.name}
                </h1>

                <div className="flex items-center gap-5 text-xs font-bold text-[#4b5563] mt-2">
                  <span>
                    {patient.age} Years / {patient.gender}
                  </span>

                  <span>UHID: {patient.uhid}</span>
                </div>

                <div className="flex items-center gap-8 mt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                    <FaPhoneAlt className="text-[#5b5bd6] text-[13px]" />

                    <span>{patient.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#374151]">
                    <FaEnvelope className="text-[#5b5bd6] text-[13px]" />

                    <span>{patient.email}</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-5 items-center">
                  <h2 className="text-sm font-sans font-bold text-[#10b981]">
                    Star Health Insurance
                  </h2>
                  <h3 className="text-sm font-sans font-semibold ">
                    ₹5,00,000
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-7 grid grid-cols-3">
              <div className="px-6 py-5 border-r border-[#edf1f7]">
                <p className="text-[13px] text-[#6b7280]">IP Number</p>

                <h2 className="text-sm font-bold text-[#10b981] mt-2">
                  {patient.ipNumber}
                </h2>

                <p className="text-[13px] text-[#6b7280] mt-6">Ward</p>

                <h3 className="text-sm font-semibold mt-1">{patient.ward}</h3>
              </div>

              <div className="px-6 py-5 border-r border-[#edf1f7]">
                <p className="text-xs font-semibold text-[#6b7280]">
                  Admission Date
                </p>

                <h3 className="text-sm font-semibold mt-2">
                  {patient.admissionDate}
                </h3>

                <p className="text-xs font-semibold text-[#6b7280] mt-6">
                  Consultant
                </p>

                <h3 className="text-sm font-semibold mt-1">{patient.doctor}</h3>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs font-semibold text-[#6b7280]">
                  Diagnosis
                </p>

                <h3 className="text-sm font-semibold mt-2 leading-7">
                  {patient.diagnosis}
                </h3>

                <p className="text-xs font-semibold text-[#6b7280] mt-4">
                  Status
                </p>

                <span className="inline-flex bg-[#dcfce7] text-[#16a34a] text-sm font-medium px-3 py-1 rounded-lg mt-2">
                  {patient.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white border border-[#e9edf5] rounded-[20px] h-[60px] px-5 flex items-center gap-8 overflow-x-auto scrollHide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 h-full whitespace-nowrap text-[13px] transition-all ${
                activeTab === tab.name
                  ? "border-b-[2px] border-[#5b5bd6] font-bold text-[#5b5bd6]"
                  : "text-[#374151] font-semibold hover:text-[#5b5bd6]"
              }`}
            >
              <span className="text-sm">{tab.icon}</span>

              {tab.name}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="bg-white border border-[#e9edf5] rounded-[22px] p-5">
          {/* VITALS */}
          {activeTab === "Vitals" && (
            <div>
              <Vitals />
            </div>
          )}

          {/* NURSING NOTES */}
          {activeTab === "Nursing Notes" && (
            <div>
              <NursingNotes />
            </div>
          )}

          {/* CARE PLAN */}
          {activeTab === "Care Plan" && (
            // <div className="grid grid-cols-2 gap-4">
            //   {[
            //     "Monitor vitals every 4 hours",
            //     "Maintain IV fluid chart",
            //     "Daily ECG monitoring",
            //     "Strict diabetic diet",
            //     "Bed rest with assisted mobility",
            //     "Oxygen support if needed",
            //   ].map((item, index) => (
            //     <div
            //       key={index}
            //       className="bg-[#fafbff] border border-[#edf1f7] rounded-[16px] p-4 flex items-center gap-3"
            //     >
            //       <div className="w-8 h-8 rounded-lg bg-[#eef2ff] flex items-center justify-center">
            //         <FaClipboardList className="text-[#5b5bd6] text-[12px]" />
            //       </div>

            //       <p className="text-[12px] font-semibold text-[#374151]">
            //         {item}
            //       </p>
            //     </div>
            //   ))}
            // </div>
            <div>
              <CarePlan/>
            </div>
          )}

          {/* MEDICATIONS */}
          {activeTab === "Medications" && (
            <div>
              <NurseMedication />
            </div>
          )}

          {/* SHIFT HANDOVER */}
          {activeTab === "Shift Handover" && (
            <div className="space-y-4">
              {[
                {
                  from: "Nurse Priya",
                  to: "Nurse Kavya",
                  shift: "Morning → Afternoon",
                  condition: "Stable",
                  pending: "Evening IV Antibiotics at 07:00 PM",
                  instructions:
                    "Monitor BP every 2 hours and maintain fluid balance chart.",
                  handoverTime: "02:00 PM",
                },

                {
                  from: "Nurse Kavya",
                  to: "Night Shift Nurse",
                  shift: "Afternoon → Night",
                  condition: "Under Observation",
                  pending: "ECG scheduled at 08:00 PM",
                  instructions:
                    "Patient complained mild chest discomfort after dinner.",
                  handoverTime: "08:15 PM",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fafbff] border border-[#edf1f7] rounded-[20px] p-5"
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
                        <FaExchangeAlt className="text-[#5b5bd6]" />
                      </div>

                      <div>
                        <h3 className="text-[13px] font-bold text-[#111827]">
                          {item.from} → {item.to}
                        </h3>

                        <p className="text-[11px] text-[#6b7280] mt-1">
                          {item.shift}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-semibold px-3 py-1 rounded-lg ${
                        item.condition === "Stable"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {item.condition}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5 space-y-4">
                    {/* PENDING */}
                    <div>
                      <p className="text-[11px] font-bold text-[#374151]">
                        Pending Tasks
                      </p>

                      <p className="text-[12px] text-[#374151] mt-2 leading-6">
                        {item.pending}
                      </p>
                    </div>

                    {/* INSTRUCTIONS */}
                    <div>
                      <p className="text-[11px] font-bold text-[#374151]">
                        Special Instructions
                      </p>

                      <p className="text-[12px] text-[#374151] mt-2 leading-6">
                        {item.instructions}
                      </p>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-5 pt-4 border-t border-[#edf1f7] flex items-center justify-between">
                    <p className="text-[11px] text-[#6b7280]">
                      Handover Time :
                      <span className="font-semibold text-[#111827] ml-1">
                        {item.handoverTime}
                      </span>
                    </p>

                    <button className="h-[32px] px-3 rounded-lg bg-[#eef2ff] text-[#5b5bd6] text-[11px] font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PENDING TASKS */}
          {activeTab === "Pending Tasks" && (
            // <div className="space-y-4">
            //   {[
            //     "ECG Scheduled at 06:00 PM",
            //     "Evening Medication Pending",
            //     "Blood Sugar Check at 08:00 PM",
            //     "Doctor Review Pending",
            //   ].map((item, index) => (
            //     <div
            //       key={index}
            //       className="flex items-center justify-between border border-[#edf1f7] rounded-[18px] px-5 py-4"
            //     >
            //       <div className="flex items-center gap-3">
            //         <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center">
            //           <FaTasks className="text-orange-600 text-[13px]" />
            //         </div>

            //         <p className="text-[12px] font-semibold text-[#374151]">
            //           {item}
            //         </p>
            //       </div>

            //       <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-lg">
            //         Pending
            //       </span>
            //     </div>
            //   ))}
            // </div>
            <div>
              <PendingTasks />
            </div>
          )}

          {activeTab === "I/O Chart" && (
            <div>
              <IOChart />
            </div>
          )}

          {activeTab === "Case Sheet" && (
            <div>
              <CaseSheetForm />
            </div>
          )}

              {activeTab === "Summary" && (
            <div>
                {/* <DischargeSummary /> */}
              <Summary />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default PatientCareProfile;
