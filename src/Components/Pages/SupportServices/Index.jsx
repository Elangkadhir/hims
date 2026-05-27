import React from "react";
import {
  FaTint,
  FaRupeeSign,
  FaHeartbeat,
  FaFileAlt,
  FaWallet,
  FaClipboardCheck,
  FaUniversity,
  FaClock,
  FaChartBar,
} from "react-icons/fa";

const SupportServicesFinancial = () => {
  const bloodData = [
    { group: "A+", units: 48, status: "good", width: "80%" },
    { group: "A-", units: 8, status: "low", width: "20%" },
    { group: "B+", units: 35, status: "good", width: "65%" },
    { group: "B-", units: 3, status: "critical", width: "8%" },
    { group: "O+", units: 52, status: "good", width: "88%" },
    { group: "O-", units: 11, status: "low", width: "25%" },
    { group: "AB+", units: 22, status: "good", width: "50%" },
    { group: "AB-", units: 2, status: "critical", width: "6%" },
  ];

  const procedures = [
    {
      name: "Minor Surgeries",
      count: "8 done",
      color: "emerald",
    },
    {
      name: "Endoscopies",
      count: "3 in progress",
      color: "blue",
    },
    {
      name: "Dialysis Sessions",
      count: "12 done",
      color: "emerald",
    },
    {
      name: "Physiotherapy",
      count: "24 scheduled",
      color: "emerald",
    },
    {
      name: "Chemotherapy",
      count: "4 ongoing",
      color: "blue",
    },
  ];

  const getBarColor = (status) => {
    if (status === "good") return "bg-gradient-to-r from-emerald-400 to-blue-400";
    if (status === "low") return "bg-gradient-to-r from-yellow-400 to-orange-500";
    return "bg-gradient-to-r from-orange-400 to-red-500";
  };

  const getTextColor = (status) => {
    if (status === "good") return "text-emerald-600";
    if (status === "low") return "text-orange-600";
    return "text-red-500";
  };

  return (
    <div className="p-2">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xs tracking-[0.25em] font-semibold text-slate-500">
          SUPPORT SERVICES & FINANCIALS
        </h2>
        <div className="h-[1px] flex-1 bg-slate-200"></div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4">
        <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
          
          <div className="px-6 py-3 border-b border-slate-100 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <FaTint className="text-blue-900 text-sm" />
                <h2 className="font-bold text-sm font-sans">
                  Blood Bank Inventory
                </h2>
              </div>

              <p className="text-slate-500 mt-1 text-xs">
                Current stock levels · Last updated 08:45
              </p>
            </div>

            <button className="px-4 py-1 text-xs rounded-lg border border-blue-200 bg-blue-50 text-blue-600 font-semibold">
              Manage
            </button>
          </div>

          <div className="p-6">

            <div className="grid grid-cols-4 gap-3">
              {bloodData.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-4"
                >
                  <h2
                    className={`text-center text-base font-bold ${getTextColor(
                      item.status
                    )}`}
                  >
                    {item.group}
                  </h2>

                  <p className="text-center text-slate-500 text-xs mt-1">
                    {item.units} units
                  </p>

                  <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getBarColor(
                        item.status
                      )}`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-5 text-xs">
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                Adequate
              </div>

              <div className="flex items-center gap-2 text-orange-600">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                Low Stock
              </div>

              <div className="flex items-center gap-2 text-red-500">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                Critical — Request Needed
              </div>
            </div>

          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
          
          <div className="px-6 py-3 border-b border-slate-100 flex justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FaRupeeSign className="text-blue-900 text-sm" />
                <h2 className="font-bold text-sm font-sans">
                  Billing Summary
                </h2>
              </div>

              <p className="text-slate-500 mt-1 text-xs">
                Today · All departments
              </p>
            </div>

            <button className="px-4 py-1 text-xs h-7 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 font-semibold">
              Finance
            </button>
          </div>

          <div className="p-6 space-y-5">

            {[
              [FaWallet, "Total Collected", "₹4,82,600", "text-emerald-600", "bg-emerald-50"],
              [FaClipboardCheck, "Outstanding", "₹1,14,800", "text-red-500", "bg-red-50"],
              [FaUniversity, "Insurance Claims", "₹2,18,400", "text-blue-600", "bg-blue-50"],
              [FaClock, "Pending Bills", "38 bills", "text-orange-600", "bg-yellow-50"],
            ].map(([Icon, label, value, textColor, bgColor], i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-md border flex items-center justify-center ${bgColor}`}
                  >
                    <Icon className="text-blue-900 w-3 h-3"/>
                  </div>

                  <p className="text-xs font-semibold font-sans">{label}</p>
                </div>

                <p className={`font-bold text-xs font-sans ${textColor}`}>
                  {value}
                </p>
              </div>
            ))}

            <div className="border-t pt-4 mt-3">
              <div className="flex justify-between text-sm mb-2">
                <p className="text-slate-500 text-xs font-sans">Collection Rate</p>
                <p className="text-emerald-600 font-bold text-xs">81%</p>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[81%] h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-slate-700 text-sm" />
              <h2 className="font-bold text-sm font-sans">
                Clinical Procedures
              </h2>
            </div>

            <p className="text-slate-500 mt-1 text-xs">
              Today's procedures
            </p>
          </div>

          <div className="p-3">

            {procedures.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-slate-100"
              >
                <p className="text-xs font-semibold font-sans">
                  {item.name}
                </p>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-sans font-semibold ${
                    item.color === "emerald"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.count}
                </div>
              </div>
            ))}

            {/* <div className="mt-5 border-t pt-5">

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FaChartBar className="text-slate-700 text-sm" />
                  <h2 className="font-bold text-sm">
                    Daily Reports
                  </h2>
                </div>

                <button className="px-4 py-1 text-sm rounded-lg border border-blue-200 bg-blue-50 text-blue-600 font-semibold">
                  Generate
                </button>
              </div>

              <div className="flex gap-2 flex-wrap">
                {["Census", "MIS Report", "Lab TAT", "Finance"].map(
                  (item, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 text-xs rounded-lg border border-blue-200 bg-blue-50 text-blue-600"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

            </div> */}

          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportServicesFinancial;