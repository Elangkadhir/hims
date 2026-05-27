import React, { useState } from "react";
import {
  FaArrowLeft,
  FaClipboardList,
  FaCircle,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaExclamationTriangle,
  FaUndoAlt,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";

function PharmacyOrders({ onBack }) {
  const summaryCards = [
    {
      title: "Total Orders",
      value: "347",
      sub: "Today",
      icon: <FaClipboardList />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Dispensed",
      value: "198",
      sub: "57% completed",
      icon: <FaCheckCircle />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Processing",
      value: "60",
      sub: "Currently in pharmacy",
      icon: <FaSpinner />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending",
      value: "89",
      sub: "Waiting for issue",
      icon: <FaClock />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Urgent / STAT",
      value: "23",
      sub: "High priority",
      icon: <FaExclamationTriangle />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Returns",
      value: "11",
      sub: "Needs review",
      icon: <FaUndoAlt />,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  const [selectedType, setSelectedType] = useState("Total Orders");

  const orders = [
    {
      id: "PH-2041",
      patient: "Arjun Mehta",
      visit: "OPD",
      doctor: "Dr. Sharma",
      medicines: "4 items",
      ordered: "10/03/2026",
      status: "Dispensed",
      priority: "Normal",
      payment: "Paid",
      actions: ["View", "Dispense"],
    },
    {
      id: "PH-2042",
      patient: "Priya Nair",
      visit: "OPD",
      doctor: "Dr. Patel",
      medicines: "3 items",
      ordered: "12/03/2026",
      status: "Processing",
      priority: "Urgent",
      payment: "Pending",
      actions: ["View", "Partial"],
    },
    {
      id: "PH-2043",
      patient: "Sunita Reddy",
      visit: "IPD",
      doctor: "Dr. Kumar",
      medicines: "6 items",
      ordered: "14/03/2026",
      status: "Pending",
      priority: "Routine",
      payment: "Sponsor",
      actions: ["View", "Dispense"],
    },
    {
      id: "PH-2044",
      patient: "Hari Prasad",
      visit: "IPD",
      doctor: "Dr. Monica",
      medicines: "5 items",
      ordered: "18/03/2026",
      status: "Verifying",
      priority: "STAT",
      payment: "Bill Hold",
      actions: ["Hold", "Cancel"],
    },
    {
      id: "PH-2045",
      patient: "Kavya Krishnan",
      visit: "OPD",
      doctor: "Dr. Rao",
      medicines: "2 items",
      ordered: "20/03/2026",
      status: "Dispensed",
      priority: "Normal",
      payment: "Paid",
      actions: ["Slip", "Done"],
    },
  ];

  const filteredOrders =
    selectedType === "Total Orders"
      ? orders
      : orders.filter((order) => {
          if (selectedType === "Dispensed") return order.status === "Dispensed";
          if (selectedType === "Processing")
            return order.status === "Processing";
          if (selectedType === "Pending") return order.status === "Pending";
          if (selectedType === "Urgent / STAT")
            return order.priority === "Urgent" || order.priority === "STAT";
          if (selectedType === "Returns")
            return order.actions.includes("Cancel");
          return true;
        });

  const statusStyle = {
    Dispensed: "bg-emerald-50 text-emerald-600",
    Processing: "bg-blue-50 text-blue-600",
    Pending: "bg-orange-50 text-orange-600",
    Verifying: "bg-blue-50 text-blue-600",
  };

  const statusDot = {
    Dispensed: "text-emerald-500",
    Processing: "text-blue-500",
    Pending: "text-orange-500",
    Verifying: "text-blue-500",
  };

  const priorityStyle = {
    Normal: "bg-emerald-50 text-emerald-600",
    Routine: "bg-emerald-50 text-emerald-600",
    Urgent: "bg-orange-50 text-orange-600",
    STAT: "bg-orange-50 text-orange-600",
  };

  const priorityDot = {
    Normal: "text-emerald-500",
    Routine: "text-emerald-500",
    Urgent: "text-orange-500",
    STAT: "text-orange-500",
  };

  const actionStyle = {
    View: "bg-blue-50 text-blue-600",
    Dispense: "bg-emerald-50 text-emerald-600",
    Partial: "bg-orange-50 text-orange-600",
    Hold: "bg-orange-50 text-orange-600",
    Cancel: "bg-red-50 text-red-600",
    Slip: "bg-blue-50 text-blue-600",
    Done: "bg-emerald-50 text-emerald-600",
  };

  return (
    <Layout>
    <div className="mt-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-4 border-b bg-slate-50">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          <FaArrowLeft className="text-sm" />
        </button>

        <div>
          <h2 className="text-sm font-bold text-slate-800">Pharmacy Orders</h2>
          <p className="text-xs text-slate-500 mt-1">
            Pharmacy order details and status tracking
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {summaryCards.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(item.title)}
              className={`rounded-xl border p-3 text-left transition ${
                selectedType === item.title
                  ? "border-blue-300 bg-blue-50 shadow-sm"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`w-8 h-8 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center text-sm`}
                >
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.value}
                </h3>
              </div>

              <p className="text-xs font-bold text-slate-700 mt-3">
                {item.title}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">{item.sub}</p>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mt-5">
          <div className="px-6 py-3 flex items-start justify-between border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3">
                <FaClipboardList className="text-slate-800 text-sm" />
                <h2 className="text-base font-bold text-slate-900">
                  Pharmacy Order List
                </h2>
              </div>
              <p className="text-xs text-blue-700/80 mt-1">
                Showing: {selectedType}
              </p>
            </div>

            <span className="px-4 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold">
              {filteredOrders.length} Orders
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] tracking-widest text-blue-900/60 uppercase">
                  <th className="px-4 py-3 font-bold">Order ID</th>
                  <th className="px-4 py-3 font-bold">Patient</th>
                  <th className="px-4 py-3 font-bold">Visit</th>
                  <th className="px-4 py-3 font-bold">Doctor</th>
                  <th className="px-4 py-3 font-bold">Medicines</th>
                  <th className="px-4 py-3 font-bold">Ordered date</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                  <th className="px-4 py-3 font-bold">Priority</th>
                  <th className="px-4 py-3 font-bold">Payment</th>
                  <th className="px-4 py-3 font-bold">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-b-0 border-slate-100 text-sm text-slate-900"
                    >
                      <td className="px-4 py-4">{item.id}</td>
                      <td className="px-4 py-4">{item.patient}</td>
                      <td className="px-4 py-4">{item.visit}</td>
                      <td className="px-4 py-4">{item.doctor}</td>
                      <td className="px-4 py-4 font-semibold">
                        {item.medicines}
                      </td>
                      <td className="px-4 py-4">{item.ordered}</td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                            statusStyle[item.status]
                          }`}
                        >
                          <FaCircle
                            className={`text-[7px] ${statusDot[item.status]}`}
                          />
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                            priorityStyle[item.priority]
                          }`}
                        >
                          <FaCircle
                            className={`text-[7px] ${
                              priorityDot[item.priority]
                            }`}
                          />
                          {item.priority}
                        </span>
                      </td>

                      <td className="px-4 py-4">{item.payment}</td>
                      <td className="px-4 py-4">
                        <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-600">
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="10"
                      className="px-4 py-10 text-center text-sm text-slate-400"
                    >
                      No pharmacy orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default PharmacyOrders;
