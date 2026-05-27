import React, { useState } from "react";
import {
  FaArrowLeft,
  FaClipboardList,
  FaCircle,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaExclamationTriangle,
  FaVial,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";

function DiagnosisOrders({ onBack }) {
  const summaryCards = [
    {
      title: "Total Orders",
      value: "219",
      sub: "Today",
      icon: <FaClipboardList />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Completed",
      value: "104",
      sub: "47% completed",
      icon: <FaCheckCircle />,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Processing",
      value: "73",
      sub: "In lab process",
      icon: <FaSpinner />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending",
      value: "42",
      sub: "Sample waiting",
      icon: <FaClock />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Urgent / STAT",
      value: "18",
      sub: "High priority",
      icon: <FaExclamationTriangle />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Sample Collected",
      value: "86",
      sub: "Ready for testing",
      icon: <FaVial />,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  const [selectedType, setSelectedType] = useState("Total Orders");

  const orders = [
    {
      id: "DG-3011",
      patient: "Arjun Mehta",
      visit: "OPD",
      doctor: "Dr. Sharma",
      test: "CBC, Lipid Profile",
      sample: "Blood",
      ordered: "09:15",
      status: "Completed",
      priority: "Normal",
      payment: "Paid",
      actions: ["View", "Report"],
    },
    {
      id: "DG-3012",
      patient: "Priya Nair",
      visit: "OPD",
      doctor: "Dr. Patel",
      test: "Thyroid Profile",
      sample: "Blood",
      ordered: "09:45",
      status: "Processing",
      priority: "Urgent",
      payment: "Pending",
      actions: ["View", "Track"],
    },
    {
      id: "DG-3013",
      patient: "Sunita Reddy",
      visit: "IPD",
      doctor: "Dr. Kumar",
      test: "Urine Routine",
      sample: "Urine",
      ordered: "10:20",
      status: "Pending",
      priority: "Routine",
      payment: "Sponsor",
      actions: ["Collect", "Cancel"],
    },
    {
      id: "DG-3014",
      patient: "Hari Prasad",
      visit: "Emergency",
      doctor: "Dr. Monica",
      test: "CT Brain",
      sample: "Radiology",
      ordered: "10:55",
      status: "Sample Collected",
      priority: "STAT",
      payment: "Bill Hold",
      actions: ["View", "Process"],
    },
    {
      id: "DG-3015",
      patient: "Kavya Krishnan",
      visit: "OPD",
      doctor: "Dr. Rao",
      test: "X-Ray Chest",
      sample: "Radiology",
      ordered: "11:30",
      status: "Completed",
      priority: "Normal",
      payment: "Paid",
      actions: ["Slip", "Report"],
    },
  ];

  const filteredOrders =
    selectedType === "Total Orders"
      ? orders
      : orders.filter((order) => {
          if (selectedType === "Completed") return order.status === "Completed";
          if (selectedType === "Processing")
            return order.status === "Processing";
          if (selectedType === "Pending") return order.status === "Pending";
          if (selectedType === "Sample Collected")
            return order.status === "Sample Collected";
          if (selectedType === "Urgent / STAT")
            return order.priority === "Urgent" || order.priority === "STAT";
          return true;
        });

  const statusStyle = {
    Completed: "bg-emerald-50 text-emerald-600",
    Processing: "bg-blue-50 text-blue-600",
    Pending: "bg-orange-50 text-orange-600",
    "Sample Collected": "bg-violet-50 text-violet-600",
  };

  const statusDot = {
    Completed: "text-emerald-500",
    Processing: "text-blue-500",
    Pending: "text-orange-500",
    "Sample Collected": "text-violet-500",
  };

  const priorityStyle = {
    Normal: "bg-emerald-50 text-emerald-600",
    Routine: "bg-emerald-50 text-emerald-600",
    Urgent: "bg-orange-50 text-orange-600",
    STAT: "bg-red-50 text-red-600",
  };

  const priorityDot = {
    Normal: "text-emerald-500",
    Routine: "text-emerald-500",
    Urgent: "text-orange-500",
    STAT: "text-red-500",
  };

  const actionStyle = {
    View: "bg-blue-50 text-blue-600",
    Report: "bg-emerald-50 text-emerald-600",
    Track: "bg-blue-50 text-blue-600",
    Collect: "bg-violet-50 text-violet-600",
    Cancel: "bg-red-50 text-red-600",
    Process: "bg-orange-50 text-orange-600",
    Slip: "bg-blue-50 text-blue-600",
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
          <h2 className="text-sm font-bold text-slate-800">Diagnosis Orders</h2>
          <p className="text-xs text-slate-500 mt-1">
            Diagnostic order details and status tracking
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
                  Diagnosis Order List
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
                  <th className="px-4 py-3 font-bold">Test Name</th>
                  <th className="px-4 py-3 font-bold">Sample</th>
                  <th className="px-4 py-3 font-bold">Ordered</th>
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
                      <td className="px-4 py-4 font-semibold">{item.test}</td>
                      <td className="px-4 py-4">{item.sample}</td>
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
                      colSpan="11"
                      className="px-4 py-10 text-center text-sm text-slate-400"
                    >
                      No diagnosis orders found
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

export default DiagnosisOrders;
