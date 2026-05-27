import React from "react";
import {
  FaCalendarAlt,
  FaUserMd,
  FaFileMedical,
  FaNotesMedical,
  FaPills,
  FaDownload,
  FaPrint,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

function DischargeSummary() {
  const diagnosis = [
    "Acute Coronary Syndrome",
    "Hypertension",
    "Type 2 Diabetes Mellitus",
  ];

  const complaints = [
    "Chest Pain",
    "Shortness of Breath",
    "General Weakness",
  ];

  const treatments = [
    "IV Fluids",
    "ECG Monitoring",
    "Cardiac Observation",
    "Insulin Management",
    "Antibiotic Therapy",
  ];

  const procedures = [
    "ECG",
    "2D Echo",
    "Blood Investigations",
    "Cardiac Monitoring",
  ];

  const labData = [
    {
      test: "Troponin",
      result: "Positive",
      status: "Abnormal",
    },

    {
      test: "HbA1c",
      result: "7.8",
      status: "High",
    },

    {
      test: "Blood Pressure",
      result: "120/80",
      status: "Stable",
    },
  ];

  const medications = [
    {
      name: "Paracetamol 650mg",
      morning: "1",
      afternoon: "0",
      night: "1",
      duration: "5 Days",
    },

    {
      name: "Aspirin 75mg",
      morning: "1",
      afternoon: "0",
      night: "0",
      duration: "30 Days",
    },

    {
      name: "Telmisartan",
      morning: "1",
      afternoon: "0",
      night: "1",
      duration: "15 Days",
    },
  ];

  return (
    <div className="space-y-5">
      {/* ADMISSION DETAILS */}
      <div className="grid grid-cols-6 gap-4">
        {[
          {
            label: "Admission Date",
            value: "15 Jan 2026",
          },

          {
            label: "Discharge Date",
            value: "22 Jan 2026",
          },

          {
            label: "Length of Stay",
            value: "7 Days",
          },

          {
            label: "Department",
            value: "Cardiology",
          },

          {
            label: "Consultant",
            value: "Dr. Sharma",
          },

          {
            label: "Status",
            value: "Stable",
            green: true,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#e9edf5] rounded-lg p-2"
          >
            <p className="text-[11px] font-medium text-[#6b7280]">
              {item.label}
            </p>

            <h3
              className={`text-[14px] font-bold mt-3 ${
                item.green
                  ? "text-[#16a34a]"
                  : "text-[#111827]"
              }`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* FINAL DIAGNOSIS */}
      <div className="bg-white border border-[#e9edf5] rounded-lg  p-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
            <FaFileMedical className="text-[#5b5bd6]" />
          </div>

          <h2 className="text-lg font-sans font-bold text-[#111827]">
            Final Diagnosis
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mt-5">
          {diagnosis.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] border border-[#edf1f7] px-2 py-1 rounded-md text-[13px] font-semibold text-[#374151]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CHIEF COMPLAINTS */}
      <div className="bg-white border border-[#e9edf5] rounded-lg p-3">
        <h2 className="text-lg font-sans font-bold text-[#111827]">
          Chief Complaints
        </h2>

        <div className="flex flex-wrap gap-3 mt-5">
          {complaints.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff7ed] text-[#ea580c] px-2 py-1 rounded-xl text-[13px] font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* TREATMENT + PROCEDURES */}
      <div className="grid grid-cols-2 gap-5">
        {/* TREATMENT */}
        <div className="bg-white border border-[#e9edf5] rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center">
              <FaNotesMedical className="text-[#16a34a]" />
            </div>

            <h2 className="text-lg font-sans font-bold text-[#111827]">
              Treatment Given
            </h2>
          </div>

          <div className="space-y-3 mt-5">
            {treatments.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f7] rounded-xl px-4 py-3"
              >
                <FaCheckCircle className="text-[#16a34a] text-[12px]" />

                <p className="text-[13px] font-medium text-[#374151]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCEDURES */}
        <div className="bg-white border border-[#e9edf5] rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fee2e2] flex items-center justify-center">
              <FaUserMd className="text-[#dc2626]" />
            </div>

            <h2 className="text-lg font-sans font-bold text-[#111827]">
              Procedures Done
            </h2>
          </div>

          <div className="space-y-3 mt-5">
            {procedures.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#f8fafc] border border-[#edf1f7] rounded-xl px-4 py-3"
              >
                <FaCheckCircle className="text-[#dc2626] text-[12px]" />

                <p className="text-[13px] font-medium text-[#374151]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAB SUMMARY */}
      <div className="bg-white border border-[#e9edf5] rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-[#edf1f7]">
          <h2 className="text-lg font-sans font-bold text-[#111827]">
            Lab Investigation Summary
          </h2>
        </div>

        <div>
          {/* HEADER */}
          <div className="grid grid-cols-3 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Test Name
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Result
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Status
            </h3>
          </div>

          {/* CONTENT */}
          {labData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 px-5 py-4 border-b border-[#edf1f7] last:border-b-0"
            >
              <p className="text-[13px] font-semibold text-[#111827]">
                {item.test}
              </p>

              <p className="text-[13px] text-[#374151]">
                {item.result}
              </p>

              <span className="text-[12px] font-semibold text-[#dc2626]">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DISCHARGE MEDICATIONS */}
      <div className="bg-white border border-[#e9edf5] rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
            <FaPills className="text-[#5b5bd6]" />
          </div>

          <h2 className="text-lg font-sans font-bold text-[#111827]">
            Discharge Medications
          </h2>
        </div>

        {/* TABLE */}
        <div>
          <div className="grid grid-cols-5 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Medicine
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Morning
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Afternoon
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Night
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Duration
            </h3>
          </div>

          {medications.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-5 py-4 border-b border-[#edf1f7] last:border-b-0"
            >
              <p className="text-[13px] font-semibold text-[#111827]">
                {item.name}
              </p>

              <p className="text-[13px]">{item.morning}</p>

              <p className="text-[13px]">{item.afternoon}</p>

              <p className="text-[13px]">{item.night}</p>

              <p className="text-[13px] text-[#374151]">
                {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DOCTOR ADVICE */}
      <div className="grid grid-cols-2 gap-5 mt-5">

      <div className="bg-white border border-[#e9edf5] rounded-lg p-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#fef3c7] flex items-center justify-center">
            <FaUserMd className="text-[#d97706]" />
          </div>

          <h2 className="text-lg font-sans font-bold text-[#111827]">
            Doctor Advice
          </h2>
        </div>
            <div className="mt-5 bg-[#fafbff] border border-[#edf1f7] rounded-2xl p-5">
          <ul className="space-y-4">
            {[
              "Low salt diet advised",
              "Avoid stress and heavy physical activity",
              "Continue medications regularly",
              "Cardiology follow-up after 7 days",
              "Monitor blood pressure daily",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-[#16a34a] mt-[2px] text-[12px]" />

                <p className="text-[13px] text-[#374151] leading-6">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
     
 
        </div>
               <div className="bg-white border border-[#e9edf5] rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
              <FaCalendarAlt className="text-[#5b5bd6]" />
            </div>

            <h2 className="text-lg font-sans font-bold text-[#111827]">
              Follow-up Details
            </h2>
          </div>

          <div className="space-y-5 mt-5">
            <div>
              <p className="text-[11px] text-[#6b7280]">
                Follow-up Date
              </p>

              <h3 className="text-[14px] font-bold mt-2">
                30 Jan 2026
              </h3>
            </div>

            <div>
              <p className="text-[11px] text-[#6b7280]">
                Consultant
              </p>

              <h3 className="text-[14px] font-bold mt-2">
                Dr. Sharma
              </h3>
            </div>

            <div>
              <p className="text-[11px] text-[#6b7280]">
                Department
              </p>

              <h3 className="text-[14px] font-bold mt-2">
                Cardiology
              </h3>
            </div>
          </div>
        </div>
    
      </div>

      {/* FOLLOW UP + BILLING */}
    

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-4">
        <button className="h-8 px-5 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold flex items-center gap-2">
          <FaPrint />
          Print Summary
        </button>

        <button className="h-8 px-5 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold flex items-center gap-2">
          <FaEnvelope />
          Email Summary
        </button>

        <button className="h-8 px-6 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2">
          <FaDownload />
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default DischargeSummary;