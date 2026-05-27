import React, { useState } from "react";
import { FaHeartbeat, FaPlus, FaTimes } from "react-icons/fa";

function Vitals() {
  const [openModal, setOpenModal] = useState(false);
  // STATE

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const recentVitals = [
    {
      date: "May 14, 2026 04:00 AM",
      temp: "98.5",
      pulse: "78",
      bp: "120 / 80",
      rr: "18",
      spo2: "98",
      pain: "2",
    },

    {
      date: "May 13, 2026 08:00 PM",
      temp: "99.1",
      pulse: "82",
      bp: "118 / 76",
      rr: "20",
      spo2: "97",
      pain: "3",
    },

    {
      date: "May 13, 2026 04:00 AM",
      temp: "98.4",
      pulse: "76",
      bp: "122 / 78",
      rr: "18",
      spo2: "98",
      pain: "2",
    },
  ];

  return (
    <div className="space-y-5">
      {/* RECORD VITALS */}
      <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
        {/* HEADER */}
        <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
          <div>
            <h2 className="text-[16px] font-bold text-[#111827]">
              Record Vitals
            </h2>

            <p className="text-[11px] text-[#6b7280] mt-1">
              Patient vital signs monitoring
            </p>
          </div>

          {/* <button
            onClick={() => setOpenModal(true)}
            className="h-[38px] px-4 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2"
          >
            <FaPlus className="text-[10px]" />
            Add Vitals
          </button> */}
        </div>

        {/* FORM */}
        <div className="p-5">
          <div className="grid grid-cols-4 gap-4">
            {/* DATE */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Date & Time
              </label>

              <input
                type="datetime-local"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* TEMP */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Temperature (°F)
              </label>

              <input
                type="text"
                placeholder="98.6"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* PULSE */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Pulse (bpm)
              </label>

              <input
                type="text"
                placeholder="78"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* RR */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Respiratory Rate
              </label>

              <input
                type="text"
                placeholder="18"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* BP */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Blood Pressure
              </label>

              <input
                type="text"
                placeholder="120 / 80"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* SPO2 */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                SpO2 (%)
              </label>

              <input
                type="text"
                placeholder="98"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* PAIN */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Pain Score
              </label>

              <input
                type="text"
                placeholder="2"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* SUGAR */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Blood Sugar
              </label>

              <input
                type="text"
                placeholder="110"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* WEIGHT */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Weight (kg)
              </label>

              <input
                type="text"
                placeholder="72"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* HEIGHT */}
            <div>
              <label className="text-[11px] font-semibold text-[#374151]">
                Height (cm)
              </label>

              <input
                type="text"
                placeholder="175"
                className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
              />
            </div>

            {/* REMARKS */}
            <div className="col-span-2">
              <label className="text-[11px] font-semibold text-[#374151]">
                Remarks
              </label>

              <textarea
                rows={1}
                placeholder="Patient is stable..."
                className="w-full rounded-lg border border-[#e5e7eb] mt-2 px-3 py-3 text-[11px] resize-none outline-none focus:border-[#5b5bd6]"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-5">
            <button className="h-[38px] px-4 rounded-lg border border-[#e5e7eb] text-[#374151] text-[11px] font-semibold">
              Cancel
            </button>

            <button className="h-[38px] px-5 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold">
              Save Vitals
            </button>
          </div>
        </div>
      </div>

      {/* RECENT VITALS */}
      <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
        {/* HEADER */}
        <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#eef2ff] flex items-center justify-center">
            <FaHeartbeat className="text-[#5b5bd6] text-[12px]" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-[15px] font-bold text-[#111827]">
                Recent Vitals
              </h2>

              <p className="text-[11px] text-[#6b7280] mt-1">
                Latest recorded patient vitals
              </p>
            </div>
            <button
              className="px-4 py-2 bg-[#0CB8A1] text-white text-sm font-semibold rounded-md border"
              onClick={() => setOpenFilterModal(true)}
            >
              Filter
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f8fafc]">
              <tr>
                {[
                  "Date & Time",
                  "Temp (°F)",
                  "Pulse",
                  "BP",
                  "RR",
                  "SpO2",
                  "Pain",
                ].map((head, index) => (
                  <th
                    key={index}
                    className="text-left px-5 py-4 text-[11px] font-bold text-[#374151]"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {recentVitals.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-[#edf1f7] hover:bg-[#fafbff]"
                >
                  <td className="px-5 py-4 text-[12px] font-medium text-[#374151]">
                    {item.date}
                  </td>

                  <td className="px-5 py-4 text-[12px] font-semibold text-[#111827]">
                    {item.temp}
                  </td>

                  <td className="px-5 py-4 text-[12px] font-semibold text-[#111827]">
                    {item.pulse}
                  </td>

                  <td className="px-5 py-4 text-[12px] font-semibold text-[#111827]">
                    {item.bp}
                  </td>

                  <td className="px-5 py-4 text-[12px] font-semibold text-[#111827]">
                    {item.rr}
                  </td>

                  <td className="px-5 py-4">
                    <span className="bg-[#dcfce7] text-[#16a34a] text-[10px] font-semibold px-3 py-1 rounded-lg">
                      {item.spo2}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-[12px] font-semibold text-[#ef4444]">
                    {item.pain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                  Add Vitals
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Record patient vital signs
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
            <div className="p-5 grid grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
              {[
                "Temperature",
                "Pulse",
                "Respiratory Rate",
                "Blood Pressure",
                "SpO2",
                "Pain Score",
                "Blood Sugar",
                "Weight",
                "Height",
              ].map((field, index) => (
                <div key={index}>
                  <label className="text-[11px] font-semibold text-[#374151]">
                    {field}
                  </label>

                  <input
                    type="text"
                    placeholder={`Enter ${field}`}
                    className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>
              ))}

              <div className="col-span-2">
                <label className="text-[11px] font-semibold text-[#374151]">
                  Remarks
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter remarks..."
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
                Save Vitals
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FILTER MODAL */}

      {openFilterModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-2 border-b border-slate-200 bg-gradient-to-r from-[#8C3EA8] to-[#5E73B7]">
              <div>
                <h2 className="text-lg font-bold text-white">Filter Records</h2>
              </div>

              <button
                onClick={() => setOpenFilterModal(false)}
                className="w-9 h-9 rounded-lg bg-white/20 text-white flex items-center justify-center"
              >
                <FaTimes />
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 grid grid-cols-2 gap-3">
              {/* FROM DATE */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  From Date
                </label>

                <input
                  type="date"
                  className="w-full h-10 rounded-md border border-slate-200 px-4 text-sm outline-none focus:border-[#8C3EA8] focus:ring-4 focus:ring-purple-100 transition-all"
                />
              </div>

              {/* TO DATE */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  To Date
                </label>

                <input
                  type="date"
                  className="w-full h-10 rounded-md border border-slate-200 px-4 text-sm outline-none focus:border-[#8C3EA8] focus:ring-4 focus:ring-purple-100 transition-all"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 px-5 py-4 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => setOpenFilterModal(false)}
                className="px-5 py-2 rounded-md font-sans border border-slate-300 text-slate-600 text-sm font-semibold"
              >
                Cancel
              </button>

              <button className="px-5 py-2 rounded-md font-sans bg-[#0CB8A1] text-white text-sm font-bold shadow-lg shadow-emerald-100">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vitals;
