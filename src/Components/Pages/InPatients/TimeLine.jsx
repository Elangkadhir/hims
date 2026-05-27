import React from "react";
import {
  FaUserMd,
  FaUserNurse,
  FaPills,
  FaFlask,
  FaProcedures,
  FaHeartbeat,
  FaClock,
} from "react-icons/fa";

function Timeline() {
  const timelineData = [
    {
      time: "08:00 AM",
      type: "Vitals",
      icon: <FaHeartbeat />,
      title: "Morning Vitals Check",
      description:
        "Blood pressure, temperature and oxygen saturation monitoring scheduled.",
      assigned: "Nurse Kavya",
      status: "Completed",
      color: "bg-green-100 text-green-600",
      iconBg: "bg-green-500",
    },

    {
      time: "09:30 AM",
      type: "Doctor Review",
      icon: <FaUserMd />,
      title: "Cardiology Consultation",
      description:
        "Patient review and treatment discussion by cardiology consultant.",
      assigned: "Dr. Sharma",
      status: "In Progress",
      color: "bg-blue-100 text-blue-600",
      iconBg: "bg-blue-500",
    },

    {
      time: "10:30 AM",
      type: "Lab",
      icon: <FaFlask />,
      title: "CBC Blood Collection",
      description: "Blood sample collection scheduled for pathology testing.",
      assigned: "Lab Technician",
      status: "Upcoming",
      color: "bg-purple-100 text-purple-600",
      iconBg: "bg-purple-500",
    },

    {
      time: "12:00 PM",
      type: "Medication",
      icon: <FaPills />,
      title: "Paracetamol 650mg",
      description: "Oral medication scheduled after food intake.",
      assigned: "Nurse Priya",
      status: "Upcoming",
      color: "bg-orange-100 text-orange-600",
      iconBg: "bg-orange-500",
    },

    {
      time: "02:00 PM",
      type: "Procedure",
      icon: <FaProcedures />,
      title: "ECG Procedure",
      description: "ECG monitoring scheduled in cardiology observation room.",
      assigned: "Cardiology Team",
      status: "Upcoming",
      color: "bg-red-100 text-red-600",
      iconBg: "bg-red-500",
    },

    {
      time: "05:00 PM",
      type: "Nursing",
      icon: <FaUserNurse />,
      title: "Evening Nursing Assessment",
      description: "Patient reassessment and medication follow-up.",
      assigned: "Nurse Asha",
      status: "Upcoming",
      color: "bg-cyan-100 text-cyan-600",
      iconBg: "bg-cyan-500",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";

      case "In Progress":
        return "bg-blue-100 text-blue-600";

      case "Upcoming":
        return "bg-orange-100 text-orange-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white border border-[#e9edf5] rounded-[24px] overflow-hidden">

      {/* HEADER */}
      <div className="px-5 py-4 border-b border-[#edf1f7]">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Patient Care Timeline
        </h2>

        <p className="text-[12px] text-[#6b7280] mt-1">
          Upcoming treatments, medications & clinical activities
        </p>
      </div>

      {/* TIMELINE */}
      <div className="p-6">
        <div className="relative">
          {/* LINE */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-[#dbe4ff]" />

          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex gap-5">
                {/* ICON */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* CARD */}
                <div className="flex-1 bg-[#fafbff] border border-[#edf1f7] rounded-[22px] overflow-hidden hover:shadow-md transition-all duration-200">
                  {/* TOP */}
                  <div className="px-5 py-4 border-b border-[#edf1f7] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-[15px] font-bold text-[#111827]">
                          {item.title}
                        </h3>

                        <span
                          className={`text-[11px] font-semibold px-3 py-1 rounded-lg ${item.color}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-2 text-[#6b7280]">
                        <FaClock className="text-[11px]" />

                        <p className="text-[12px] font-medium">{item.time}</p>
                      </div>
                    </div>

                    {/* STATUS */}
                    <div
                      className={`text-[11px] font-semibold px-3 py-2 rounded-xl ${getStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="p-5">
                    <p className="text-[13px] text-[#4b5563] leading-6">
                      {item.description}
                    </p>

                    {/* ASSIGNED */}
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-[#9ca3af]">
                          Assigned To
                        </p>

                        <h4 className="text-[13px] font-semibold text-[#111827] mt-1">
                          {item.assigned}
                        </h4>
                      </div>

                      <button className="h-[38px] px-4 rounded-xl bg-[#eef2ff] text-[#5b5bd6] text-[12px] font-semibold hover:bg-[#dfe7ff]">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* END DOT */}
          <div className="absolute left-[16px] bottom-0 w-5 h-5 rounded-full border-[4px] border-[#dbe4ff] bg-white" />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
