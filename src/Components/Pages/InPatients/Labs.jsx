import React, { useState } from "react";
import {
  FaFlask,
  FaSearch,
  FaEllipsisV,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

function Labs() {
  const [search, setSearch] = useState("");

  const labsData = [
    {
      testName: "Complete Blood Count (CBC)",
      department: "Pathology",
      collectedBy: "Nurse Kavya (9005)",
      lab: "In-House Pathology Lab",
      collectedDate: "15.01.2026",
      expectedDate: "15.01.2026",
      approvedBy: "Dr. Sharma (9011)",
      approvedDate: "15.01.2026",
      status: "Completed",
    },

    {
      testName: "Liver Function Test (LFT)",
      department: "Biochemistry",
      collectedBy: "Nurse Priya (9008)",
      lab: "Central Diagnostic Lab",
      collectedDate: "15.01.2026",
      expectedDate: "16.01.2026",
      approvedBy: "Pending",
      approvedDate: "--",
      status: "Processing",
    },

    {
      testName: "Troponin I",
      department: "Cardiology",
      collectedBy: "Nurse Arjun (9010)",
      lab: "Cardiac Marker Lab",
      collectedDate: "15.01.2026",
      expectedDate: "15.01.2026",
      approvedBy: "Dr. Monica (9015)",
      approvedDate: "15.01.2026",
      status: "Critical",
    },

    {
      testName: "Urine Routine",
      department: "Microbiology",
      collectedBy: "Nurse Kavya (9005)",
      lab: "Microbiology Lab",
      collectedDate: "14.01.2026",
      expectedDate: "15.01.2026",
      approvedBy: "Dr. Reena (9009)",
      approvedDate: "15.01.2026",
      status: "Completed",
    },
  ];

  const filteredData = labsData.filter((item) =>
    item.testName.toLowerCase().includes(search.toLowerCase()),
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";

      case "Processing":
        return "bg-orange-100 text-orange-600";

      case "Critical":
        return "bg-red-100 text-red-600";

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
            <FaFlask className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">Labs</h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Patient Laboratory Reports & Status
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            12 Completed
          </div>

          <div className="bg-orange-100 text-orange-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            3 Processing
          </div>

          <div className="bg-red-100 text-red-600 text-[12px] font-semibold px-3 py-2 rounded-xl">
            1 Critical
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <div className="relative w-[320px]">
          <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

          <input
            type="text"
            placeholder="Search test name..."
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
          <div className="grid grid-cols-[240px_120px_230px_140px_220px_100px_70px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">Test Name</h3>

            <h3 className="text-[12px] font-bold text-[#374151]">Department</h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Sample Collected
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Expected Date
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Approved By
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
                className="grid grid-cols-[240px_120px_230px_140px_220px_100px_70px] gap-4 px-5 py-5 hover:bg-[#fafbff] transition-all duration-200"
              >
                {/* TEST NAME */}
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] leading-5">
                    {item.testName}
                  </p>
                </div>

                {/* DEPARTMENT */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.department}
                  </p>
                </div>

                {/* SAMPLE COLLECTED */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.collectedBy}
                  </p>

                  <p className="text-[11px] text-[#6b7280] mt-1">{item.lab}</p>

                  <p className="text-[11px] text-[#6b7280] mt-1">
                    {item.collectedDate}
                  </p>
                </div>

                {/* EXPECTED DATE */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.expectedDate}
                  </p>
                </div>

                {/* APPROVED */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.approvedBy}
                  </p>

                  <p className="text-[11px] text-[#6b7280] mt-1">
                    {item.approvedDate}
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

export default Labs;
