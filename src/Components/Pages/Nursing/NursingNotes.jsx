import React, { useState } from "react";
import { FaUserNurse, FaPlus, FaTimes, FaEdit, FaPrint } from "react-icons/fa";

function NursingNotes() {
  const [openModal, setOpenModal] = useState(false);

  const notesData = [
    {
      date: "May 14, 2026 09:30 AM",
      doctor: "Dr. Williams",

      subjective:
        "Patient is feeling better. No complaints of pain. Appetite improved.",

      objective:
        "Vitals stable. BP: 120/80 mmHg, Pulse: 78 bpm, Temp: 98.4°F, SpO2: 98%.",

      assessment: "Patient condition stable. Responding well to treatment.",

      plan: "Continue current medications. Monitor vitals. Encourage ambulation.",
    },

    {
      date: "May 13, 2026 07:45 PM",
      doctor: "Dr. Monica",

      subjective:
        "Patient reported mild chest discomfort during evening rounds.",

      objective:
        "Pulse slightly elevated. ECG advised. Oxygen saturation stable.",

      assessment: "Needs continued cardiac observation overnight.",

      plan: "Repeat ECG at 08:00 AM. Continue oxygen support.",
    },

    {
      date: "May 12, 2026 08:15 PM",
      doctor: "Dr. Sharma",

      subjective: "Patient slept well. No respiratory distress noted.",

      objective: "Respiratory rate normal. No fever observed.",

      assessment: "Stable recovery progression.",

      plan: "Continue monitoring and diabetic diet.",
    },
  ];

  const [selectedNote, setSelectedNote] = useState(notesData[0]);

  return (
    <div className="space-y-5">
      {/* MAIN CARD */}
      <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
        {/* HEADER */}
        <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
              <FaUserNurse className="text-[#5b5bd6] text-[14px]" />
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-[#111827]">
                Nursing Notes
              </h2>

              <p className="text-[11px] text-[#6b7280] mt-1">
                Clinical observations & nursing documentation
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="h-[38px] px-4 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2 hover:bg-[#4b4bc7]"
          >
            <FaPlus className="text-[10px]" />
            Add Notes
          </button>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-[240px_1fr] min-h-[650px]">
          {/* LEFT SIDE */}
          <div className="border-r border-[#edf1f7] bg-[#fafbff]">
            {notesData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedNote(item)}
                className={`px-5 py-5 border-b border-[#edf1f7] cursor-pointer hover:bg-[#f4f6fb] transition-all relative ${
                  selectedNote.date === item.date ? "bg-[#eef2ff]" : ""
                }`}
              >
                {/* ACTIVE LINE */}
                {selectedNote.date === item.date && (
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-[#5b5bd6] rounded-r-full" />
                )}

                <p className="text-[11px] font-semibold text-[#111827] leading-5">
                  {item.date}
                </p>

                <p className="text-[10px] text-[#5b5bd6] mt-2 font-medium">
                  {item.doctor}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6">
            {/* TOP */}
            <div className="flex items-center justify-between border-b border-[#edf1f7] pb-4">
              <h2 className="text-[16px] font-bold text-[#111827]">
                Note Details
              </h2>

              <div className="flex items-center gap-3">
                <button className="h-[34px] px-3 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold text-[#374151] flex items-center gap-2">
                  <FaEdit className="text-[10px]" />
                  Edit
                </button>

                <button className="h-[34px] px-3 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold text-[#374151] flex items-center gap-2">
                  <FaPrint className="text-[10px]" />
                  Print
                </button>
              </div>
            </div>

            {/* DETAILS */}
            <div className="space-y-7 mt-6">
              {/* SUBJECTIVE */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Subjective
                </h3>

                <p className="text-[12px] text-[#374151] leading-7 mt-3">
                  {selectedNote.subjective}
                </p>
              </div>

              {/* OBJECTIVE */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Objective
                </h3>

                <p className="text-[12px] text-[#374151] leading-7 mt-3">
                  {selectedNote.objective}
                </p>
              </div>

              {/* ASSESSMENT */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Assessment
                </h3>

                <p className="text-[12px] text-[#374151] leading-7 mt-3">
                  {selectedNote.assessment}
                </p>
              </div>

              {/* PLAN */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">Plan</h3>

                <p className="text-[12px] text-[#374151] leading-7 mt-3">
                  {selectedNote.plan}
                </p>
              </div>

              {/* FOOTER */}
              <div className="pt-5 border-t border-[#edf1f7] flex items-center justify-between">
                <p className="text-[11px] text-[#6b7280]">
                  Created by :
                  <span className="font-semibold text-[#111827] ml-1">
                    {selectedNote.doctor}
                  </span>
                </p>

                <p className="text-[11px] text-[#9ca3af]">
                  {selectedNote.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADD NOTES MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[850px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-2 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  Add Nursing Notes
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Add clinical nursing observations & care plan
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="w-9 h-9 rounded-lg bg-[#f4f6fb] flex items-center justify-center"
              >
                <FaTimes className="text-[12px]" />
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 max-h-[75vh] overflow-y-auto scrollHide">
              {/* TOP FIELDS */}
              <div className="grid grid-cols-2 gap-4">
                {/* DATE */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Date & Time
                  </label>

                  <input
                    type="datetime-local"
                    className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* NAME */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Nurse / Doctor Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>
              </div>

              {/* NOTES SECTION */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                {/* SUBJECTIVE */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Subjective
                  </label>

                  <textarea
                    rows={1}
                    placeholder="Patient complaints & symptoms..."
                    className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] leading-5 resize-none outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* OBJECTIVE */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Objective
                  </label>

                  <textarea
                    rows={1}
                    placeholder="Vitals, physical findings..."
                    className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] leading-5 resize-none outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* ASSESSMENT */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Assessment
                  </label>

                  <textarea
                    rows={1}
                    placeholder="Clinical assessment..."
                    className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] leading-5 resize-none outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* PLAN */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-semibold text-[#374151]">
                    Plan
                  </label>

                  <textarea
                    rows={1}
                    placeholder="Treatment plan & nursing care..."
                    className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] leading-5 resize-none outline-none focus:border-[#5b5bd6]"
                  />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="h-[38px] px-4 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold text-[#374151]"
              >
                Cancel
              </button>

              <button className="h-[38px] px-5 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold">
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NursingNotes;
