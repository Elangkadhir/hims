import React, { useState } from "react";
import { FaTasks, FaCheck, FaTimes, FaEdit } from "react-icons/fa";

function PendingTasks() {
  const [openModal, setOpenModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const tasksData = [
    {
      task: "ECG Scheduled at 06:00 PM",
      priority: "High",
      status: "Pending",
      assigned: "Nurse Priya",
      due: "06:00 PM",
    },

    {
      task: "Evening Medication Pending",
      priority: "Medium",
      status: "Pending",
      assigned: "Nurse Kavya",
      due: "07:00 PM",
    },

    {
      task: "Blood Sugar Check at 08:00 PM",
      priority: "Low",
      status: "Pending",
      assigned: "Nurse Monica",
      due: "08:00 PM",
    },

    {
      task: "Doctor Review Pending",
      priority: "High",
      status: "Pending",
      assigned: "Nurse Aruna",
      due: "09:00 PM",
    },
  ];

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-orange-100 text-orange-600";

      case "Low":
        return "bg-blue-100 text-blue-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-end gap-3">
        <input
          type="date"
          className="px-2 py-2 rounded-md border  cursor-pointer border-[#e5e7eb] text-[11px] outline-none focus:border-[#5b5bd6]"
        />
      </div>
      {tasksData.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-[#edf1f7] rounded-[20px] px-5 py-4 bg-white"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* ICON */}
            <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
              <FaTasks className="text-orange-600 text-[15px]" />
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[13px] font-semibold text-[#111827]">
                {item.task}
              </p>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {/* PRIORITY */}
                <span
                  className={`text-[9px] font-bold px-2 py-1 rounded-md ${getPriorityStyle(
                    item.priority,
                  )}`}
                >
                  {item.priority}
                </span>

                {/* STATUS */}
                <span className="bg-orange-100 text-orange-600 text-[9px] font-bold px-2 py-1 rounded-md">
                  {item.status}
                </span>

                {/* ASSIGNED */}
                <span className="bg-[#eef2ff] text-[#5b5bd6] text-[9px] font-bold px-2 py-1 rounded-md">
                  {item.assigned}
                </span>

                {/* TIME */}
                <span className="bg-[#f3f4f6] text-[#374151] text-[9px] font-bold px-2 py-1 rounded-md">
                  Due : {item.due}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* UPDATE */}
            <button
              onClick={() => {
                setSelectedTask(item);

                setOpenModal(true);
              }}
              className="h-[34px] px-3 rounded-lg border border-[#e5e7eb] text-[10px] font-semibold text-[#374151] hover:bg-[#f8fafc] flex items-center gap-2"
            >
              <FaEdit className="text-[10px]" />
              Update
            </button>

            {/* COMPLETE */}
            {/* <button className="h-[34px] px-3 rounded-lg bg-green-100 text-green-600 text-[10px] font-semibold hover:bg-green-200 flex items-center gap-2">
              <FaCheck className="text-[10px]" />
              Complete
            </button> */}
          </div>
        </div>
      ))}

      {/* UPDATE MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[22px] w-full max-w-[550px] overflow-hidden">
            {/* HEADER */}
            <div className="px-5 py-2 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  Update Task
                </h2>

                <p className="text-[11px] text-[#6b7280] mt-1">
                  Update patient pending task status
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
            <div className="p-5 space-y-4">
              {/* TASK */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Task
                </label>

                <div className="mt-2 h-[42px] rounded-lg bg-[#f8fafc] border border-[#e5e7eb] px-3 flex items-center text-[12px] font-semibold text-[#111827]">
                  {selectedTask?.task}
                </div>
              </div>

              {/* STATUS */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Status
                </label>

                <select className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Rescheduled</option>
                </select>
              </div>

              {/* ASSIGNED NURSE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Assigned Nurse
                </label>

                <input
                  type="text"
                  placeholder="Enter nurse name"
                  defaultValue={selectedTask?.assigned}
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* RESCHEDULE */}
              <div>
                <label className="text-[11px] font-semibold text-[#374151]">
                  Reschedule Time
                </label>

                <input
                  type="datetime-local"
                  className="w-full h-[42px] rounded-lg border border-[#e5e7eb] mt-2 px-3 text-[11px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* REMARKS */}
              <div>
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
                Update Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PendingTasks;
