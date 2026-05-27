import React, { useState } from "react";
import { FaCheck, FaPlus, FaTimes, FaTint } from "react-icons/fa";
import { FaDroplet, FaGlassWater } from "react-icons/fa6";
// import {
//   FaTint,
//   FaPlus,
//   FaTimes,
//   FaCheck,
//   FaGlassWater,
// //   FaDroplet,
// } from "react-icons/fa";

function IOChart() {
  const [openModal, setOpenModal] = useState(false);
// STATE

const [openFilterModal, setOpenFilterModal] = useState(false);
  const ioData = [
    {
      time: "08:00 AM",
      intakeType: "IV Fluid",
      intakeAmount: "500 ml",
      outputType: "Urine",
      outputAmount: "250 ml",
      nurse: "Nurse Priya",
      remarks: "Patient stable",
    },

    {
      time: "12:00 PM",
      intakeType: "Oral Fluids",
      intakeAmount: "300 ml",
      outputType: "Urine",
      outputAmount: "200 ml",
      nurse: "Nurse Kavya",
      remarks: "Normal output",
    },

    {
      time: "03:00 PM",
      intakeType: "Juice",
      intakeAmount: "150 ml",
      outputType: "Drain Output",
      outputAmount: "50 ml",
      nurse: "Nurse Monica",
      remarks: "Drain monitored",
    },

    {
      time: "06:00 PM",
      intakeType: "IV Antibiotics",
      intakeAmount: "100 ml",
      outputType: "Urine",
      outputAmount: "180 ml",
      nurse: "Nurse Aruna",
      remarks: "Patient hydrated",
    },
  ];

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#eef2ff] flex items-center justify-center">
            <FaTint className="text-[#5b5bd6] text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              I/O Chart
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Intake & Output fluid monitoring
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 text-[11px] font-semibold px-3 py-2 rounded-xl">
            Total Intake : 1050 ml
          </div>

          <div className="bg-orange-100 text-orange-600 text-[11px] font-semibold px-3 py-2 rounded-xl">
            Total Output : 680 ml
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="h-[38px] px-4 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2"
          >
            <FaPlus className="text-[10px]" />
            Add Entry
          </button>
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
        <table className="w-full min-w-[1100px]">
          <thead className="bg-[#f8fafc] border-b border-[#edf1f7]">
            <tr>
              {[
                "Time",
                "Intake Type",
                "Intake Amount",
                "Output Type",
                "Output Amount",
                "Nurse",
                "Remarks",
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
            {ioData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#edf1f7] hover:bg-[#fafbff]"
              >
                {/* TIME */}
                <td className="px-5 py-4">
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.time}
                  </p>
                </td>

                {/* INTAKE TYPE */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FaGlassWater className="text-blue-600 text-[12px]" />
                    </div>

                    <p className="text-[12px] font-medium text-[#374151]">
                      {item.intakeType}
                    </p>
                  </div>
                </td>

                {/* INTAKE AMOUNT */}
                <td className="px-5 py-4">
                  <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-lg">
                    {item.intakeAmount}
                  </span>
                </td>

                {/* OUTPUT TYPE */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                      <FaDroplet className="text-orange-600 text-[12px]" />
                    </div>

                    <p className="text-[12px] font-medium text-[#374151]">
                      {item.outputType}
                    </p>
                  </div>
                </td>

                {/* OUTPUT AMOUNT */}
                <td className="px-5 py-4">
                  <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-3 py-1 rounded-lg">
                    {item.outputAmount}
                  </span>
                </td>

                {/* NURSE */}
                <td className="px-5 py-4">
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.nurse}
                  </p>
                </td>

                {/* REMARKS */}
                <td className="px-5 py-4">
                  <p className="text-[12px] text-[#374151]">
                    {item.remarks}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[700px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  Add I/O Entry
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Record patient intake & output details
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
            <div className="p-5 grid grid-cols-2 gap-4 max-h-[75vh] overflow-y-auto">
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

              {/* NURSE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Nurse Name
                </label>

                <input
                  type="text"
                  placeholder="Enter nurse name"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* INTAKE TYPE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Intake Type
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>IV Fluid</option>
                  <option>Oral Fluids</option>
                  <option>Blood</option>
                  <option>Juice</option>
                  <option>Tube Feeding</option>
                </select>
              </div>

              {/* INTAKE AMOUNT */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Intake Amount
                </label>

                <input
                  type="text"
                  placeholder="Enter ml"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* OUTPUT TYPE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Output Type
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Urine</option>
                  <option>Drain Output</option>
                  <option>Vomiting</option>
                  <option>Stool</option>
                  <option>Blood Loss</option>
                </select>
              </div>

              {/* OUTPUT AMOUNT */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Output Amount
                </label>

                <input
                  type="text"
                  placeholder="Enter ml"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* REMARKS */}
              <div className="col-span-2">
                <label className="text-[11px] font-semibold text-[#374151]">
                  Remarks
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter remarks..."
                  className="w-full rounded-xl border border-[#e5e7eb] mt-2 p-3 text-[11px] resize-none outline-none focus:border-[#5b5bd6]"
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

              <button className="h-[38px] px-5 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2">
                <FaCheck className="text-[10px]" />
                Save Entry
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

export default IOChart;