import React, { useState } from "react";
import {
  FaClipboardList,
  FaPlus,
  FaTimes,
  FaEdit,
  FaPrint,
} from "react-icons/fa";

function CarePlan() {
  const [openModal, setOpenModal] = useState(false);

  const carePlanData = [
    {
      date: "May 14, 2026 09:30 AM",
      addedBy: "Dr. Williams",
      title: "Cardiac Monitoring Plan",
      goal: "Maintain stable cardiac rhythm and oxygenation.",
      interventions: [
        "Monitor vitals every 4 hours",
        "Daily ECG monitoring",
        "Oxygen support if needed",
      ],
      evaluation:
        "Patient stable. No chest pain. ECG findings improving.",
      status: "Active",
    },

    {
      date: "May 13, 2026 07:45 PM",
      addedBy: "Dr. Monica",
      title: "Diabetic Management Plan",
      goal: "Maintain blood glucose within target range.",
      interventions: [
        "Strict diabetic diet",
        "Blood sugar monitoring",
        "Administer insulin as prescribed",
      ],
      evaluation: "Blood sugar levels improving gradually.",
      status: "Active",
    },

    {
      date: "May 12, 2026 08:15 PM",
      addedBy: "Dr. Sharma",
      title: "Mobility & Fall Prevention",
      goal: "Prevent falls and improve mobility.",
      interventions: [
        "Bed rest with assisted mobility",
        "Fall risk assessment every shift",
        "Patient education on safety",
      ],
      evaluation: "No fall incidents reported.",
      status: "Completed",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(carePlanData[0]);

  return (
    <div className="space-y-5">
      <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
        {/* HEADER */}
        <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center">
              <FaClipboardList className="text-[#5b5bd6] text-[14px]" />
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-[#111827]">
                Care Plan
              </h2>

              <p className="text-[11px] text-[#6b7280] mt-1">
                Nursing care goals, interventions & evaluations
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="h-[38px] px-4 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold flex items-center gap-2"
          >
            <FaPlus className="text-[10px]" />
            Add Care Plan
          </button>
        </div>

        {/* BODY */}
        <div className="grid grid-cols-[260px_1fr] min-h-[650px]">
          {/* LEFT SIDE */}
          <div className="border-r border-[#edf1f7] bg-[#fafbff]">
            {carePlanData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(item)}
                className={`px-5 py-5 border-b border-[#edf1f7] cursor-pointer hover:bg-[#f4f6fb] relative transition-all ${
                  selectedPlan.date === item.date ? "bg-[#eef2ff]" : ""
                }`}
              >
                {selectedPlan.date === item.date && (
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-[#5b5bd6]" />
                )}

                <p className="text-[11px] font-semibold text-[#111827]">
                  {item.date}
                </p>

                <p className="text-[11px] text-[#5b5bd6] font-medium mt-2">
                  {item.title}
                </p>

                <div className="mt-3">
                  <span
                    className={`px-2 py-1 rounded-full text-[9px] font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-[#edf1f7] pb-4">
              <h2 className="text-[16px] font-bold text-[#111827]">
                Care Plan Details
              </h2>

              <div className="flex items-center gap-3">
                <button className="h-[34px] px-3 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold flex items-center gap-2">
                  <FaEdit className="text-[10px]" />
                  Edit
                </button>

                <button className="h-[34px] px-3 rounded-lg border border-[#e5e7eb] text-[11px] font-semibold flex items-center gap-2">
                  <FaPrint className="text-[10px]" />
                  Print
                </button>
              </div>
            </div>

            <div className="space-y-7 mt-6">
              {/* TITLE */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Care Plan Title
                </h3>

                <p className="text-[12px] text-[#374151] mt-3">
                  {selectedPlan.title}
                </p>
              </div>

              {/* GOAL */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Goal
                </h3>

                <p className="text-[12px] text-[#374151] mt-3 leading-6">
                  {selectedPlan.goal}
                </p>
              </div>

              {/* INTERVENTIONS */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Interventions
                </h3>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {selectedPlan.interventions.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#fafbff] border border-[#edf1f7] rounded-xl p-3 flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#eef2ff] flex items-center justify-center">
                        <FaClipboardList className="text-[#5b5bd6] text-[10px]" />
                      </div>

                      <p className="text-[11px] font-medium text-[#374151]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EVALUATION */}
              <div>
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Evaluation
                </h3>

                <p className="text-[12px] text-[#374151] mt-3 leading-6">
                  {selectedPlan.evaluation}
                </p>
              </div>

              {/* FOOTER */}
              <div className="pt-5 border-t border-[#edf1f7] flex items-center justify-between">
                <p className="text-[11px] text-[#6b7280]">
                  Added By :
                  <span className="font-semibold text-[#111827] ml-1">
                    {selectedPlan.addedBy}
                  </span>
                </p>

                <p className="text-[11px] text-[#9ca3af]">
                  {selectedPlan.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[900px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-4 border-b border-[#edf1f7] flex justify-between items-center">
              <div>
                <h2 className="text-[18px] font-bold">
                  Add Care Plan
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Create patient care plan
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="w-9 h-9 rounded-lg bg-[#f4f6fb] flex items-center justify-center"
              >
                <FaTimes />
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="datetime-local"
                  className="h-[42px] border rounded-lg px-3 text-[11px]"
                />

                <input
                  type="text"
                  placeholder="Doctor / Nurse Name"
                  className="h-[42px] border rounded-lg px-3 text-[11px]"
                />

                <input
                  type="text"
                  placeholder="Care Plan Title"
                  className="h-[42px] border rounded-lg px-3 text-[11px]"
                />

                <select className="h-[42px] border rounded-lg px-3 text-[11px]">
                  <option>Active</option>
                  <option>Completed</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-4">
                <textarea
                  rows={3}
                  placeholder="Goal"
                  className="border rounded-xl p-3 text-[11px]"
                />

                <textarea
                  rows={4}
                  placeholder="Interventions"
                  className="border rounded-xl p-3 text-[11px]"
                />

                <textarea
                  rows={3}
                  placeholder="Evaluation"
                  className="border rounded-xl p-3 text-[11px]"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="h-[38px] px-4 rounded-lg border text-[11px] font-semibold"
              >
                Cancel
              </button>

              <button className="h-[38px] px-5 rounded-lg bg-[#5b5bd6] text-white text-[11px] font-semibold">
                Save Care Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarePlan;