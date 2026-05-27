import React from "react";
import {
  FaHeartbeat,
  FaTasks,
  FaPills,
  FaBed,
  FaExclamationTriangle,
  FaSyringe,
  FaTint,
  FaClipboardList,
  FaUserNurse,
  FaFlask,
} from "react-icons/fa";

function Summary() {
  return (
    <div className="space-y-3">
      {/* TOP STATUS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
        {[
          {
            title: "Current Status",
            value: "Stable",
            icon: <FaHeartbeat />,
            bg: "bg-emerald-50",
            text: "text-emerald-600",
          },

          {
            title: "Days Admitted",
            value: "Day 4",
            icon: <FaBed />,
            bg: "bg-blue-50",
            text: "text-blue-600",
          },

          {
            title: "Pending Tasks",
            value: "3 Tasks",
            icon: <FaTasks />,
            bg: "bg-orange-50",
            text: "text-orange-600",
          },

          {
            title: "Medications",
            value: "12 Meds",
            icon: <FaPills />,
            bg: "bg-purple-50",
            text: "text-purple-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-lg p-2.5 border border-purple-100 shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-500 font-medium">
                  {item.title}
                </p>

                <h2 className={`text-sm font-bold mt-1 ${item.text}`}>
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${item.text} bg-white`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VITALS */}
      <div className="bg-white rounded-xl border border-slate-200 p-3">
        <div className="flex items-center gap-2 mb-3">
          <FaHeartbeat className="text-red-500 text-sm" />

          <h2 className="text-sm font-bold text-slate-800">
            Latest Vitals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-2">
          {[
            {
              label: "BP",
              value: "120/80",
              color: "text-blue-600",
            },

            {
              label: "Pulse",
              value: "82 bpm",
              color: "text-pink-600",
            },

            {
              label: "Temp",
              value: "98.6°F",
              color: "text-orange-600",
            },

            {
              label: "SPO2",
              value: "99%",
              color: "text-emerald-600",
            },

            {
              label: "RR",
              value: "20/min",
              color: "text-cyan-600",
            },

            {
              label: "Sugar",
              value: "110 mg",
              color: "text-purple-600",
            },

            {
              label: "Weight",
              value: "72 Kg",
              color: "text-rose-600",
            },

            {
              label: "Height",
              value: "175 cm",
              color: "text-indigo-600",
            },

            {
              label: "BMI",
              value: "23.5",
              color: "text-amber-600",
            },

            {
              label: "Heart Rate",
              value: "78 bpm",
              color: "text-red-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg border border-purple-100 p-2 text-center hover:shadow-sm transition-all duration-200"
            >
              <p className="text-[10px] text-slate-500 font-medium">
                {item.label}
              </p>

              <h3 className={`text-xs font-bold mt-1 ${item.color}`}>
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* ALERTS + MEDICATION + TASKS + I/O */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* ALERTS */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaExclamationTriangle className="text-red-500 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Alerts
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                title: "Fall Risk",
                color: "bg-red-50 text-red-600",
              },

              {
                title: "Penicillin Allergy",
                color: "bg-yellow-50 text-yellow-600",
              },

              {
                title: "Oxygen Support",
                color: "bg-blue-50 text-blue-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-lg text-[11px] font-semibold ${item.color}`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* MEDICATION */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaPills className="text-purple-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Medications
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Morning",
                value: "5/5",
                color: "bg-emerald-500",
              },

              {
                title: "Afternoon",
                value: "2 Pending",
                color: "bg-orange-500",
              },

              {
                title: "Night",
                value: "3 Meds",
                color: "bg-blue-500",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[11px] font-medium text-slate-600">
                    {item.title}
                  </p>

                  <span className="text-[11px] font-bold text-slate-800">
                    {item.value}
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TASKS */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaClipboardList className="text-orange-500 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Pending Tasks
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                task: "Injection Due",
                priority: "High",
                color: "bg-red-50 text-red-600",
              },

              {
                task: "Vitals Check",
                priority: "Medium",
                color: "bg-yellow-50 text-yellow-600",
              },

              {
                task: "Lab Collection",
                priority: "Low",
                color: "bg-blue-50 text-blue-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
              >
                <h3 className="text-[11px] font-semibold text-slate-700">
                  {item.task}
                </h3>

                <span
                  className={`px-2 py-1 rounded-full text-[10px] font-bold ${item.color}`}
                >
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* I/O */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaTint className="text-cyan-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              I/O Summary
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-cyan-50 rounded-lg p-2">
              <h3 className="text-[11px] font-semibold text-cyan-700 mb-2">
                Intake
              </h3>

              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between">
                  <span>Oral</span>
                  <span className="font-bold">1200ml</span>
                </div>

                <div className="flex justify-between">
                  <span>IV</span>
                  <span className="font-bold">800ml</span>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-2">
              <h3 className="text-[11px] font-semibold text-rose-700 mb-2">
                Output
              </h3>

              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between">
                  <span>Urine</span>
                  <span className="font-bold">900ml</span>
                </div>

                <div className="flex justify-between">
                  <span>Drain</span>
                  <span className="font-bold">150ml</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOCTOR + SHIFT + ACTIVITY + LAB */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* DOCTOR */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaSyringe className="text-blue-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Doctor Orders
            </h2>
          </div>

          <div className="space-y-2">
            {[
              "Monitor BP",
              "IV Fluids",
              "Nebulization",
              "Bed Rest",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />

                <p className="text-[11px] font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SHIFT */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaUserNurse className="text-pink-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Shift Notes
            </h2>
          </div>

          <div className="space-y-2">
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-[10px] text-slate-500 mb-1">
                Previous Shift
              </p>

              <p className="text-[11px] font-medium text-slate-700 leading-5">
                Patient stable. SPO2 monitoring continued.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-[10px] text-slate-500 mb-1">
                Follow-up
              </p>

              <p className="text-[11px] font-medium text-slate-700 leading-5">
                Inform doctor after lab result.
              </p>
            </div>
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaClipboardList className="text-indigo-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Activities
            </h2>
          </div>

          <div className="space-y-3">
            {[
              "10:30 AM - Medication",
              "11:00 AM - Vitals",
              "12:15 PM - Doctor Visit",
              "01:00 PM - Lab Sample",
            ].map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5" />

                <p className="text-[11px] font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LAB */}
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <div className="flex items-center gap-2 mb-3">
            <FaFlask className="text-emerald-600 text-sm" />

            <h2 className="text-sm font-bold text-slate-800">
              Lab Status
            </h2>
          </div>

          <div className="space-y-2">
            {[
              {
                title: "CBC",
                status: "Completed",
                color: "bg-emerald-50 text-emerald-600",
              },

              {
                title: "X-Ray",
                status: "Pending",
                color: "bg-orange-50 text-orange-600",
              },

              {
                title: "MRI",
                status: "Scheduled",
                color: "bg-blue-50 text-blue-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
              >
                <h3 className="text-[11px] font-semibold text-slate-700">
                  {item.title}
                </h3>

                <span
                  className={`px-2 py-1 rounded-full text-[10px] font-bold ${item.color}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;