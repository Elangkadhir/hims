import React, { useState } from "react";
import {
  FaPrescriptionBottleAlt,
  FaSearch,
  FaEllipsisV,
  FaPlus,
  FaTimes,
  FaCapsules,
} from "react-icons/fa";

function Prescription() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const prescriptionData = [
    {
      id: "PR-1001",
      doctor: "Dr. Sharma",
      diagnosis: "Acute Coronary Syndrome",
      medicines: [
        "Aspirin 75mg",
        "Atorvastatin 40mg",
        "Clopidogrel 75mg",
      ],
      date: "15 Jan 2026",
      status: "Active",
    },

    {
      id: "PR-1002",
      doctor: "Dr. Monica",
      diagnosis: "Type 2 Diabetes Mellitus",
      medicines: [
        "Metformin 500mg",
        "Insulin Injection",
      ],
      date: "16 Jan 2026",
      status: "Completed",
    },

    {
      id: "PR-1003",
      doctor: "Dr. Arjun",
      diagnosis: "Hypertension",
      medicines: [
        "Telmisartan 40mg",
        "Amlodipine 5mg",
      ],
      date: "17 Jan 2026",
      status: "Refill Due",
    },
  ];

  const filteredData = prescriptionData.filter((item) =>
    item.diagnosis
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";

      case "Completed":
        return "bg-blue-100 text-blue-600";

      case "Refill Due":
        return "bg-orange-100 text-orange-600";

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
            <FaPrescriptionBottleAlt className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              Prescription
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Patient medication prescriptions & treatment advice
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => setOpenModal(true)}
          className="h-8 px-3 rounded-md font-sans bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#4c4cc7]"
        >
          <FaPlus className="text-[12px]" />
          Add Prescription
        </button>
      </div>

      {/* SEARCH */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <div className="relative w-[320px]">
          <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

          <input
            type="text"
            placeholder="Search diagnosis..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[40px] rounded-xl border border-[#e5e7eb] bg-[#f8fafc] pl-10 pr-4 text-[13px] outline-none focus:border-[#5b5bd6]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="min-w-[1100px]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-[130px_170px_260px_320px_130px_120px_70px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Prescription ID
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Doctor
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Diagnosis
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Medicines
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Date
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Status
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151] text-center">
              Action
            </h3>
          </div>

          {/* CONTENT */}
          <div className="divide-y divide-[#edf1f7]">
            {filteredData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[130px_170px_260px_320px_130px_120px_70px] gap-4 px-5 py-5 hover:bg-[#fafbff] transition-all duration-200"
              >
                {/* ID */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.id}
                  </p>
                </div>

                {/* DOCTOR */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.doctor}
                  </p>
                </div>

                {/* DIAGNOSIS */}
                <div>
                  <p className="text-[13px] font-medium text-[#374151] leading-5">
                    {item.diagnosis}
                  </p>
                </div>

                {/* MEDICINES */}
                <div className="flex flex-wrap gap-2">
                  {item.medicines.map((medicine, i) => (
                    <div
                      key={i}
                      className="bg-[#eef2ff] text-[#5b5bd6] text-[11px] font-semibold px-3 py-2 rounded-xl flex items-center gap-2"
                    >
                      <FaCapsules className="text-[10px]" />
                      {medicine}
                    </div>
                  ))}
                </div>

                {/* DATE */}
                <div>
                  <p className="text-[12px] text-[#374151]">
                    {item.date}
                  </p>
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
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5 overflow-y-auto">
          <div className="bg-white rounded-[24px] w-full max-w-[700px] max-h-[90vh] overflow-hidden flex flex-col">
            {/* HEADER */}
            <div className="px-6 py-2 border-b border-[#edf1f7] flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-lg font-sans font-bold text-[#111827]">
                  Add Prescription
                </h2>

                <p className="text-[12px] text-[#6b7280] mt-1">
                  Enter medicines and prescription details
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
            <div className="flex-1 overflow-y-auto scrollHide">
              <div className="p-6 grid grid-cols-2 gap-5">
                {/* DOCTOR */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Doctor Name
                  </label>

                  <select className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                    <option>Select Doctor</option>
                    <option>Dr. Sharma</option>
                    <option>Dr. Monica</option>
                    <option>Dr. Arjun</option>
                  </select>
                </div>

                {/* DATE */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Prescription Date
                  </label>

                  <input
                    type="date"
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* DIAGNOSIS */}
                <div className="">
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Diagnosis
                  </label>

                  <input
                    placeholder="Enter diagnosis..."
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* MEDICINES */}
                <div className="">
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Medicines
                  </label>

                  <input
                    placeholder="Enter medicines with dosage..."
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* STATUS */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Status
                  </label>

                  <select className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Refill Due</option>
                  </select>
                </div>

                {/* FOLLOW-UP */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Follow-up Date
                  </label>

                  <input
                    type="date"
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-5 border-t border-[#edf1f7] flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setOpenModal(false)}
                className="h-10 px-3 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
              >
                Cancel
              </button>

              <button className="h-10 px-3 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold hover:bg-[#4c4cc7]">
                Save Prescription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prescription;