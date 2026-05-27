import React, { useState } from "react";
import {
  FiSearch,
  FiEdit2,
  FiPlus,
  FiTrash2,
  FiEye,
} from "react-icons/fi";

import {
  FaArrowRight,
  FaUserMd,
  FaUserNurse,
  FaFlask,
  FaXRay,
  FaBed,
  FaProcedures,
} from "react-icons/fa";

import Layout from "../../Layout/Layout";

const tabs = [
  {
    name: "Doctor Fees",
    icon: <FaUserMd />,
  },

  {
    name: "Nursing Charges",
    icon: <FaUserNurse />,
  },

  {
    name: "Lab Tests",
    icon: <FaFlask />,
  },

  {
    name: "Radiology",
    icon: <FaXRay />,
  },

  {
    name: "Bed Charges",
    icon: <FaBed />,
  },

  {
    name: "Procedures",
    icon: <FaProcedures />,
  },
];

const feeData = {
  "Doctor Fees": [
    {
      id: "DOC-1001",
      name: "General Physician Consultation",
      department: "General Medicine",
      fee: "₹500",
      gst: "0%",
      type: "Consultation",
      status: "Active",
    },

    {
      id: "DOC-1002",
      name: "Cardiologist Consultation",
      department: "Cardiology",
      fee: "₹1200",
      gst: "0%",
      type: "Specialist",
      status: "Active",
    },

    {
      id: "DOC-1003",
      name: "Orthopedic Consultation",
      department: "Orthopedics",
      fee: "₹900",
      gst: "0%",
      type: "OP",
      status: "Inactive",
    },
  ],

  "Nursing Charges": [
    {
      id: "NUR-1001",
      name: "Injection Charges",
      department: "Nursing",
      fee: "₹200",
      gst: "5%",
      type: "Ward",
      status: "Active",
    },

    {
      id: "NUR-1002",
      name: "Dressing Charges",
      department: "Emergency",
      fee: "₹350",
      gst: "5%",
      type: "Emergency",
      status: "Active",
    },
  ],

  "Lab Tests": [
    {
      id: "LAB-1001",
      name: "CBC Test",
      department: "Laboratory",
      fee: "₹350",
      gst: "5%",
      type: "Blood Test",
      status: "Active",
    },

    {
      id: "LAB-1002",
      name: "Thyroid Profile",
      department: "Laboratory",
      fee: "₹1200",
      gst: "5%",
      type: "Hormone Test",
      status: "Active",
    },
  ],

  Radiology: [
    {
      id: "RAD-1001",
      name: "MRI Brain",
      department: "Radiology",
      fee: "₹4500",
      gst: "18%",
      type: "Scan",
      status: "Inactive",
    },

    {
      id: "RAD-1002",
      name: "CT Abdomen",
      department: "Radiology",
      fee: "₹3800",
      gst: "18%",
      type: "CT Scan",
      status: "Active",
    },
  ],

  "Bed Charges": [
    {
      id: "BED-1001",
      name: "ICU Bed",
      department: "IP",
      fee: "₹5000",
      gst: "5%",
      type: "Daily",
      status: "Active",
    },

    {
      id: "BED-1002",
      name: "General Ward",
      department: "Ward",
      fee: "₹1500",
      gst: "5%",
      type: "Daily",
      status: "Active",
    },
  ],

  Procedures: [
    {
      id: "PRO-1001",
      name: "ECG",
      department: "Cardiology",
      fee: "₹500",
      gst: "5%",
      type: "Procedure",
      status: "Active",
    },

    {
      id: "PRO-1002",
      name: "Endoscopy",
      department: "Gastro",
      fee: "₹3500",
      gst: "12%",
      type: "Procedure",
      status: "Inactive",
    },
  ],
};

function ServiceMaster() {
  const [activeTab, setActiveTab] = useState("Doctor Fees");

  const [openAddService, setOpenAddService] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 p-4 font-sans">

        {/* HEADER */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">

          <div className="flex items-center justify-between mb-5">

            <div className="flex items-center gap-2">
              <FaArrowRight className="text-cyan-600 text-sm" />

              <h2 className="text-xl font-bold text-slate-800">
                Service & Fee Management
              </h2>
            </div>

            <button
              onClick={() => setOpenAddService(true)}
              className="bg-[#08B8A8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <FiPlus className="text-xs" />
              Add Service
            </button>

          </div>

          {/* TABS */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 mb-5">

            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition ${
                  activeTab === tab.name
                    ? "bg-[#08B8A8] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.icon}

                {tab.name}
              </button>
            ))}

          </div>

          {/* SEARCH */}
          <div className="flex items-end gap-4 mb-4">

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">

                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

                <input
                  type="text"
                  placeholder={`Search ${activeTab}`}
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-cyan-400"
                />

              </div>
            </div>

            <div className="w-40 ml-auto">
              <select className="w-full h-10 cursor-pointer rounded-lg border border-slate-200 px-3 text-xs outline-none bg-white text-slate-600">

                <option>All Status</option>

                <option>Active</option>

                <option>Inactive</option>

              </select>
            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-lg border border-slate-200">

            <table className="w-full text-left">

              <thead>
                <tr className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] text-white text-sm">

                  <th className="px-5 py-3 font-semibold">
                    Service ID
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Service Name
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Department
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Type
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Fee
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    GST
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Status
                  </th>

                  <th className="px-5 py-3 font-semibold text-center">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {feeData[activeTab].map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700"
                  >

                    <td className="px-5 py-3 font-medium">
                      {item.id}
                    </td>

                    <td className="px-5 py-3">

                      <div>
                        <p className="font-semibold text-slate-800">
                          {item.name}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          Service Configuration
                        </p>
                      </div>

                    </td>

                    <td className="px-5 py-3">
                      {item.department}
                    </td>

                    <td className="px-5 py-3">

                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-600">
                        {item.type}
                      </span>

                    </td>

                    <td className="px-5 py-3 font-bold text-emerald-600">
                      {item.fee}
                    </td>

                    <td className="px-5 py-3">
                      {item.gst}
                    </td>

                    <td className="px-5 py-3">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="px-5 py-3">

                      <div className="flex justify-center gap-2">

                        <button className="px-3 py-1.5 rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-600 text-xs font-bold flex items-center gap-2">
                          <FiEye className="text-xs" />
                          View
                        </button>

                        <button className="px-3 py-1.5 rounded-lg border border-violet-200 bg-violet-50 text-violet-600 text-xs font-bold flex items-center gap-2">
                          <FiEdit2 className="text-xs" />
                          Edit
                        </button>

                        <button className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-600 text-xs font-bold flex items-center gap-2">
                          <FiTrash2 className="text-xs" />
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        {/* ADD SERVICE MODAL */}
        {openAddService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div className="w-full max-w-5xl rounded-2xl bg-white shadow-xl overflow-hidden">

              {/* HEADER */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] px-5 py-3">

                <h2 className="text-lg font-bold text-white">
                  Add New Service
                </h2>

                <button
                  onClick={() => setOpenAddService(false)}
                  className="text-white text-xl"
                >
                  ×
                </button>

              </div>

              {/* BODY */}
              <div className="max-h-[85vh] overflow-y-auto p-5 space-y-6">

                {/* SERVICE DETAILS */}
                <div>

                  <h3 className="text-sm font-bold text-slate-800 mb-4">
                    Service Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <input
                      type="text"
                      placeholder="Service Name"
                      className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
                    />

                    <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">

                      <option>Select Department</option>

                      <option>Cardiology</option>

                      <option>Radiology</option>

                      <option>Laboratory</option>

                      <option>ICU</option>

                    </select>

                    <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">

                      <option>Select Service Type</option>

                      <option>Consultation</option>

                      <option>Procedure</option>

                      <option>Lab Test</option>

                      <option>Scan</option>

                    </select>

                    <input
                      type="number"
                      placeholder="Fee Amount"
                      className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
                    />

                    <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">

                      <option>Select GST</option>

                      <option>0%</option>

                      <option>5%</option>

                      <option>12%</option>

                      <option>18%</option>

                    </select>

                    <select className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-cyan-400">

                      <option>Status</option>

                      <option>Active</option>

                      <option>Inactive</option>

                    </select>

                  </div>

                </div>

                {/* CONFIGURATION */}
                <div className="border-t pt-5">

                  <h3 className="text-sm font-bold text-slate-800 mb-4">
                    Billing Configuration
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <input
                      type="text"
                      placeholder="Service Code"
                      className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
                    />

                    <input
                      type="text"
                      placeholder="Duration"
                      className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
                    />

                    <input
                      type="number"
                      placeholder="Discount Percentage"
                      className="h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-cyan-400"
                    />

                  </div>

                </div>

              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-3 border-t bg-slate-50 px-5 py-4">

                <button
                  onClick={() => setOpenAddService(false)}
                  className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-600"
                >
                  Cancel
                </button>

                <button className="rounded-lg bg-[#08B8A8] px-5 py-2 text-sm font-bold text-white">
                  Save Service
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </Layout>
  );
}

export default ServiceMaster;