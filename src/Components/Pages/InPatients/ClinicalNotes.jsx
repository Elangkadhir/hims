import React, { useState } from "react";
import {
  FaUserMd,
  FaUserNurse,
  FaNotesMedical,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

function ClinicalNotes() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[18px] overflow-hidden">
      {/* TOP HEADER */}
      <div className="px-4 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div>
          <h2 className="text-[16px] font-bold text-[#111827]">
            Doctor / Nurse Notes
          </h2>

          <p className="text-[11px] text-[#6b7280] mt-1">
            Doctor & nurse observations for inpatient treatment
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpenModal(true)}
          className="h-8 px-4 rounded-md bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2 hover:bg-[#4b4bc7]"
        >
          <FaPlus className="text-[10px]" />
          Add Notes
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* DOCTOR NOTES */}
        <div className="bg-white border border-[#e9edf5] rounded-[18px] overflow-hidden">
          {/* HEADER */}
          <div className="px-4 py-3 border-b border-[#edf1f7] flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#eef2ff] flex items-center justify-center">
              <FaUserMd className="text-[#5b5bd6] text-[12px]" />
            </div>

            <div>
              <h2 className="text-[14px] font-bold text-[#111827]">
                Doctor Notes
              </h2>

              <p className="text-[10px] text-[#6b7280] mt-[2px]">
                Consultant instructions & treatment plan
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4 space-y-3">
            {[
              {
                doctor: "Dr. Sharma",
                department: "Cardiology",
                time: "15 Jan 2026 • 09:30 AM",
                note: "Continue IV antibiotics and monitor vitals every 4 hours.",
                priority: "Urgent",
              },

              {
                doctor: "Dr. Monica",
                department: "Neurology",
                time: "16 Jan 2026 • 11:00 AM",
                note: "Repeat ECG tomorrow morning and continue cardiac observation.",
                priority: "Routine",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#fafbff] border border-[#edf1f7] rounded-xl overflow-hidden"
              >
                {/* TOP */}
                <div className="px-3 py-3 border-b border-[#edf1f7] flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#eef2ff] flex items-center justify-center">
                        <FaNotesMedical className="text-[#5b5bd6] text-[10px]" />
                      </div>

                      <div>
                        <h3 className="text-[11px] font-bold text-[#111827]">
                          {item.doctor}
                        </h3>

                        <p className="text-[10px] text-[#6b7280] mt-[2px]">
                          {item.department}
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] text-[#9ca3af] mt-3">
                      {item.time}
                    </p>
                  </div>

                  <span
                    className={`text-[9px] font-semibold px-2 py-1 rounded-md ${
                      item.priority === "Urgent"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>

                {/* NOTE */}
                <div className="px-3 py-3">
                  <p className="text-[11px] text-[#374151] leading-5">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NURSE NOTES */}
        <div className="bg-white border border-[#e9edf5] rounded-[18px] overflow-hidden">
          {/* HEADER */}
          <div className="px-4 py-3 border-b border-[#edf1f7] flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#dcfce7] flex items-center justify-center">
              <FaUserNurse className="text-[#16a34a] text-[12px]" />
            </div>

            <div>
              <h2 className="text-[14px] font-bold text-[#111827]">
                Nurse Notes
              </h2>

              <p className="text-[10px] text-[#6b7280] mt-[2px]">
                Nursing observations & patient monitoring
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-4 space-y-3">
            {[
              {
                nurse: "Nurse Kavya",
                shift: "Morning Shift",
                time: "15 Jan 2026 • 08:00 AM",
                note: "Vitals checked and morning medications administered successfully.",
                status: "Stable",
              },

              {
                nurse: "Nurse Priya",
                shift: "Afternoon Shift",
                time: "15 Jan 2026 • 01:30 PM",
                note: "Patient complained of mild chest discomfort after lunch.",
                status: "Observation",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#fafbff] border border-[#edf1f7] rounded-xl overflow-hidden"
              >
                {/* TOP */}
                <div className="px-3 py-3 border-b border-[#edf1f7] flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#dcfce7] flex items-center justify-center">
                        <FaUserNurse className="text-[#16a34a] text-[10px]" />
                      </div>

                      <div>
                        <h3 className="text-[11px] font-bold text-[#111827]">
                          {item.nurse}
                        </h3>

                        <p className="text-[10px] text-[#6b7280] mt-[2px]">
                          {item.shift}
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] text-[#9ca3af] mt-3">
                      {item.time}
                    </p>
                  </div>

                  <span
                    className={`text-[9px] font-semibold px-2 py-1 rounded-md ${
                      item.status === "Observation"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* NOTE */}
                <div className="px-3 py-3">
                  <p className="text-[11px] text-[#374151] leading-5">
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[700px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  Add Clinical Notes
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Add doctor or nurse observations
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
            <div className="p-5 grid grid-cols-2 gap-4">
              {/* NOTE TYPE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Note Type
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Doctor Note</option>
                  <option>Nurse Note</option>
                </select>
              </div>

              {/* NAME */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter name..."
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* PRIORITY */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Priority
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Routine</option>
                  <option>Urgent</option>
                  <option>Critical</option>
                </select>
              </div>

              {/* TIME */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Date & Time
                </label>

                <input
                  type="datetime-local"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Status
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Stable</option>
                  <option>Under Observation</option>
                  <option>Needs Attention</option>
                  <option>Critical</option>
                  <option>Medication Given</option>
                </select>
              </div>

              {/* NOTES */}
              <div className="col-span-2">
                <label className="text-[11px] font-semibold text-[#374151]">
                  Clinical Notes
                </label>

                <textarea
                  rows={2}
                  placeholder="Enter clinical observations..."
                  className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-4 text-[11px] resize-none outline-none focus:border-[#5b5bd6]"
                />
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

export default ClinicalNotes;
