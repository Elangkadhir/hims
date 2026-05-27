import React, { useState } from "react";
import {
  FaUserInjured,
  FaReceipt,
  FaCreditCard,
  FaHospital,
  FaMoneyBillWave,
  FaPlus,
  FaTrash,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import Layout from "../../Layout/Layout";

function Billing() {
  const [activeTab, setActiveTab] = useState("OP");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const opCharges = [
    {
      desc: "OP Registration Fee",
      category: "Registration",
      qty: 1,
      rate: 200,
      disc: 0,
      gst: "0%",
      total: "₹200",
    },
    {
      desc: "Cardiology New Consultation",
      category: "Consultation",
      qty: 1,
      rate: 1200,
      disc: 0,
      gst: "0%",
      total: "₹1,200",
    },
    {
      desc: "Vital Signs & Nurse Assessment",
      category: "Nursing",
      qty: 1,
      rate: 150,
      disc: 0,
      gst: "0%",
      total: "₹150",
    },
    {
      desc: "OP Case File / Records",
      category: "Admin",
      qty: 1,
      rate: 50,
      disc: 0,
      gst: "5%",
      total: "₹52.50",
    },
  ];

  const ipCharges = [
    {
      desc: "Bed Charges",
      category: "Ward",
      qty: 2,
      rate: 1500,
      disc: 0,
      gst: "0%",
      total: "₹3,000",
    },
    {
      desc: "Doctor Visit",
      category: "Consultation",
      qty: 2,
      rate: 800,
      disc: 0,
      gst: "0%",
      total: "₹1,600",
    },
    {
      desc: "Nursing Charges",
      category: "Nursing",
      qty: 2,
      rate: 500,
      disc: 0,
      gst: "0%",
      total: "₹1,000",
    },
    {
      desc: "Pharmacy / Consumables",
      category: "Pharmacy",
      qty: 1,
      rate: 2200,
      disc: 0,
      gst: "5%",
      total: "₹2,310",
    },
  ];

  const paymentOptions = [
    {
      name: "Cash",
      icon: <FaMoneyBillWave className="text-xl" />,
    },
    {
      name: "Card",
      icon: <FaCreditCard className="text-xl" />,
    },
    {
      name: "UPI",
      icon: <FaMobileAlt className="text-xl" />,
    },
    {
      name: "Insurance",
      icon: <FaShieldAlt className="text-xl" />,
    },
  ];

  const charges = activeTab === "OP" ? opCharges : ipCharges;
  const total = activeTab === "OP" ? "₹1,602.50" : "₹7,910.00";

  return (
    <Layout>
      <div className="min-h-screen font-sans p-3 bg-white rounded-md">
        <div className="flex items-center gap-2 mb-5">
          <FaArrowRight className="text-purple-600 text-sm" />
          <h2 className="text-xl font-bold text-slate-800">Billing</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-4">
          {/* Left */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b bg-slate-50">
                <div className="flex items-center gap-3">
                  <FaUserInjured className="text-blue-600" />
                  <h2 className="text-sm font-sans font-bold text-slate-900">
                    Patient Details
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    placeholder="Search UHID / Phone..."
                    className="h-9 w-64 rounded-lg border border-slate-200 px-3 text-xs font-sans outline-none"
                  />
                </div>
              </div>

              <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input label="Patient Name *" placeholder="Full Name" />
                <Input label="UHID / Patient ID *" placeholder="UHID-000000" />
                <Input label="Age *" placeholder="Years" />
                <Select
                  label="Gender *"
                  options={["Male", "Female", "Other"]}
                />
                <Input label="Mobile Number *" placeholder="10-digit Mobile" />
                <Input label="Email Address" placeholder="patient@email.com" />
                <div className="md:col-span-2">
                  <Input label="Address" placeholder="Street, City, Pincode" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b bg-slate-50">
                {["OP", "IP"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-lg text-xs font-sans font-bold border ${
                      activeTab === tab
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-600 border-slate-200"
                    }`}
                  >
                    {tab} Billing
                  </button>
                ))}
              </div>
              <div className="p-5 border-b bg-blue-50/40">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-600" />
                    <h3 className="text-sm font-sans font-bold text-slate-800">
                      {activeTab === "OP"
                        ? "Registration Details"
                        : "Admission Details"}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
                    {activeTab === "OP" ? "Out-Patient" : "In-Patient"}
                  </span>
                </div>

                {activeTab === "OP" ? (
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    <Input label="Visit Date" type="date" />
                    <Input label="Visit Time" type="time" />
                    <Select
                      label="Visit Type"
                      options={["New Patient", "Follow-up"]}
                    />
                    <Select
                      label="Department"
                      options={["Cardiology", "General Medicine"]}
                    />
                    <Input
                      label="Referred By"
                      placeholder="Referring doctor / self"
                    />
                    <Input label="Token No." placeholder="C-014" />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                    <Input label="Admission Date" type="date" />
                    <Input label="Admission Time" type="time" />
                    <Select
                      label="Admission Type"
                      options={["Planned", "Emergency"]}
                    />
                    <Select
                      label="Ward"
                      options={["Ward A", "ICU", "Emergency"]}
                    />
                    <Input label="Bed No." placeholder="301 - A" />
                    <Input label="Consultant" placeholder="Dr. Sharma" />
                  </div>
                )}
              </div>

              {/* Charge Breakdown */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaReceipt className="text-blue-600" />
                    <h3 className="text-sm font-sans font-bold text-slate-800">
                      {activeTab} Charge Breakdown
                    </h3>
                  </div>

                  <button className="px-3 py-1.5 rounded-lg border border-blue-200 text-blue-600 bg-blue-50 text-xs font-bold flex items-center gap-2">
                    <FaPlus />
                    Add Charge
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-xs font-sans">
                    <thead className="bg-slate-50 text-slate-500">
                      <tr>
                        <th className="px-4 py-3 text-left">#</th>
                        <th className="px-4 py-3 text-left">
                          Charge Description
                        </th>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Qty</th>
                        <th className="px-4 py-3 text-left">Rate (₹)</th>
                        <th className="px-4 py-3 text-left">Disc (₹)</th>
                        <th className="px-4 py-3 text-left">GST %</th>
                        <th className="px-4 py-3 text-left">Total (₹)</th>
                        <th className="px-4 py-3 text-center">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {charges.map((item, index) => (
                        <tr key={index} className="border-t border-slate-100">
                          <td className="px-4 py-3">{index + 1}</td>
                          <td className="px-4 py-3">
                            <input
                              defaultValue={item.desc}
                              className="h-8 w-56 border border-slate-200 rounded-md px-2 text-xs outline-none"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                              {item.category}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <input
                              defaultValue={item.qty}
                              className="h-8 w-14 border border-slate-200 rounded-md px-2 text-xs outline-none"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <input
                              defaultValue={item.rate}
                              className="h-8 w-20 border border-slate-200 rounded-md px-2 text-xs outline-none"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <input
                              defaultValue={item.disc}
                              className="h-8 w-16 border border-slate-200 rounded-md px-2 text-xs outline-none"
                            />
                          </td>
                          <td className="px-4 py-3">{item.gst}</td>
                          <td className="px-4 py-3 font-bold">{item.total}</td>
                          <td className="px-4 py-3 text-center">
                            <button className="text-red-500 bg-red-50 rounded-md p-2">
                              <FaTrash className="text-xs" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* <button className="w-full mt-4 border border-dashed border-blue-300 text-blue-600 rounded-xl py-2 text-xs font-sans font-bold">
                  + Add {activeTab} Charge
                </button> */}

                <div className="mt-3 flex items-center justify-between bg-blue-50 px-4 py-3 rounded-xl">
                  <p className="text-xs font-sans font-bold text-blue-900">
                    Total {activeTab} Visit Charges
                  </p>
                  <p className="text-xs font-sans font-bold text-blue-900">
                    {total}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Entry */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b bg-slate-50">
                <div className="flex items-center gap-2">
                  <FaHospital className="text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Service & Charges Entry
                  </h3>
                </div>

                <p className="text-xs font-sans text-slate-400">
                  All amounts in ₹
                </p>
              </div>

              <div className="p-5 overflow-x-auto">
                <table className="w-full text-xs font-sans">
                  <thead className="text-slate-500">
                    <tr>
                      <th className="px-3 py-2 text-left">#</th>
                      <th className="px-3 py-2 text-left">Service Code</th>
                      <th className="px-3 py-2 text-left">
                        Service Name / Category
                      </th>
                      <th className="px-3 py-2 text-left">Qty</th>
                      <th className="px-3 py-2 text-left">Unit Price (₹)</th>
                      <th className="px-3 py-2 text-left">Total (₹)</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {[1, 2].map((row) => (
                      <tr key={row}>
                        <td className="px-3 py-2">{row}</td>
                        <td className="px-3 py-2">
                          <input
                            placeholder="SVC-000"
                            className="h-10 w-28 border border-slate-200 rounded-lg px-3"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <select className="h-10 w-full border border-slate-200 rounded-lg px-3 bg-white">
                            <option>— Select or type above —</option>
                            <option>Lab Test</option>
                            <option>Pharmacy</option>
                            <option>Procedure</option>
                          </select>
                        </td>
                        <td className="px-3 py-2">
                          <input
                            defaultValue="1"
                            className="h-10 w-16 border border-slate-200 rounded-lg px-3 outline-none"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            placeholder="0.00"
                            className="h-10 w-28 border border-slate-200 rounded-lg px-3 outline-none"
                          />
                        </td>
                        <td className="px-3 py-2">
                          <input
                            placeholder="0.00"
                            className="h-10 w-28 border border-blue-200 bg-blue-50 rounded-lg px-3 font-bold outline-none"
                          />
                        </td>
                        <td className="px-3 py-2 text-slate-400">×</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="mt-5 px-3 text-xs font-sans font-semibold py-2 rounded-xl border border-dashed border-blue-300 text-blue-600 flex items-center gap-2">
                  <FaPlus />
                  Add Service
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b bg-slate-50 flex items-center gap-3">
                <FaReceipt className="text-slate-700" />
                <h3 className="text-base font-bold text-slate-900">
                  Billing Summary
                </h3>
              </div>

              <div className="p-5 space-y-4">
                <SummaryRow label="Subtotal" value={total} />
                <div>
                  <label className="text-xs font-sans text-slate-500 font-semibold">
                    Discount
                  </label>
                  <div className="flex gap-2 mt-2">
                    <button className="w-12 h-10 bg-blue-600 text-white rounded-lg font-bold">
                      %
                    </button>
                    <input
                      placeholder="0"
                      className="h-10 flex-1 border border-slate-200 rounded-lg px-3 text-right"
                    />
                  </div>
                </div>
                <SummaryRow label="Discount Amount" value="- ₹0.00" danger />
                <Select
                  label="GST Rate"
                  options={["No GST (Exempt)", "5%", "12%", "18%"]}
                />
                <SummaryRow label="GST Amount" value="₹0.00" />

                <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 flex justify-between items-center">
                  <p className="text-blue-700 font-bold text-xs font-sans">
                    NET PAYABLE
                  </p>
                  <p className="font-black text-blue-700 text-xs font-sans">
                    {total}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCreditCard className="text-emerald-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Payment
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-sans font-bold">
                  Pending
                </span>
              </div>

              <div className="p-5">
                {/* Payment Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {paymentOptions.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setPaymentMode(item.name)}
                      className={`h-20 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-sans font-bold transition ${
                        paymentMode === item.name
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Input label="Amount Payable *" value={total} readOnly />
                  <Input label="Paid Amount *" placeholder="0.00" />
                </div>
                {paymentMode === "Cash" && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                    <h3 className="font-bold text-emerald-700 mb-3">
                      Cash Payment
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <Input label="Cash Received" placeholder="Enter amount" />
                      <Input
                        label="Return Change"
                        placeholder="Auto calculate"
                      />
                    </div>
                  </div>
                )}

                {paymentMode === "Card" && (
                  <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
                    <h3 className="font-bold text-blue-700 mb-3">
                      Card Payment
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <Input label="Card Type" placeholder="Debit / Credit" />
                      <Input label="Last 4 Digits" placeholder="1234" />
                      <Input label="Transaction ID" placeholder="TXN001" />
                    </div>
                  </div>
                )}

                {paymentMode === "UPI" && (
                  <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
                    <h3 className="font-bold text-purple-700 mb-3">
                      UPI Payment
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <Input label="UPI ID" placeholder="patient@upi" />
                      <Input label="Reference No." placeholder="UPI001" />
                    </div>
                  </div>
                )}

                {paymentMode === "Insurance" && (
                  <div className="rounded-xl bg-orange-50 border border-orange-200 p-4">
                    <h3 className="font-bold text-orange-700 mb-3">
                      Insurance Payment
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        label="Insurance Provider"
                        placeholder="Star Health"
                      />
                      <Input label="Policy Number" placeholder="POL001" />
                      <Input label="Approved Amount" placeholder="5000" />
                      <Input label="Patient Share" placeholder="500" />
                    </div>
                  </div>
                )}

                <button className="w-full mt-5 h-10 rounded-xl bg-[#0CB8A1] text-white font-bold">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1 block">
      {label}
    </label>
    <input
      {...props}
      className="w-full h-10 rounded-lg border  border-slate-200 px-3 text-xs font-sans outline-none focus:border-blue-400 bg-white"
    />
  </div>
);

const Select = ({ label, options = [] }) => (
  <div>
    <label className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1 block">
      {label}
    </label>
    <select className="w-full h-10 rounded-lg border border-slate-200 px-3 text-xs font-sans outline-none focus:border-blue-400 bg-white">
      <option>— Select —</option>
      {options.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  </div>
);

const SummaryRow = ({ label, value, danger }) => (
  <div className="flex justify-between border-b border-dashed border-slate-200 pb-3">
    <p className="text-xs font-sans text-slate-500 font-semibold">{label}</p>
    <p
      className={`text-xs font-sans font-bold ${danger ? "text-red-600" : "text-slate-900"}`}
    >
      {value}
    </p>
  </div>
);

export default Billing;
