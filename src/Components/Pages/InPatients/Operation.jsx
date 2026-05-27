import React, { useState } from "react";
import { FaProcedures, FaSearch, FaEllipsisV } from "react-icons/fa";

function Operation() {
  const [search, setSearch] = useState("");

  const operationData = [
    {
      refNo: "OTREF-2101",
      operationDate: "12.11.2026 • 09:30 AM",
      operationName: "Coronary Artery Bypass Surgery",
      category: "Cardiology",
      surgeon: "Dr. Vikram Rao",
      technician: "Nurse Deepa",
      status: "Completed",
    },

    {
      refNo: "OTREF-2102",
      operationDate: "14.11.2026 • 02:00 PM",
      operationName: "Laparoscopic Appendectomy",
      category: "General Surgery",
      surgeon: "Dr. Arjun Mehta",
      technician: "Nurse Kavitha",
      status: "Scheduled",
    },

    {
      refNo: "OTREF-2103",
      operationDate: "15.11.2026 • 11:15 AM",
      operationName: "Knee Ligament Reconstruction",
      category: "Orthopedics",
      surgeon: "Dr. Rahul Menon",
      technician: "Nurse Priya",
      status: "In Progress",
    },

    {
      refNo: "OTREF-2104",
      operationDate: "16.11.2026 • 04:30 PM",
      operationName: "Endoscopic Sinus Surgery",
      category: "ENT",
      surgeon: "Dr. Sandeep Kumar",
      technician: "Nurse Asha",
      status: "Completed",
    },
  ];

  const filteredData = operationData.filter((item) =>
    item.operationName.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";

      case "Scheduled":
        return "bg-orange-100 text-orange-600";

      case "In Progress":
        return "bg-blue-100 text-blue-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">

      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#eef2ff] flex items-center justify-center text-[#5b5bd6]">
            <FaProcedures className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">Operation</h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Patient Operation & OT Procedure History
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            8 Completed
          </div>

          <div className="bg-orange-100 text-orange-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            2 Scheduled
          </div>

          <div className="bg-blue-100 text-blue-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            1 Active
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <div className="relative w-[320px]">
          <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

          <input
            type="text"
            placeholder="Search operation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[40px] rounded-xl border border-[#e5e7eb] bg-[#f8fafc] pl-10 pr-4 text-[13px] outline-none focus:border-[#5b5bd6]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="min-w-[1180px]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-[130px_180px_290px_150px_170px_150px_110px_70px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Reference No
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Operation Date
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Operation Name
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">Category</h3>

            <h3 className="text-[12px] font-bold text-[#374151]">Surgeon</h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              OT Technician
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">Status</h3>

            <h3 className="text-[12px] font-bold text-[#374151] text-center">
              Action
            </h3>
          </div>

          {/* TABLE CONTENT */}
          <div className="divide-y divide-[#edf1f7]">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[130px_180px_290px_150px_170px_150px_110px_70px] gap-4 px-5 py-5 hover:bg-[#fafbff] transition-all duration-200"
              >
                {/* REF */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.refNo}
                  </p>
                </div>

                {/* DATE */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.operationDate}
                  </p>
                </div>

                {/* OPERATION NAME */}
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] leading-5">
                    {item.operationName}
                  </p>
                </div>

                {/* CATEGORY */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.category}
                  </p>
                </div>

                {/* SURGEON */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.surgeon}
                  </p>
                </div>

                {/* TECHNICIAN */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.technician}
                  </p>
                </div>

                {/* STATUS */}
                <div>
                  <div
                    className={`inline-flex text-[11px] font-semibold px-3 py-1 rounded-md ${getStatusStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </div>
                </div>

                {/* ACTION */}
                <div className="flex items-start justify-center">
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
              Records: 1 to {filteredData.length} of {filteredData.length}
            </p>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-[#e5e7eb] text-[#6b7280] text-[12px]">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operation;
