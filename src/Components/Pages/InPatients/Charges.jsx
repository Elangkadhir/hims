import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaSearch,
  FaEllipsisV,
  FaPlus,
  FaTimes,
  FaCapsules,
  FaFlask,
  FaProcedures,
  FaBed,
  FaUserMd,
} from "react-icons/fa";

function Charges() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const chargesData = [
    {
      date: "15 Jan 2026 • 08:00 AM",
      service: "Ward A - Bed 12",
      category: "Room Rent",
      qty: "3 Days",
      unitCost: "₹ 2,500",
      tax: "15%",
      total: "₹ 7,950",
      status: "Paid",
      icon: <FaBed />,
      color: "bg-blue-100 text-blue-600",
    },

    {
      date: "15 Jan 2026 • 10:30 AM",
      service: "CBC Lab Test",
      category: "Lab Test",
      qty: "1",
      unitCost: "₹ 450",
      tax: "15%",
      total: "₹ 500",
      status: "Pending",
      icon: <FaFlask />,
      color: "bg-purple-100 text-purple-600",
    },

    {
      date: "15 Jan 2026 • 12:00 PM",
      service: "Paracetamol 650mg",
      category: "Medicine",
      qty: "2 Tablets",
      unitCost: "₹ 25",
      tax: "15%",
      total: "₹ 55",
      status: "Paid",
      icon: <FaCapsules />,
      color: "bg-orange-100 text-orange-600",
    },

    {
      date: "15 Jan 2026 • 03:00 PM",
      service: "Cardiology Consultation",
      category: "Consultation",
      qty: "1",
      unitCost: "₹ 1,200",
      tax: "15%",
      total: "₹ 1,320",
      status: "Insurance",
      icon: <FaUserMd />,
      color: "bg-green-100 text-green-600",
    },

    {
      date: "15 Jan 2026 • 05:30 PM",
      service: "ECG Procedure",
      category: "Procedure",
      qty: "1",
      unitCost: "₹ 850",
      tax: "15%",
      total: "₹ 940",
      status: "Pending",
      icon: <FaProcedures />,
      color: "bg-red-100 text-red-600",
    },
  ];

  const filteredData = chargesData.filter((item) =>
    item.service.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-orange-100 text-orange-600";

      case "Insurance":
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
            <FaMoneyBillWave className="text-[18px]" />
          </div>

          <div>
            <h2 className="text-[18px] font-bold text-[#111827]">
              Charges
            </h2>

            <p className="text-[12px] text-[#6b7280] mt-1">
              Patient billing charges & hospital services
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => setOpenModal(true)}
          className="h-8 px-3 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#4c4cc7]"
        >
          <FaPlus className="text-sm font-sans" />
          Add Charge
        </button>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-4 gap-4 p-5 border-b border-[#edf1f7]">
        {[
          {
            label: "Total Bill",
            value: "₹ 48,750",
            color: "text-[#111827]",
          },

          {
            label: "Paid Amount",
            value: "₹ 25,000",
            color: "text-green-600",
          },

          {
            label: "Pending Amount",
            value: "₹ 23,750",
            color: "text-orange-600",
          },

          {
            label: "Insurance Coverage",
            value: "₹ 1,320",
            color: "text-blue-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#fafbff] border border-[#edf1f7] rounded-2xl p-4"
          >
            <p className="text-[12px] text-[#6b7280]">
              {item.label}
            </p>

            <h3
              className={`text-[22px] font-bold mt-2 ${item.color}`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* SEARCH */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <div className="relative w-[320px]">
          <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

          <input
            type="text"
            placeholder="Search charges..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[40px] rounded-xl border border-[#e5e7eb] bg-[#f8fafc] pl-10 pr-4 text-[13px] outline-none focus:border-[#5b5bd6]"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="min-w-[1250px]">
          {/* HEADER */}
          <div className="grid grid-cols-[180px_260px_160px_100px_130px_100px_130px_110px_70px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
            <h3 className="text-[12px] font-bold text-[#374151]">
              Date & Time
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Service Name
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Category
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Qty
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Unit Cost
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Tax
            </h3>

            <h3 className="text-[12px] font-bold text-[#374151]">
              Total Amount
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
                className="grid grid-cols-[180px_260px_160px_100px_130px_100px_130px_110px_70px] gap-4 px-5 py-5 hover:bg-[#fafbff] transition-all duration-200"
              >
                {/* DATE */}
                <div>
                  <p className="text-[12px] text-[#374151] font-medium">
                    {item.date}
                  </p>
                </div>

                {/* SERVICE */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <p className="text-[13px] font-semibold text-[#111827] leading-5">
                    {item.service}
                  </p>
                </div>

                {/* CATEGORY */}
                <div>
                  <span
                    className={`inline-flex text-[11px] font-semibold px-3 py-2 rounded-xl ${item.color}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* QTY */}
                <div>
                  <p className="text-[12px] text-[#374151]">
                    {item.qty}
                  </p>
                </div>

                {/* UNIT */}
                <div>
                  <p className="text-[12px] font-semibold text-[#111827]">
                    {item.unitCost}
                  </p>
                </div>

                {/* TAX */}
                <div>
                  <p className="text-[12px] text-[#ef4444] font-semibold">
                    {item.tax}
                  </p>
                </div>

                {/* TOTAL */}
                <div>
                  <p className="text-[13px] font-bold text-[#111827]">
                    {item.total}
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

          {/* TOTAL */}
          <div className="px-5 py-5 border-t border-[#edf1f7] flex justify-end">
            <div className="bg-[#fafbff] border border-[#edf1f7] rounded-2xl px-6 py-4">
              <p className="text-[12px] text-[#6b7280]">
                Grand Total
              </p>

              <h2 className="text-[28px] font-bold text-[#111827] mt-1">
                ₹ 10,765
              </h2>
            </div>
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
                  Add Charge
                </h2>

                <p className="text-xs font-sans text-[#6b7280]">
                  Add patient billing & service charges
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
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 grid grid-cols-2 gap-5">
                {/* CATEGORY */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Category
                  </label>

                  <select className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                    <option>Medicine</option>
                    <option>Lab Test</option>
                    <option>Procedure</option>
                    <option>Room Rent</option>
                    <option>Consultation</option>
                  </select>
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Service Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter service..."
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* QTY */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Quantity
                  </label>

                  <input
                    type="text"
                    placeholder="Enter quantity..."
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* UNIT */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Unit Cost
                  </label>

                  <input
                    type="text"
                    placeholder="₹ 0.00"
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* TAX */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Tax
                  </label>

                  <input
                    type="text"
                    placeholder="₹ 0.00"
                    className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]"
                  />
                </div>

                {/* STATUS */}
                <div>
                  <label className="text-[13px] font-semibold text-[#374151]">
                    Status
                  </label>

                  <select className="w-full h-10 rounded-md border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none focus:border-[#5b5bd6]">
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Insurance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-5 border-t border-[#edf1f7] flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setOpenModal(false)}
                className="h-8 px-4 rounded-md border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
              >
                Cancel
              </button>

              <button className="h-8 px-4 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold hover:bg-[#4c4cc7]">
                Save Charge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Charges;