import React, { useState } from "react";
import {
  FaUserNurse,
  FaPlus,
  FaTimes,
  FaNotesMedical,
  FaHeartbeat,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function NursingNotes() {
  const [openModal, setOpenModal] = useState(false);

  const nursingNotes = [
    {
      time: "15 Jan 2026 • 08:00 AM",
      nurse: "Nurse Kavya",
      shift: "Morning Shift",
      priority: "Routine",
      note:
        "Vitals checked and morning medications administered successfully.",
      observation:
        "Patient stable. No complaints of chest pain or dizziness.",
      vitals: {
        bp: "120/80",
        pulse: "78 bpm",
        temp: "98.4°F",
        spo2: "98%",
      },
      checklist: [
        "Medication Given",
        "Vitals Checked",
        "IV Line Checked",
      ],
    },

    {
      time: "15 Jan 2026 • 01:30 PM",
      nurse: "Nurse Priya",
      shift: "Afternoon Shift",
      priority: "Urgent",
      note:
        "Patient complained of mild chest discomfort after lunch.",
      observation:
        "Doctor informed immediately. ECG monitoring started.",
      vitals: {
        bp: "130/90",
        pulse: "88 bpm",
        temp: "99.1°F",
        spo2: "96%",
      },
      checklist: [
        "Doctor Informed",
        "ECG Started",
        "Observation Continued",
      ],
    },

    {
      time: "15 Jan 2026 • 08:00 PM",
      nurse: "Nurse Asha",
      shift: "Night Shift",
      priority: "Critical",
      note:
        "Oxygen saturation dropped briefly during monitoring.",
      observation:
        "Oxygen support initiated. Patient under continuous observation.",
      vitals: {
        bp: "140/95",
        pulse: "96 bpm",
        temp: "100.2°F",
        spo2: "91%",
      },
      checklist: [
        "Oxygen Support Started",
        "Doctor Alerted",
        "Vitals Monitored",
      ],
    },
  ];

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-600";

      case "Urgent":
        return "bg-orange-100 text-orange-600";

      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6]">
            <FaUserNurse className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              Nursing Notes
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Nursing observations, vitals & patient monitoring
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpenModal(true)}
          className="h-[42px] px-5 rounded-xl bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#4b4bc7]"
        >
          <FaPlus className="text-[12px]" />
          Add Note
        </button>
      </div>

      {/* TIMELINE */}
      <div className="p-6">
        <div className="relative">
          {/* LINE */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#dbe4ff]" />

          <div className="space-y-8">
            {nursingNotes.map((item, index) => (
              <div key={index} className="relative pl-14">
                {/* ICON */}
                <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-[#5b5bd6] flex items-center justify-center text-white shadow-lg shadow-[#5b5bd6]/20">
                  <FaNotesMedical className="text-[13px]" />
                </div>

                {/* CARD */}
                <div className="bg-[#fafbff] border border-[#e9edf5] rounded-[22px] overflow-hidden">
                  {/* TOP */}
                  <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-[15px] font-bold text-[#111827]">
                          {item.nurse}
                        </h3>

                        <span className="bg-[#eef2ff] text-[#5b5bd6] text-[11px] font-semibold px-3 py-1 rounded-md">
                          {item.shift}
                        </span>

                        <span
                          className={`text-[11px] font-semibold px-3 py-1 rounded-md ${getPriorityStyle(
                            item.priority
                          )}`}
                        >
                          {item.priority}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#6b7280] mt-2">
                        {item.time}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-[#edf1f7] flex items-center justify-center text-[#5b5bd6]">
                      <FaHeartbeat />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    {/* NOTE */}
                    <div>
                      <h4 className="text-[13px] font-bold text-[#111827]">
                        Note
                      </h4>

                      <p className="text-[13px] text-[#4b5563] leading-6 mt-2">
                        {item.note}
                      </p>
                    </div>

                    {/* OBSERVATION */}
                    <div className="mt-5">
                      <h4 className="text-[13px] font-bold text-[#111827]">
                        Observation
                      </h4>

                      <p className="text-[13px] text-[#4b5563] leading-6 mt-2">
                        {item.observation}
                      </p>
                    </div>

                    {/* VITALS */}
                    <div className="grid grid-cols-4 gap-3 mt-6">
                      {[
                        {
                          label: "BP",
                          value: item.vitals.bp,
                        },
                        {
                          label: "Pulse",
                          value: item.vitals.pulse,
                        },
                        {
                          label: "Temp",
                          value: item.vitals.temp,
                        },
                        {
                          label: "SpO2",
                          value: item.vitals.spo2,
                        },
                      ].map((vital, i) => (
                        <div
                          key={i}
                          className="bg-white border border-[#edf1f7] rounded-xl p-3"
                        >
                          <p className="text-[11px] text-[#6b7280]">
                            {vital.label}
                          </p>

                          <p className="text-[13px] font-bold text-[#111827] mt-1">
                            {vital.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CHECKLIST */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.checklist.map((check, i) => (
                        <div
                          key={i}
                          className="bg-green-50 text-green-600 text-[11px] font-semibold px-3 py-2 rounded-xl flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-[10px]" />
                          {check}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
   {openModal && (
  <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5 overflow-y-auto">
    
    {/* MODAL */}
    <div className="bg-white rounded-[24px] w-full max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col">
      
      {/* HEADER */}
      <div className="px-6 py-5 border-b border-[#edf1f7] flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-[20px] font-bold text-[#111827]">
            Add Nursing Note
          </h2>

          <p className="text-[12px] text-[#6b7280] mt-1">
            Enter patient observation and nursing updates
          </p>
        </div>

        <button
          onClick={() => setOpenModal(false)}
          className="w-10 h-10 rounded-xl bg-[#f4f6fb] flex items-center justify-center text-[#6b7280]"
        >
          <FaTimes />
        </button>
      </div>

      {/* SCROLLABLE FORM */}
      <div className="flex-1 overflow-y-auto scrollHide">
        <div className="p-6 grid grid-cols-2 gap-5">
          
          {/* NURSE */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Nurse Name
            </label>

            <select className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
              <option>Select Nurse</option>
              <option>Nurse Kavya</option>
              <option>Nurse Priya</option>
              <option>Nurse Asha</option>
            </select>
          </div>

          {/* SHIFT */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Shift
            </label>

            <select className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
              <option>Morning Shift</option>
              <option>Afternoon Shift</option>
              <option>Night Shift</option>
            </select>
          </div>

          {/* PRIORITY */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Priority
            </label>

            <select className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
              <option>Routine</option>
              <option>Urgent</option>
              <option>Critical</option>
            </select>
          </div>

          {/* TIME */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Time
            </label>

            <input
              type="datetime-local"
              className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* NOTE */}
          <div className="col-span-2">
            <label className="text-[13px] font-semibold text-[#374151]">
              Nursing Note
            </label>

            <textarea
              rows={4}
              placeholder="Enter nursing note..."
              className="w-full rounded-2xl border border-[#e5e7eb] mt-2 p-4 text-[13px] outline-none resize-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* OBSERVATION */}
          <div className="col-span-2">
            <label className="text-[13px] font-semibold text-[#374151]">
              Observation
            </label>

            <textarea
              rows={3}
              placeholder="Enter patient observation..."
              className="w-full rounded-2xl border border-[#e5e7eb] mt-2 p-4 text-[13px] outline-none resize-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* BP */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Blood Pressure
            </label>

            <input
              type="text"
              placeholder="120/80"
              className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* PULSE */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Pulse Rate
            </label>

            <input
              type="text"
              placeholder="78 bpm"
              className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* TEMP */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              Temperature
            </label>

            <input
              type="text"
              placeholder="98.4°F"
              className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
            />
          </div>

          {/* SPO2 */}
          <div>
            <label className="text-[13px] font-semibold text-[#374151]">
              SpO2
            </label>

            <input
              type="text"
              placeholder="98%"
              className="w-full h-[46px] rounded-xl border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="px-6 py-5 border-t border-[#edf1f7] flex justify-end gap-3 shrink-0">
        <button
          onClick={() => setOpenModal(false)}
          className="h-[44px] px-5 rounded-xl border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
        >
          Cancel
        </button>

        <button className="h-[44px] px-6 rounded-xl bg-[#5b5bd6] text-white text-[13px] font-semibold hover:bg-[#4b4bc7]">
          Save Note
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default NursingNotes;