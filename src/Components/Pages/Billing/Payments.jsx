import React, { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaCapsules,
  FaFlask,
  FaProcedures,
  FaUserMd,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";
import HospitalLogo from "../../../Assets/Images/Logosss.jpg";

function Payments() {
  const [activeTab, setActiveTab] = useState("IPD");
  const [serviceTab, setServiceTab] = useState("IPD");
  // STATE

  const [openGenerateBill, setOpenGenerateBill] = useState(false);
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  // STATE

  const [openBillSummary, setOpenBillSummary] = useState(false);
  // SERVICE TABS
  const serviceTabs =
    activeTab === "IPD"
      ? ["IPD", "Pharmacy", "Pathology", "Radiology", "Blood Bank", "Ambulance"]
      : ["OPD"];

  // DATA
  const billingData = [
    {
      date: "15 Jan 2026 • 09:30 AM",
      service: "General Consultation",
      type: "OPD",
      category: "Consultation",
      qty: "1",
      charge: 800,
      tax: "10 %",
      discount: 50,
      finalAmount: 750,
      icon: <FaUserMd />,
      color: "bg-blue-100 text-blue-600",
    },

    {
      date: "15 Jan 2026 • 10:30 AM",
      service: "Ward Charges",
      type: "IPD",
      category: "Room",
      qty: "2 Days",
      charge: 4500,
      tax: "10 %",
      discount: 200,
      finalAmount: 4300,
      icon: <FaProcedures />,
      color: "bg-green-100 text-green-600",
    },

    {
      date: "15 Jan 2026 • 11:00 AM",
      service: "Paracetamol 650mg",
      type: "Pharmacy",
      category: "Medicine",
      qty: "2",
      charge: 120,
      tax: "5 %",
      discount: 10,
      finalAmount: 110,
      icon: <FaCapsules />,
      color: "bg-orange-100 text-orange-600",
    },

    {
      date: "15 Jan 2026 • 12:00 PM",
      service: "CBC Test",
      type: "Pathology",
      category: "Lab",
      qty: "1",
      charge: 950,
      tax: "5 %",
      discount: 50,
      finalAmount: 900,
      icon: <FaFlask />,
      color: "bg-purple-100 text-purple-600",
    },

    {
      date: "15 Jan 2026 • 01:00 PM",
      service: "CT Scan",
      type: "Radiology",
      category: "Scan",
      qty: "1",
      charge: 2500,
      tax: "12 %",
      discount: 200,
      finalAmount: 2300,
      icon: <FaProcedures />,
      color: "bg-pink-100 text-pink-600",
    },

    {
      date: "15 Jan 2026 • 02:00 PM",
      service: "Blood Unit",
      type: "Blood Bank",
      category: "Blood",
      qty: "1",
      charge: 3000,
      tax: "0 %",
      discount: 0,
      finalAmount: 3000,
      icon: <FaMoneyBillWave />,
      color: "bg-red-100 text-red-600",
    },

    {
      date: "15 Jan 2026 • 03:00 PM",
      service: "Emergency Ambulance",
      type: "Ambulance",
      category: "Transport",
      qty: "1",
      charge: 1800,
      tax: "8 %",
      discount: 100,
      finalAmount: 1700,
      icon: <FaPlus />,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  // FILTER
  const filteredBillingData = billingData.filter((item) => {
    if (activeTab === "IPD") {
      return item.type !== "OPD" && item.type === serviceTab;
    }

    if (activeTab === "OPD") {
      return item.type === "OPD";
    }

    return item.type === serviceTab;
  });

  // TOTALS
  const totalAmount = filteredBillingData.reduce(
    (acc, item) => acc + item.charge,
    0,
  );

  const totalDiscount = filteredBillingData.reduce(
    (acc, item) => acc + item.discount,
    0,
  );

  const finalAmount = filteredBillingData.reduce(
    (acc, item) => acc + item.finalAmount,
    0,
  );

  return (
    <Layout>
      <div className="p-4">
        <div className="bg-white rounded-[24px] border border-[#edf1f7] overflow-hidden">
          {/* HEADER */}
          <div className="px-5 py-5 border-b border-[#edf1f7]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[20px] font-bold text-[#111827]">
                  Patient Billing
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-[280px]">
                  <FaSearch className="absolute top-3 left-3 text-[#9ca3af] text-[13px]" />

                  <input
                    type="text"
                    placeholder="Search Patient..."
                    className="w-full h-10 rounded-lg border border-[#e5e7eb] bg-[#f8fafc] pl-10 pr-4 text-[13px] outline-none"
                  />
                </div>

                <button className="h-10 px-5 rounded-lg bg-[#5b5bd6] text-white text-[13px] font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden mt-5 mx-5">
            <div className="grid grid-cols-12">
              {/* LEFT */}
              <div className="col-span-5 border-r border-[#edf1f7] px-5 py-4 flex items-center gap-4">
                {/* IMAGE */}
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="patient"
                  className="w-[72px] h-[72px] rounded-full object-cover border-[4px] border-[#dff7e8]"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  {/* NAME */}
                  <h1 className="text-[18px] font-bold text-[#111827]">
                    Ravi Kumar
                  </h1>

                  {/* INFO */}
                  <div className="flex items-center gap-4 mt-2 text-[12px] font-semibold text-[#4b5563]">
                    <span>45 Years / Male</span>

                    <span>UHID: UHID-2026-10234</span>

                    <span>Blood Group: B+</span>
                  </div>

                  {/* CONTACT */}
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2 text-[12px] font-semibold text-[#374151]">
                      <FaPhoneAlt className="text-[#5b5bd6] text-[11px]" />

                      <span>9876543210</span>
                    </div>

                    <div className="flex items-center gap-2 text-[12px] font-semibold text-[#374151]">
                      <FaEnvelope className="text-[#5b5bd6] text-[11px]" />

                      <span>ravikumar@gmail.com</span>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5 items-center">
                    <h2 className="text-sm font-sans font-bold text-[#10b981]">
                      Star Health Insurance
                    </h2>
                    <h3 className="text-sm font-sans font-semibold ">
                      ₹5,00,000
                    </h3>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-span-7 grid grid-cols-3">
                {/* IP DETAILS */}
                <div className="px-5 py-4 border-r border-[#edf1f7]">
                  <p className="text-[11px] font-medium text-[#6b7280]">
                    IP Number
                  </p>

                  <h2 className="text-[18px] font-bold text-[#10b981] mt-2">
                    IP-2026-01568
                  </h2>

                  <p className="text-[11px] font-medium text-[#6b7280] mt-5">
                    Department
                  </p>

                  <h3 className="text-[13px] font-semibold text-[#111827] mt-1">
                    Cardiology
                  </h3>
                </div>

                {/* ADMISSION */}
                <div className="px-5 py-4 border-r border-[#edf1f7]">
                  <p className="text-[11px] font-medium text-[#6b7280]">
                    Admission Date & Time
                  </p>

                  <h3 className="text-[13px] font-bold text-[#111827] mt-2 leading-6">
                    15 Jan 2026
                    <br />
                    10:30 AM
                  </h3>

                  <p className="text-[11px] font-medium text-[#6b7280] mt-5">
                    Treatment Doctor
                  </p>

                  <h3 className="text-[13px] font-semibold text-[#111827] mt-1">
                    Dr. Sharma
                  </h3>
                </div>

                {/* WARD */}
                <div className="px-5 py-4">
                  <p className="text-[11px] font-medium text-[#6b7280]">
                    Ward / Room / Bed
                  </p>

                  <h3 className="text-[13px] font-bold text-[#111827] mt-2 leading-6">
                    Ward A / Room 12
                    <br />
                    Bed B-12
                  </h3>

                  <p className="text-[11px] font-medium text-[#6b7280] mt-4">
                    Patient Status
                  </p>

                  <span className="inline-flex bg-[#dcfce7] text-[#16a34a] text-[11px] font-bold px-3 py-[5px] rounded-lg mt-2">
                    Stable
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* MAIN TYPE */}
          {/* <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center gap-3">
            {["OPD", "IPD"].map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(tab);
                  setServiceTab(tab);
                }}
                className={`h-10 px-5 rounded-xl text-[13px] font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#5b5bd6] text-white"
                    : "bg-[#f4f6fb] text-[#374151]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}

          {/* SERVICE TABS */}
          <div className="px-5 pt-4 border-b border-[#edf1f7] mt-3">
            <div className="flex items-center gap-1 overflow-x-auto">
              {serviceTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setServiceTab(tab)}
                  className={`px-5 h-10 text-[13px] font-semibold border-b-2 transition-all duration-200 whitespace-nowrap ${
                    serviceTab === tab
                      ? "border-[#2563eb] text-[#2563eb] bg-[#eff6ff]"
                      : "border-transparent text-[#6b7280]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="px-5 py-4 border-b border-[#edf1f7] flex justify-end gap-3">
            <button
              onClick={() => setOpenServiceModal(true)}
              className="h-9 px-4 rounded-lg bg-[#eef2ff] text-[#5b5bd6] text-[13px] font-semibold flex items-center gap-2"
            >
              <FaPlus className="text-[11px]" />
              Add Service
            </button>

            <button
              onClick={() => setOpenPaymentModal(true)}
              className="h-9 px-4 rounded-lg bg-[#dcfce7] text-green-700 text-[13px] font-semibold flex items-center gap-2"
            >
              <FaMoneyBillWave className="text-[12px]" />
              Payment
            </button>
            <button
              className="h-9 px-4 rounded-lg bg-[#dcfce7] text-green-700 text-[13px] font-semibold flex items-center gap-2"
              onClick={() => setOpenBillSummary(true)}
            >
              <FaMoneyBillWave className="text-[12px]" />
              Bill Summary
            </button>
            <button
              className="h-9 px-4 rounded-lg bg-[#5b5bd6] text-white text-[13px] font-semibold flex items-center gap-2"
              onClick={() => setOpenGenerateBill(true)}
            >
              <FaFileInvoiceDollar className="text-[12px]" />
              Generate Bill
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <div className="min-w-[1200px]">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[190px_240px_130px_150px_60px_110px_90px_110px_120px] gap-4 px-5 py-4 bg-[#f8fafc] border-b border-[#edf1f7]">
                <h3 className="text-[12px] font-bold text-[#374151]">
                  Date & Time
                </h3>

                <h3 className="text-[12px] font-bold text-[#374151]">
                  Service
                </h3>

                <h3 className="text-[12px] font-bold text-[#374151]">Type</h3>

                <h3 className="text-[12px] font-bold text-[#374151]">
                  Category
                </h3>

                <h3 className="text-[12px] font-bold text-[#374151]">Qty</h3>

                <h3 className="text-[12px] font-bold text-[#374151]">Amount</h3>

                <h3 className="text-[12px] font-bold text-[#374151]">Tax</h3>

                <h3 className="text-[12px] font-bold text-[#374151]">
                  Discount
                </h3>

                <h3 className="text-[12px] font-bold text-[#374151]">
                  Final Amount
                </h3>
              </div>

              {/* TABLE CONTENT */}
              <div className="divide-y divide-[#edf1f7]">
                {filteredBillingData.length > 0 ? (
                  filteredBillingData.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[190px_240px_130px_150px_60px_110px_90px_110px_120px] gap-4 px-5 py-5 hover:bg-[#fafbff]"
                    >
                      <div>
                        <p className="text-[12px] text-[#374151] font-medium">
                          {item.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}
                        >
                          {item.icon}
                        </div>

                        <p className="text-[13px] font-semibold text-[#111827]">
                          {item.service}
                        </p>
                      </div>

                      <div>
                        <span
                          className={`inline-flex text-[11px] font-semibold px-3 py-2 rounded-xl ${item.color}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div>
                        <p className="text-[12px] text-[#374151]">
                          {item.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-[12px] font-semibold text-[#111827]">
                          {item.qty}
                        </p>
                      </div>

                      <div>
                        <p className="text-[13px] font-semibold text-[#111827]">
                          ₹ {item.charge}
                        </p>
                      </div>

                      <div>
                        <p className="text-[12px] font-semibold text-[#ef4444]">
                          {item.tax}
                        </p>
                      </div>

                      <div>
                        <p className="text-[13px] font-semibold text-[#16a34a]">
                          - ₹ {item.discount}
                        </p>
                      </div>

                      <div>
                        <p className="text-[14px] font-bold text-[#111827]">
                          ₹ {item.finalAmount}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-16">
                    <div className="text-center">
                      <h3 className="text-[15px] font-bold text-[#374151]">
                        No Records Found
                      </h3>

                      <p className="text-[12px] text-[#9ca3af] mt-2">
                        No billing available for {serviceTab}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* TOTAL */}
              <div className="px-5 py-5 border-t border-[#edf1f7] flex justify-end">
                <div className="w-[320px] bg-[#fafbff] border border-[#edf1f7] rounded-[20px] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#edf1f7]">
                    <p className="text-[12px] text-[#6b7280]">Total Amount</p>

                    <h3 className="text-[15px] font-bold text-[#111827]">
                      ₹ {totalAmount}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#edf1f7]">
                    <p className="text-[12px] text-[#6b7280]">Total Discount</p>

                    <h3 className="text-[15px] font-bold text-[#16a34a]">
                      - ₹ {totalDiscount}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between px-5 py-5 bg-[#eef2ff]">
                    <p className="text-[13px] font-bold text-[#111827]">
                      Final Amount
                    </p>

                    <h2 className="text-lg font-bold text-[#5b5bd6]">
                      ₹ {finalAmount}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADD SERVICE MODAL */}
          {openServiceModal && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
              <div className="bg-white rounded-[24px] w-full max-w-[720px] overflow-hidden">
                {/* HEADER */}
                <div className="px-6 py-4 border-b border-[#edf1f7] flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#111827]">
                      Add Service
                    </h2>

                    <p className="text-[12px] text-[#6b7280] mt-1">
                      Add patient billing service
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenServiceModal(false)}
                    className="w-9 h-9 rounded-xl bg-[#f3f4f6] text-[#6b7280] flex items-center justify-center"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* BODY */}
                <div className="p-6 grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Service Type
                    </label>

                    <select className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none">
                      <option>Pharmacy</option>
                      <option>Pathology</option>
                      <option>Radiology</option>
                      <option>Blood Bank</option>
                      <option>Ambulance</option>
                      <option>IPD</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Service Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter service..."
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Category
                    </label>

                    <input
                      type="text"
                      placeholder="Enter category..."
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Quantity
                    </label>

                    <input
                      type="number"
                      placeholder="Enter quantity..."
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Amount
                    </label>

                    <input
                      type="text"
                      placeholder="₹ 0.00"
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Gst / Tax
                    </label>

                    <input
                      type="text"
                      placeholder="10 %"
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Discount
                    </label>

                    <input
                      type="text"
                      placeholder="₹ 0.00"
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Notes
                    </label>

                    <textarea
                      rows={2}
                      placeholder="Enter notes..."
                      className="w-full rounded-lg border border-[#e5e7eb] mt-2 p-4 text-[13px] resize-none outline-none"
                    />
                  </div>
                </div>

                {/* FOOTER */}
                <div className="px-6 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
                  <button
                    onClick={() => setOpenServiceModal(false)}
                    className="h-9 px-4 rounded-lg border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
                  >
                    Cancel
                  </button>

                  <button className="h-9 px-5 rounded-lg bg-[#5b5bd6] text-white text-[13px] font-semibold">
                    Save Service
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PAYMENT MODAL */}
          {openPaymentModal && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
              <div className="bg-white rounded-[24px] w-full max-w-[650px] overflow-hidden">
                {/* HEADER */}
                <div className="px-6 py-4 border-b border-[#edf1f7] flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-[#111827]">
                      Add Payment
                    </h2>

                    <p className="text-[12px] text-[#6b7280] mt-1">
                      Enter patient payment details
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenPaymentModal(false)}
                    className="w-9 h-9 rounded-xl bg-[#f3f4f6] text-[#6b7280] flex items-center justify-center"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* BODY */}
                <div className="p-6 grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Payment Date
                    </label>

                    <input
                      type="date"
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Amount
                    </label>

                    <input
                      type="text"
                      placeholder="₹ 0.00"
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Payment Mode
                    </label>

                    <select className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none">
                      <option>Cash</option>
                      <option>Card</option>
                      <option>UPI</option>
                      <option>Insurance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Transaction ID
                    </label>

                    <input
                      type="text"
                      placeholder="Enter transaction id..."
                      className="w-full h-10 rounded-lg border border-[#e5e7eb] mt-2 px-4 text-[13px] outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[12px] font-semibold text-[#374151]">
                      Notes
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Enter notes..."
                      className="w-full rounded-lg border border-[#e5e7eb] mt-2 p-4 text-[13px] resize-none outline-none"
                    />
                  </div>
                </div>

                {/* FOOTER */}
                <div className="px-6 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
                  <button
                    onClick={() => setOpenPaymentModal(false)}
                    className="h-9 px-4 rounded-lg border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
                  >
                    Cancel
                  </button>

                  <button className="h-9 px-5 rounded-lg bg-[#16a34a] text-white text-[13px] font-semibold">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* BILL SUMMARY MODAL */}

          {openBillSummary && (
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">
              <div className="bg-white rounded-[24px] w-full max-w-[1000px] max-h-[95vh] overflow-hidden flex flex-col">
                {/* HEADER */}
                <div className="px-6 py-2 border-b border-[#edf1f7] flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-sans font-bold text-[#111827]">
                      Patient Bill Summary
                    </h2>

                    <p className="text-xs font-sans text-[#6b7280] mt-1">
                      Complete billing details & payment summary
                    </p>
                  </div>

                  <button
                    onClick={() => setOpenBillSummary(false)}
                    className="w-10 h-10 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#6b7280]"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* BODY */}
                <div className="flex-1 overflow-y-auto scrollHide p-6 bg-[#f8fafc] space-y-6">
                  {/* OPD */}
                  {/* <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        OPD Charges
                      </h2>
                    </div>

                    <table className="w-full">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          {[
                            "Service",
                            "Charge",
                            "Qty",
                            "Discount",
                            "Tax",
                            "Amount",
                          ].map((item, index) => (
                            <th
                              key={index}
                              className="text-left px-5 py-3 text-[12px] font-bold text-[#374151]"
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t border-[#edf1f7]">
                          <td className="px-5 py-4 text-[13px]">
                            OPD Consultation
                          </td>

                          <td className="px-5 py-4 text-[13px]">₹400</td>

                          <td className="px-5 py-4 text-[13px]">2</td>

                          <td className="px-5 py-4 text-[13px]">₹0</td>

                          <td className="px-5 py-4 text-[13px]">₹14</td>

                          <td className="px-5 py-4 text-[13px] font-bold">
                            ₹414
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div> */}

                  {/* IPD */}
                  <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        IPD Charges
                      </h2>
                    </div>

                    <table className="w-full">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          {[
                            "Service",
                            "Charge",
                            "Qty",
                            "Discount",
                            "Tax",
                            "Amount",
                          ].map((item, index) => (
                            <th
                              key={index}
                              className="text-left px-5 py-3 text-[12px] font-bold text-[#374151]"
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t border-[#edf1f7]">
                          <td className="px-5 py-4 text-[13px]">
                            Ward Charges
                          </td>

                          <td className="px-5 py-4 text-[13px]">₹5000</td>

                          <td className="px-5 py-4 text-[13px]">1 Day</td>

                          <td className="px-5 py-4 text-[13px]">₹0</td>

                          <td className="px-5 py-4 text-[13px]">₹900</td>

                          <td className="px-5 py-4 text-[13px] font-bold">
                            ₹5900
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* PHARMACY */}
                  <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        Pharmacy Bill
                      </h2>
                    </div>

                    <table className="w-full">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          {[
                            "Bill No",
                            "Charge",
                            "Qty",
                            "Discount",
                            "Tax",
                            "Amount",
                          ].map((item, index) => (
                            <th
                              key={index}
                              className="text-left px-5 py-3 text-[12px] font-bold text-[#374151]"
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t border-[#edf1f7]">
                          <td className="px-5 py-4 text-[13px]">PHAB257</td>

                          <td className="px-5 py-4 text-[13px]">₹322</td>

                          <td className="px-5 py-4 text-[13px]">1</td>

                          <td className="px-5 py-4 text-[13px]">₹5</td>

                          <td className="px-5 py-4 text-[13px]">₹24</td>

                          <td className="px-5 py-4 text-[13px] font-bold">
                            ₹346
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* PATHOLOGY */}
                  <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        Pathology Bill
                      </h2>
                    </div>

                    <table className="w-full">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          {[
                            "Bill No",
                            "Charge",
                            "Qty",
                            "Discount",
                            "Tax",
                            "Amount",
                          ].map((item, index) => (
                            <th
                              key={index}
                              className="text-left px-5 py-3 text-[12px] font-bold text-[#374151]"
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t border-[#edf1f7]">
                          <td className="px-5 py-4 text-[13px]">PATB382</td>

                          <td className="px-5 py-4 text-[13px]">₹3000</td>

                          <td className="px-5 py-4 text-[13px]">1</td>

                          <td className="px-5 py-4 text-[13px]">₹600</td>

                          <td className="px-5 py-4 text-[13px]">₹450</td>

                          <td className="px-5 py-4 text-[13px] font-bold">
                            ₹2850
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* TRANSACTIONS */}
                  <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        Transactions
                      </h2>
                    </div>

                    <table className="w-full">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          {[
                            "Transaction ID",
                            "Payment Date",
                            "Payment Mode",
                            "Amount",
                          ].map((item, index) => (
                            <th
                              key={index}
                              className="text-left px-5 py-3 text-[12px] font-bold text-[#374151]"
                            >
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          {
                            id: "TRID3782",
                            date: "11/05/2024 04:00 PM",
                            mode: "Online",
                            amount: "₹220",
                          },

                          {
                            id: "TRID3836",
                            date: "25/05/2024 11:19 AM",
                            mode: "Cash",
                            amount: "₹5900",
                          },
                        ].map((item, index) => (
                          <tr key={index} className="border-t border-[#edf1f7]">
                            <td className="px-5 py-4 text-[13px]">{item.id}</td>

                            <td className="px-5 py-4 text-[13px]">
                              {item.date}
                            </td>

                            <td className="px-5 py-4 text-[13px]">
                              {item.mode}
                            </td>

                            <td className="px-5 py-4 text-[13px] font-bold">
                              {item.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* AMOUNT SUMMARY */}
                  <div className="bg-white rounded-2xl border border-[#edf1f7] overflow-hidden">
                    <div className="px-5 py-4 border-b border-[#edf1f7]">
                      <h2 className="text-[18px] font-bold text-[#111827]">
                        Amount Summary
                      </h2>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] font-semibold text-[#374151]">
                          Grand Total
                        </p>

                        <h3 className="text-[15px] font-bold text-[#111827]">
                          ₹12025.20
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[14px] font-semibold text-[#374151]">
                          Amount Paid
                        </p>

                        <h3 className="text-[15px] font-bold text-[#16a34a]">
                          ₹6695.00
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[14px] font-semibold text-[#374151]">
                          Refund Amount
                        </p>

                        <h3 className="text-[15px] font-bold text-[#f59e0b]">
                          ₹0.00
                        </h3>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#edf1f7] pt-4">
                        <p className="text-[15px] font-bold text-[#111827]">
                          Balance Amount
                        </p>

                        <h2 className="text-[22px] font-bold text-[#ef4444]">
                          ₹5330.20
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="px-6 py-4 border-t border-[#edf1f7] flex justify-end gap-3">
                  <button
                    onClick={() => setOpenBillSummary(false)}
                    className="h-10 px-5 rounded-xl border border-[#e5e7eb] text-[#374151] text-[13px] font-semibold"
                  >
                    Close
                  </button>

                  <button className="h-10 px-5 rounded-xl bg-[#5b5bd6] text-white text-[13px] font-semibold">
                    Print Summary
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* GENERATE BILL MODAL */}

          {openGenerateBill && (
            <div className="fixed inset-0 bg-black/40 z-50 overflow-y-auto">
              <div className="min-h-screen flex items-start justify-center p-5 py-10">
                <div className="bg-white w-full max-w-[800px] rounded-[24px] shadow-2xl">
                  {/* HEADER */}
                  <div className="px-6 py-2 border-b border-[#e5e7eb] flex items-center justify-between sticky top-0 bg-white z-10 rounded-t-[24px]">
                    <div>
                      <h2 className="text-lg font-sans font-bold text-[#111827]">
                        Generate Bill
                      </h2>
                    </div>

                    <button
                      onClick={() => setOpenGenerateBill(false)}
                      className="w-10 h-10 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-[#6b7280]"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  {/* BODY */}
                  <div className="p-6 bg-[#f9fafb] max-h-[75vh] overflow-y-auto scrollHide">
                    <div className="bg-white border border-[#dbe4ea] rounded-[10px] overflow-hidden">
                      {/* TOP */}
                      <div className="p-5 border-b border-[#e5e7eb]">
                        <div className="flex items-start justify-between">
                          {/* LEFT */}

                          {/* RIGHT LOGO */}
                          <div className="w-40 h-40 flex items-center justify-center">
                            <img src={HospitalLogo} alt="Logo" />
                          </div>
                          <div>
                            <h1 className="text-xl font-sans font-bold text-[#374151]">
                              Global Hospital
                            </h1>

                            <div className="mt-1 space-y-1">
                              <p className="text-[13px] text-[#6b7280]">
                                21/2, 14th Cross, Sampige Road, Guindy
                              </p>

                              <p className="text-[13px] text-[#6b7280]">
                                Chennail - 600016, Tamilnadu, India
                              </p>

                              <p className="text-[13px] text-[#6b7280]">
                                Contact No: +91-80-2656-4466 | Emergency: 1066
                              </p>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                              <p className="text-[13px] text-[#3b82f6]">
                                info@apollohospitals.com
                              </p>

                              <p className="text-[13px] text-[#3b82f6]">
                                www.apollohospitals.com
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ADMISSION DETAILS */}
                      <div className="p-5">
                        <div className="border border-[#9dd6de] rounded-lg bg-[#eefbfd] overflow-hidden">
                          <div className="grid grid-cols-5">
                            {[
                              {
                                title: "Admission Number",
                                value: "ADM2025101401",
                              },
                              {
                                title: "Name",
                                value: "Ravi Kumar",
                              },
                              {
                                title: "Age/Gender",
                                value: "45 / Male",
                              },

                              {
                                title: "Mobile Number",
                                value: "9985698569",
                              },
                              {
                                title: "Admission Date",
                                value: "14-10-2025,",
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="px-4 py-4 border-r last:border-r-0 border-[#cde7ec] "
                              >
                                <p className="text-[12px] text-[#6b7280]">
                                  {item.title}
                                </p>

                                <h3 className="text-sm font-sans font-bold text-[#374151] mt-2">
                                  {item.value}
                                </h3>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* TABLE */}
                      <div className="px-5 pb-5">
                        <table className="w-full border border-[#d1d5db]">
                          <thead className="bg-[#f3f4f6]">
                            <tr>
                              {[
                                "S.No",
                                "Services",
                                "Price(₹)",
                                "Qty",
                                "Tax",
                                "Discount",
                                "Amount(₹)",
                              ].map((item, index) => (
                                <th
                                  key={index}
                                  className="border border-[#d1d5db] px-4 py-3 text-left text-[13px] font-bold text-[#374151]"
                                >
                                  {item}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {[
                              {
                                sno: "01",
                                service: "ECG",
                                price: "250",
                                qty: "1",
                                tax: "15%",
                                discount: "5%",
                                amount: "₹250",
                              },

                              {
                                sno: "02",
                                service: "Angiography",
                                price: "6000",
                                qty: "1",
                                tax: "18%",
                                discount: "10%",
                                amount: "₹6000",
                              },

                              {
                                sno: "03",
                                service: "Medication",
                                price: "3500",
                                qty: "1",
                                tax: "12%",
                                discount: "5%",
                                amount: "₹3500",
                              },

                              {
                                sno: "04",
                                service: "Room Charges (ICU)",
                                price: "1500",
                                qty: "4",
                                tax: "18%",
                                discount: "8%",
                                amount: "₹6000",
                              },

                              {
                                sno: "05",
                                service: "Nursing Charges",
                                price: "1000",
                                qty: "4",
                                tax: "10%",
                                discount: "3%",
                                amount: "₹4000",
                              },

                              {
                                sno: "06",
                                service: "Physiotherapy Session",
                                price: "1000",
                                qty: "4",
                                tax: "15%",
                                discount: "5%",
                                amount: "₹4000",
                              },
                            ].map((item, index) => (
                              <tr key={index}>
                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px]">
                                  {item.sno}
                                </td>

                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px]">
                                  {item.service}
                                </td>

                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px]">
                                  ₹{item.price}
                                </td>

                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px]">
                                  {item.qty}
                                </td>

                                {/* TAX */}
                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px] font-semibold text-[#dc2626]">
                                  {item.tax}
                                </td>

                                {/* DISCOUNT */}
                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px] font-semibold text-[#16a34a]">
                                  {item.discount}
                                </td>

                                <td className="border border-[#d1d5db] px-4 py-3 text-[13px] font-semibold">
                                  {item.amount}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* SUMMARY */}
                        <div className="flex justify-end">
                          <div className="w-[380px] border border-t-0 border-[#d1d5db]">
                            {[
                              {
                                label: "Subtotal",
                                value: "₹22,150",
                              },

                              {
                                label: "Tax (15%)",
                                value: "₹1,993.50",
                                red: true,
                              },

                              {
                                label: "Discount (5%)",
                                value: "-₹1,107.25",
                                green: true,
                              },

                              {
                                label: "Total Amount",
                                value: "₹20,030",
                                bold: true,
                              },
                              {
                                label: "Paid Amount",
                                value: "₹10,030",
                                bold: true,
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className={`flex items-center justify-between px-4 py-3 border-b border-[#d1d5db] ${
                                  item.green
                                    ? "bg-[#f0fdf4] text-[#16a34a]"
                                    : item.red
                                      ? "bg-[#fef2f2] text-[#dc2626]"
                                      : ""
                                }`}
                              >
                                <p className="text-[13px]">{item.label}</p>

                                <h3
                                  className={`text-[14px] ${
                                    item.bold ? "font-bold" : "font-semibold"
                                  }`}
                                >
                                  {item.value}
                                </h3>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* FOOTER */}
                        <div className="bg-[#0f9ca8] text-white flex items-center justify-between px-5 py-2 rounded-lg">
                          <p className="text-xs font-sans font-semibold">
                            Balance due in words: Ten Thousand Thirty Rupees
                            Only
                          </p>

                          <div className="flex items-center gap-5">
                            <span className="text-[14px] font-semibold">
                              Balance Due
                            </span>

                            <h2 className="text-sm font-sans font-bold">
                              ₹10,000
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="px-6 py-4 border-t border-[#e5e7eb] flex justify-end gap-3 bg-white rounded-b-[24px]">
                    <button
                      onClick={() => setOpenGenerateBill(false)}
                      className="h-8 px-5 rounded-md border border-[#d1d5db] text-[#374151] text-[13px] font-semibold"
                    >
                      Close
                    </button>

                    <button className="h-8 px-5 rounded-md bg-[#5b5bd6] text-white text-[13px] font-semibold">
                      Print Bill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Payments;
