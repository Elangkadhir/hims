import React, { useState } from "react";
import {
  FaUserMd,
  FaSearch,
  FaEllipsisV,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

function ConsultantRegister() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const consultantData = [
    {
      appliedDate: "15.01.2026 • 11:30 AM",
      doctor: "Dr. Sharma (9009)",
      department: "Cardiology",
      instruction:
        "Continue IV antibiotics and monitor vitals every 4 hours.",
      instructionDate: "15.01.2026",
      priority: "Urgent",
      status: "Active",
    },

    {
      appliedDate: "16.01.2026 • 09:00 AM",
      doctor: "Dr. Monica (9012)",
      department: "Neurology",
      instruction:
        "Repeat MRI scan tomorrow morning and continue observation.",
      instructionDate: "16.01.2026",
      priority: "Routine",
      status: "Pending",
    },

    {
      appliedDate: "17.01.2026 • 08:45 AM",
      doctor: "Dr. Arjun (9015)",
      department: "Orthopedics",
      instruction:
        "Start physiotherapy session twice daily after pain review.",
      instructionDate: "17.01.2026",
      priority: "Critical",
      status: "Completed",
    },
  ];

  const filteredData = consultantData.filter((item) =>
    item.instruction.toLowerCase().includes(search.toLowerCase())
  );

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

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-yellow-100 text-yellow-600";

      default:
        return "bg-blue-100 text-blue-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden relative">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6]">
            <FaUserMd className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              Consultant Register
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Consultant Instructions & Clinical Notes
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => setOpenModal(true)}
          className="h-8 px-5 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#4c4cc7]"
        >
          <FaPlus className="text-[12px]" />
          Add Instruction
        </button>
      </div>

      {/* SEARCH */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <div className="relative w-[320px]">
          <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

          <input
            type="text"
            placeholder="Search instruction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[40px] rounded-xl border border-[#e5e7eb] bg-[#f8fafc] pl-10 pr-4 text-[13px] outline-none focus:border-[#5b5bd6]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-[170px_180px_140px_350px_140px_110px_110px_70px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Applied Date
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Doctor
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Department
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Instruction
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Instruction Date
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Priority
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Status
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151] text-center">
              Action
            </h3>
          </div>

          {/* TABLE CONTENT */}
          <div className="divide-y divide-[#edf1f7]">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[170px_180px_140px_350px_140px_110px_110px_70px] gap-4 px-5 py-5 hover:bg-[#fafbff]"
              >
                {/* DATE */}
                <div>
                  <p className="text-[12px] font-medium text-[#374151]">
                    {item.appliedDate}
                  </p>
                </div>

                {/* DOCTOR */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.doctor}
                  </p>
                </div>

                {/* DEPARTMENT */}
                <div>
                  <p className="text-[12px] text-[#374151]">
                    {item.department}
                  </p>
                </div>

                {/* INSTRUCTION */}
                <div>
                  <p className="text-[12px] leading-5 text-[#374151]">
                    {item.instruction}
                  </p>
                </div>

                {/* DATE */}
                <div>
                  <p className="text-[12px] text-[#374151]">
                    {item.instructionDate}
                  </p>
                </div>

                {/* PRIORITY */}
                <div>
                  <div
                    className={`inline-flex text-[11px] font-semibold px-3 py-1 rounded-md ${getPriorityStyle(
                      item.priority
                    )}`}
                  >
                    {item.priority}
                  </div>
                </div>

                {/* STATUS */}
                <div>
                  <div
                    className={`inline-flex text-[11px] font-semibold px-3 py-1 rounded-md ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </div>
                </div>

                {/* ACTION */}
                <div className="flex justify-center">
                  <button className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:bg-[#f4f6fb]">
                    <FaEllipsisV className="text-[12px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="px-5 py-4 border-t border-[#edf1f7] flex items-center justify-between">
            <p className="text-[12px] text-[#6b7280]">
              Records: 1 to {filteredData.length} of{" "}
              {filteredData.length}
            </p>

            <button className="w-8 h-8 rounded-lg border border-[#e5e7eb] text-[12px] text-[#6b7280]">
              1
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-[24px] w-full max-w-[700px] overflow-hidden">
            {/* MODAL HEADER */}
            <div className="px-6 py-2 border-b border-[#edf1f7] flex items-center justify-between">
              <div>
                <h2 className="text-[20px] font-bold text-[#111827]">
                  Add Consultant Instruction
                </h2>

                <p className="text-[12px] text-[#6b7280] mt-1">
                  Enter doctor instructions and follow-up notes
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="w-10 h-10 rounded-xl bg-[#f4f6fb] flex items-center justify-center text-[#6b7280]"
              >
                <FaTimes />
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 grid grid-cols-2 gap-5">
              {/* DOCTOR */}
              <div>
                <label className="text-[13px] font-semibold text-[#374151]">
                  Doctor Name
                </label>

                <select className="w-full py-2 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                  <option>Select Doctor</option>
                  <option>Dr. Sharma</option>
                  <option>Dr. Monica</option>
                  <option>Dr. Arjun</option>
                </select>
              </div>

              {/* DEPARTMENT */}
              <div>
                <label className="text-[13px] font-semibold text-[#374151]">
                  Department
                </label>

                <select className="w-full py-2 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                </select>
              </div>

              {/* PRIORITY */}
              <div>
                <label className="text-[13px] font-semibold text-[#374151]">
                  Priority
                </label>

                <select className="w-full py-2 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                  <option>Routine</option>
                  <option>Urgent</option>
                  <option>Critical</option>
                </select>
              </div>

              {/* STATUS */}
              <div>
                <label className="text-[13px] font-semibold text-[#374151]">
                  Status
                </label>

                <select className="w-full py-2 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Completed</option>
                </select>
              </div>

              {/* DATE */}
              <div className="col-span-2">
                <label className="text-[13px] font-semibold text-[#374151]">
                  Review Date
                </label>

                <input
                  type="datetime-local"
                  className="w-full py-2 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                />
              </div>

              {/* INSTRUCTION */}
              <div className="col-span-2">
                <label className="text-[13px] font-semibold text-[#374151]">
                  Instruction
                </label>

                <textarea
                  rows={5}
                  placeholder="Enter consultant instruction..."
                  className="w-full rounded-2xl border border-[#e5e7eb] mt-2 p-4 text-[13px] outline-none resize-none focus:border-[#5b5bd6]"
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-5 border-t border-[#edf1f7] flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="h-8 px-5 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
              >
                Cancel
              </button>

              <button className="h-8 px-6 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold hover:bg-[#4c4cc7]">
                Save Instruction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsultantRegister;