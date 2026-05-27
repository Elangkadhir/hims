import React from "react";
import {
  FaUserMd,
  FaUserNurse,
  FaPills,
  FaFlask,
  FaProcedures,
  FaHospital,
  FaCheckCircle,
} from "react-icons/fa";

function TreatmentHistory() {
  const timelineData = [
    {
      date: "15 Jan 2026",
      type: "Admission",
      icon: <FaHospital />,
      title: "Patient Admitted",
      description:
        "Patient admitted to Cardiology ward for chest pain evaluation.",
      time: "08:00 AM",
      status: "Completed",
      color: "bg-blue-100 text-blue-600",
      iconBg: "bg-blue-500",
    },

    {
      date: "15 Jan 2026",
      type: "Doctor",
      icon: <FaUserMd />,
      title: "Doctor Consultation Completed",
      description:
        "Dr. Sharma reviewed patient condition and advised ECG & Troponin test.",
      time: "09:30 AM",
      status: "Completed",
      color: "bg-indigo-100 text-indigo-600",
      iconBg: "bg-indigo-500",
    },

    {
      date: "15 Jan 2026",
      type: "Lab",
      icon: <FaFlask />,
      title: "CBC & Troponin Collected",
      description:
        "Blood sample collected and sent to pathology laboratory.",
      time: "10:15 AM",
      status: "Processing",
      color: "bg-purple-100 text-purple-600",
      iconBg: "bg-purple-500",
    },

    {
      date: "15 Jan 2026",
      type: "Medication",
      icon: <FaPills />,
      title: "Medication Administered",
      description:
        "Paracetamol 650mg and IV fluids administered successfully.",
      time: "12:00 PM",
      status: "Given",
      color: "bg-orange-100 text-orange-600",
      iconBg: "bg-orange-500",
    },

    {
      date: "15 Jan 2026",
      type: "Nursing",
      icon: <FaUserNurse />,
      title: "Vitals Monitoring",
      description:
        "Vitals stable. Oxygen saturation monitored continuously.",
      time: "02:30 PM",
      status: "Stable",
      color: "bg-green-100 text-green-600",
      iconBg: "bg-green-500",
    },

    {
      date: "15 Jan 2026",
      type: "Operation",
      icon: <FaProcedures />,
      title: "ECG Procedure Completed",
      description:
        "ECG completed and report forwarded to cardiologist.",
      time: "04:15 PM",
      status: "Completed",
      color: "bg-red-100 text-red-600",
      iconBg: "bg-red-500",
    },
  ];

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[22px] overflow-hidden">
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Treatment History
        </h2>

        <p className="text-[12px] text-[#6b7280] mt-1">
          Complete patient activity & clinical history
        </p>
      </div>

      {/* TIMELINE */}
      <div className="p-6">
        <div className="relative">
          {/* LINE */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-[#dbe4ff]" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* DATE */}
                <div className="mb-3">
                  <span className="bg-[#5b5bd6] text-white text-[11px] font-semibold px-3 py-2 rounded-lg shadow-sm">
                    {item.date}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className={`absolute left-[2px] top-[42px] w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* CARD */}
                <div className="bg-[#fafbff] border border-[#e9edf5] rounded-[20px] overflow-hidden hover:shadow-md transition-all duration-200">
                  {/* TOP */}
                  <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-[15px] font-bold text-[#111827]">
                          {item.title}
                        </h3>

                        <span
                          className={`text-[11px] font-semibold px-3 py-1 rounded-md ${item.color}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#6b7280] mt-2">
                        {item.time}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-[#edf1f7] flex items-center justify-center text-[#5b5bd6]">
                      <FaCheckCircle />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <p className="text-[13px] leading-6 text-[#4b5563]">
                      {item.description}
                    </p>

                    {/* STATUS */}
                    <div className="mt-5">
                      <span
                        className={`inline-flex text-[11px] font-semibold px-3 py-2 rounded-xl ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* END DOT */}
          <div className="absolute left-[12px] bottom-0 w-5 h-5 rounded-full border-[4px] border-[#dbe4ff] bg-white" />
        </div>
      </div>
    </div>
  );
}

export default TreatmentHistory;