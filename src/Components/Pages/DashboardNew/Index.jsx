import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaCapsules,
  FaFlask,
  FaLink,
  FaMicroscope,
  FaUserInjured,
  FaUserMd,
} from "react-icons/fa";
import {
  FiChevronLeft,
  FiClock,
  FiMap,
  FiRefreshCw,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { FiAlertCircle, FiChevronRight } from "react-icons/fi";
import { FaProcedures, FaBed, FaHeartbeat } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";

const dashboardCards = [
  {
    title: "Patient Registered",
    count: "1,248",
    icon: <FaUserInjured size={20} />,
    border: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Doctor Appointments",
    count: "326",
    icon: <FaUserMd size={20} />,
    border: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Pharmacy Orders",
    count: "589",
    icon: <FaCapsules size={20} />,
    border: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Diagnostics Order",
    count: "172",
    icon: <FaFlask size={20} />,
    border: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const queueData = [
  {
    department: "Emergency",
    count: 12,
    waitTime: 12,
    width: "85%",
    color: "bg-red-500",
    text: "text-red-500",
  },

  {
    department: "Cardiology",
    count: 5,
    waitTime: 5,
    width: "45%",
    color: "bg-orange-400",
    text: "text-orange-500",
  },

  {
    department: "General",
    count: 12,
    waitTime: 10,
    width: "35%",
    color: "bg-orange-300",
    text: "text-orange-400",
  },

  {
    department: "Urology",
    count: 4,
    waitTime: 5,
    width: "55%",
    color: "bg-yellow-400",
    text: "text-yellow-500",
  },

  {
    department: "Orthopedics",
    count: 5,
    waitTime: 5,
    width: "60%",
    color: "bg-emerald-400",
    text: "text-emerald-500",
  },
];

const hospitalStats = [
  {
    title: "In Patients",
    count: "128",
    subText: "Admitted",
    icon: <FaProcedures />,
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    title: "Out Patients",
    count: "542",
    subText: "Visits Today",
    icon: <FaUserInjured />,
    color: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "ADT & Beds",
    count: "74",
    subText: "Beds Available",
    icon: <FaBed />,
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    title: "OT Status",
    count: "09",
    subText: "OT Available",
    icon: <FaHeartbeat />,
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
];

const appointments = [
  {
    id: "#APT1023",
    name: "Sarah",
    age: 45,
    gender: "Female",
    doctor: "Dr. John",
    date: "15 Jan 2026",
    time: "10:00 AM",
    status: "Scheduled",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    statusColor: "bg-emerald-100 text-emerald-600 border border-emerald-200",
    cardBorder: "border-emerald-300",
  },
  {
    id: "#APT1024",
    name: "Kala Hesse",
    age: 30,
    gender: "Male",
    doctor: "Dr. Smith",
    date: "15 Jan 2026",
    time: "12:30 PM",
    status: "Pending",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    statusColor: "bg-orange-100 text-orange-600 border border-orange-200",
    cardBorder: "border-orange-200",
  },
  {
    id: "#APT1025",
    name: "Kora Lala",
    age: 28,
    gender: "Female",
    doctor: "Dr. David",
    date: "15 Jan 2026",
    time: "02:00 PM",
    status: "Cancelled",
    profile: "https://randomuser.me/api/portraits/women/68.jpg",
    statusColor: "bg-red-100 text-red-600 border border-red-200",
    cardBorder: "border-red-200",
  },
  {
    id: "#APT1026",
    name: "Michael",
    age: 52,
    gender: "Male",
    doctor: "Dr. Robert",
    date: "15 Jan 2026",
    time: "04:30 PM",
    status: "Completed",
    profile: "https://randomuser.me/api/portraits/men/75.jpg",
    statusColor: "bg-cyan-100 text-cyan-600 border border-cyan-200",
    cardBorder: "border-cyan-200",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Chen",
    department: "Cardiology",
    time: "08:15 AM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Kofi Nama",
    department: "Urology",
    time: "09:00 AM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Sendaxiah",
    department: "Cardiology",
    time: "10:30 AM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Dr. Son Miema",
    department: "Nephrology",
    time: "11:00 AM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Mor Kesh",
    department: "Neurology",
    time: "12:45 PM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Hol Sinee",
    department: "Neurology",
    time: "01:15 PM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Sarah Chen",
    department: "Neurology",
    time: "02:00 PM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dr. Aondlama",
    department: "Neurology",
    time: "03:30 PM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Dr. Al Mean",
    department: "Cardiology",
    time: "04:45 PM",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

const adtfData = [
  {
    day: "Monday",
    icuTotal: 18,
    icuAvailable: 4,
    generalTotal: 32,
    generalAvailable: 10,
    total: 64,
  },
  {
    day: "Tuesday",
    icuTotal: 14,
    icuAvailable: 3,
    generalTotal: 28,
    generalAvailable: 8,
    total: 53,
  },
  {
    day: "Wednesday",
    icuTotal: 20,
    icuAvailable: 5,
    generalTotal: 30,
    generalAvailable: 12,
    total: 67,
  },
  {
    day: "Thursday",
    icuTotal: 22,
    icuAvailable: 6,
    generalTotal: 38,
    generalAvailable: 14,
    total: 80,
  },
  {
    day: "Friday",
    icuTotal: 16,
    icuAvailable: 2,
    generalTotal: 26,
    generalAvailable: 7,
    total: 51,
  },
  {
    day: "Saturday",
    icuTotal: 12,
    icuAvailable: 4,
    generalTotal: 24,
    generalAvailable: 11,
    total: 51,
  },
  {
    day: "Sunday",
    icuTotal: 10,
    icuAvailable: 5,
    generalTotal: 20,
    generalAvailable: 13,
    total: 48,
  },
];

const otSchedules = [
  {
    surgeon: "Dr. John",
    patient: "Michael",
    procedure: "Heart Surgery",
    start: "10:00 AM",
    end: "12:00 PM",
    status: "Pending",
    color: "bg-orange-500",
  },
  {
    surgeon: "Dr. Sarah",
    patient: "Emma",
    procedure: "Neuro Surgery",
    start: "12:30 PM",
    end: "02:00 PM",
    status: "Completed",
    color: "bg-emerald-500",
  },
  {
    surgeon: "Dr. Robert",
    patient: "David",
    procedure: "Ortho Surgery",
    start: "03:00 PM",
    end: "04:30 PM",
    status: "Delayed",
    color: "bg-red-500",
  },
  {
    surgeon: "Dr. Alex",
    patient: "Sophia",
    procedure: "ENT Procedure",
    start: "05:00 PM",
    end: "06:00 PM",
    status: "Pending",
    color: "bg-yellow-500",
  },
  {
    surgeon: "Dr. Williams",
    patient: "Daniel",
    procedure: "Spine Surgery",
    start: "06:30 PM",
    end: "08:00 PM",
    status: "Completed",
    color: "bg-emerald-500",
  },
  {
    surgeon: "Dr. Jennifer",
    patient: "Olivia",
    procedure: "Kidney Transplant",
    start: "08:15 PM",
    end: "10:30 PM",
    status: "Delayed",
    color: "bg-red-500",
  },
  {
    surgeon: "Dr. Martin",
    patient: "Ethan",
    procedure: "Eye Surgery",
    start: "11:00 PM",
    end: "12:00 AM",
    status: "Pending",
    color: "bg-orange-500",
  },
];

const procedureData = [
  {
    title: "Scheduled",
    count: 12,
    color: "bg-cyan-500",
  },
  {
    title: "In Progress",
    count: 5,
    color: "bg-orange-400",
  },
  {
    title: "Completed",
    count: 18,
    color: "bg-emerald-500",
  },
];

const chartData = [
  { name: "Scheduled", value: 12, color: "#06b6d4" },
  { name: "In Progress", value: 5, color: "#fb923c" },
  { name: "Completed", value: 18, color: "#10b981" },
];

function Bed({ type, status, onSelect, selected }) {
  const [hover, setHover] = useState(false);
  const isOcc = status === "Occupied";
  const bg = isOcc ? "bg-red-600" : "bg-green-600";
  return (
    <div
      className={`relative flex items-center justify-center rounded cursor-pointer transition-transform duration-100
        ${bg} ${selected ? "ring-2 ring-yellow-300 scale-110" : hover ? "scale-110" : ""}
      `}
      style={{ width: 30, height: 22, flexShrink: 0 }}
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* bed icon */}
      <div
        className="relative bg-white/20 rounded-sm"
        style={{ width: 18, height: 11 }}
      >
        <div
          className="absolute bg-white/30 rounded-sm"
          style={{ left: 2, top: 1, width: 5, height: 8 }}
        />
      </div>
      {/* tooltip */}
      {hover && (
        <div
          className="absolute z-20 bottom-full mb-1 left-1/2 -translate-x-1/2
          bg-[#07111c] border border-[#2a5078] text-[#b0cce0] text-[10px]
          px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none"
        >
          {type} · {status}
        </div>
      )}
    </div>
  );
}

const ICU_LABEL = () => (
  <div
    className="bg-[#1a0909] border border-[#7a2020] text-[#e07070]
    text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded flex-shrink-0"
  >
    ICU
  </div>
);

function DashBoardNew() {
  const [startIndex, setStartIndex] = useState(0);
  const [sel, setSel] = useState(null);
  const navigate = useNavigate();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const handleClick = (path) => {
    console.log("path", path);
    navigate(path);
  };
  const mkBed = (id, type, status) => ({
    id,
    type,
    status,
    isSelected: sel === id,
    onSelect: () => setSel((prev) => (prev === id ? null : id)),
  });
  const visibleCards = appointments.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < appointments.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const topIcu = [
    mkBed("ti1", "ICU", "Occupied"),
    mkBed("ti2", "ICU", "Occupied"),
    mkBed("ti3", "ICU", "Occupied"),
  ];
  const topRight = [
    mkBed("tr1", "General", "Available"),
    mkBed("tr2", "General", "Available"),
    mkBed("tr3", "General", "Available"),
    mkBed("tr4", "General", "Available"),
    mkBed("tr5", "General", "Available"),
  ];
  // LEFT ICU block
  const leftIcu = [
    mkBed("li1", "ICU", "Occupied"),
    mkBed("li2", "ICU", "Occupied"),
    mkBed("li3", "ICU", "Occupied"),
    mkBed("li4", "ICU", "Occupied"),
    mkBed("li5", "ICU", "Occupied"),
    mkBed("li6", "ICU", "Available"),
  ];
  // RIGHT beds 2 rows
  const midRight1 = [
    mkBed("mr1", "General", "Available"),
    mkBed("mr2", "General", "Available"),
    mkBed("mr3", "General", "Available"),
  ];
  const midRight2 = [
    mkBed("mr6", "General", "Available"),
    mkBed("mr7", "General", "Available"),
    mkBed("mr8", "General", "Available"),
  ];

  const selInfo = sel
    ? (() => {
        const all = [
          ...topIcu,
          ...topRight,
          ...leftIcu,
          ...midRight1,
          ...midRight2,
        ];
        return all.find((b) => b.id === sel);
      })()
    : null;

  const pharmacy = [
    {
      label: "Dispensed",
      count: 198,
      percent: "57%",
      bar: "w-[57%] bg-gradient-to-r from-emerald-400 to-blue-400",
      badge: "bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },
    {
      label: "Processing",
      count: 60,
      percent: "17%",
      bar: "w-[17%] bg-gradient-to-r from-blue-400 to-cyan-400",
      badge: "bg-blue-50 text-blue-600",
      dot: "bg-blue-500",
    },
    {
      label: "Pending",
      count: 89,
      percent: "26%",
      bar: "w-[26%] bg-gradient-to-r from-yellow-400 to-orange-500",
      badge: "bg-orange-50 text-orange-600",
      dot: "bg-orange-500",
    },
  ];

  const diagnostic = [
    {
      label: "Completed",
      count: 104,
      percent: "47%",
      bar: "w-[47%] bg-gradient-to-r from-emerald-400 to-blue-400",
      badge: "bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },
    {
      label: "Processing",
      count: 73,
      percent: "33%",
      bar: "w-[33%] bg-gradient-to-r from-blue-400 to-cyan-400",
      badge: "bg-blue-50 text-blue-600",
      dot: "bg-blue-500",
    },
    {
      label: "Pending",
      count: 42,
      percent: "19%",
      bar: "w-[19%] bg-gradient-to-r from-yellow-400 to-orange-500",
      badge: "bg-orange-50 text-orange-600",
      dot: "bg-orange-500",
    },
  ];

  const orderCard = (title, count, icon, data, route) => (
    <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.08)] border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-6 py-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-blue-800 text-sm">{icon}</span>

            <h2 className="font-bold text-slate-900 text-sm">{title}</h2>

            <span className="text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-xs font-bold">
              {count}
            </span>
          </div>

          <p className="text-[13px] text-slate-500 mt-2">Total orders today</p>
        </div>

        <button
          className="border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg px-4 py-2"
          onClick={() => navigate(route)}
        >
          Details
        </button>
      </div>

      {/* Body */}
      <div className="px-6 py-5 space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[105px_1fr_48px_64px] items-center gap-4 border-b last:border-b-0 border-slate-100 pb-4 last:pb-0"
          >
            <p className="text-slate-900 text-xs font-semibold">{item.label}</p>

            <div className="h-[7px] bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${item.bar}`}></div>
            </div>

            <p
              className={`font-bold text-xs ${
                item.badge.includes("blue")
                  ? "text-blue-600"
                  : item.badge.includes("orange")
                    ? "text-orange-500"
                    : "text-emerald-600"
              }`}
            >
              {item.count}
            </p>

            <span
              className={`inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${item.badge}`}
            >
              <span className={`w-2 h-2 rounded-full ${item.dot}`}></span>

              {item.percent}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="p-5">
        <p className="text-2xl font-bold text-gray-800 mb-3">Dashboard</p>
        <div className="flex gap-5">
      <div className="w-[25%]">
  <div className="w-full rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">
    <div className="p-5 bg-gradient-to-br from-white to-cyan-50">

      {/* TOP */}
      <div className="flex items-start justify-between mb-2">

        <div>
          <h3 className="text-base font-bold text-gray-800">
            Real-time Queue Status
          </h3>

          <p className="text-xs text-gray-500 mt-1 leading-5">
            Live patient waiting analysis by department
          </p>
        </div>

        <div className="h-10 w-10 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
          <FiUsers className="text-cyan-600 text-lg" />
        </div>

      </div>

      {/* HEADER */}
      <div className="grid grid-cols-[1.2fr_0.7fr_1fr] gap-3 items-center px-2 py-1.5 rounded-md bg-cyan-50 border border-cyan-100 mb-4">

        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
          Department
        </p>

        <p className="text-[11px] font-semibold uppercase tracking-wide text-center text-gray-500">
          Avg Wait
        </p>

        <p className="text-[11px] font-semibold uppercase tracking-wide text-left text-gray-500">
          Queue Load
        </p>

      </div>

      {/* BODY */}
      <div className="space-y-4">

        {queueData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1.2fr_0.7fr_1fr] gap-3 items-center"
          >

            {/* LEFT */}
            <div className="flex items-center gap-2 min-w-0">

              <div
                className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${item.color}`}
              />

              <div className="flex items-center gap-1 flex-wrap">

                <span className="text-xs font-semibold text-gray-700 truncate">
                  {item.department}
                </span>

                <span className={`text-xs font-bold ${item.text}`}>
                  ({item.count})
                </span>

              </div>

            </div>

            {/* WAIT */}
            <div className="flex items-center justify-center">

              <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
                {item.waitTime} min
              </span>

            </div>

            {/* LOAD */}
            <div className="flex items-center gap-2 min-w-0">

              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">

                <div
                  className={`${item.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: item.width }}
                />

              </div>

              <span className="text-[11px] font-semibold text-gray-500 min-w-[38px] text-right">
                {item.width}
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>
  </div>
</div>
          <div className="w-[80%] flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-3">
              {dashboardCards.map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Left Gradient Line */}
                  <div
                    className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${card.border}`}
                  ></div>

                  <div className="flex items-center justify-between p-3 pl-7">
                    {/* Content */}
                    <div>
                      <p className="text-gray-500 text-sm font-medium mb-2">
                        {card.title}
                      </p>

                      <h2 className="text-xl font-bold text-gray-800">
                        {card.count}
                      </h2>

                      <p className="text-xs text-green-500 mt-2 font-medium">
                        +12% from last week
                      </p>
                    </div>

                    {/* Icon */}
                    <div
                      className={`h-10 w-10 rounded-2xl flex items-center justify-center ${card.bg} ${card.iconColor} shadow-sm`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  {/* <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${card.border} opacity-80`}
              ></div> */}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {hospitalStats.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Top Gradient */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${item.color}`}
                  ></div>

                  <div className="p-5">
                    {/* Top Content */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`h-14 w-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center text-2xl shadow-sm`}
                      >
                        {item.icon}
                      </div>

                      {/* Title + Count */}
                      <div>
                        <p className="text-sm font-semibold text-gray-600">
                          {item.title}
                        </p>

                        <div className="flex items-end gap-2 mt-1">
                          <h2 className="text-2xl font-bold text-gray-800 leading-none">
                            {item.count}
                          </h2>

                          <span
                            className={`text-xs font-medium mb-0.5 ${item.text}`}
                          >
                            {item.subText}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Soft Background Glow */}
                  <div
                    className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-10`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-[60%] rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden mt-5">
            <div className="bg-white border-gray-200 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-2 border-b gap-4 mb-6">
                <div>
                  <h2 className="text-base font-sans font-bold text-gray-800">
                    Doctor Appointments
                  </h2>

                  <p className="text-xs font-sans text-gray-500 mt-1">
                    Today appointment schedule details
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  {/* Search */}
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      placeholder="Search"
                      className="h-9 w-52 rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Refresh */}
                  <button
                    className="h-9 px-4 rounded-md border border-gray-200 bg-gray-50 hover:bg-cyan-50 flex items-center gap-2 text-sm font-medium text-gray-700 transition"
                    onClick={() => navigate("/appointments")}
                  >
                    View All
                  </button>

                  {/* Left Arrow */}
                  <button
                    onClick={handlePrev}
                    className="h-9 w-9 rounded-md border border-gray-200 bg-gray-50 hover:bg-cyan-50 flex items-center justify-center transition disabled:opacity-40"
                    disabled={startIndex === 0}
                  >
                    <FiChevronLeft className="text-lg" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={handleNext}
                    className="h-9 w-9 rounded-md border border-gray-200 bg-gray-50 hover:bg-cyan-50 flex items-center justify-center transition disabled:opacity-40"
                    disabled={startIndex + 3 >= appointments.length}
                  >
                    <FiChevronRight className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-500 p-2">
                {visibleCards.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border ${item.cardBorder} bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                  >
                    {/* Card Body */}
                    <div className="p-4">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.profile}
                            alt={item.name}
                            className="h-12 w-12 rounded-full object-cover border-2 border-white shadow"
                          />

                          <div>
                            <h3 className="text-sm font-bold text-gray-800">
                              {item.name}
                            </h3>

                            <p className="text-xs text-gray-500">{item.id}</p>
                          </div>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="mt-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">Age / Gender</p>

                          <p className="text-sm font-semibold text-gray-700">
                            {item.age} / {item.gender}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">Doctor</p>

                          <p className="text-sm font-semibold text-gray-700">
                            {item.doctor}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">Date</p>

                          <p className="text-sm font-semibold text-gray-700">
                            {item.date}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <p className="text-xs text-gray-500">Time</p>

                          <div className="flex items-center gap-1 text-cyan-600 font-semibold text-sm">
                            <FiClock />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[40%] rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden mt-5">
            <div className="w-full shadow-md overflow-hidden h-80">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <div>
                  <h2 className="text-base font-sans font-bold">
                    Available Doctors
                  </h2>

                  <p className="text-xs font-sans text-gray-400 mt-1">
                    Live doctor availability status
                  </p>
                </div>

                <button
                  className=" rounded-md text-sm font-sans bg-teal-500 px-2 py-1 text-white flex items-center justify-center hover:bg-teal-600"
                  onClick={() => navigate("/doctors")}
                >
                  view all
                </button>
              </div>

              {/* Scroll Area */}
              <div className="h-[510px] overflow-y-auto scrollHide p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                  {doctors.map((doctor, index) => (
                    <div
                      key={index}
                      className="relative rounded-xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50 p-4 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      {/* Online Dot */}
                      <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>

                      {/* Top */}
                      <div className="flex items-center gap-3">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow"
                        />

                        <div>
                          <h3 className="text-xs font-bold text-gray-800">
                            {doctor.name}
                          </h3>

                          <p className="text-xs text-gray-500 mt-1">
                            {doctor.department}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-2 h-[1px] bg-gradient-to-r from-cyan-200 via-blue-200 to-transparent"></div>

                      {/* Bottom */}
                      <div className="flex items-center justify-between">
                        {/* Time */}
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="h-6 w-6 rounded-md bg-cyan-100 flex items-center justify-center">
                            <FiClock className="text-cyan-600 text-sm" />
                          </div>

                          <span className="text-xs font-medium">
                            {doctor.time}
                          </span>
                        </div>

                        {/* Status */}
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-xs font-semibold">
                          {doctor.status}
                        </span>
                      </div>

                      {/* Bottom Line */}
                      <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 mt-5">
          <div className="bg-white w-[60%] rounded-xl border border-gray-200 shadow-md overflow-hidden">
            <div className="flex items-center justify-between px-5 py-2 border-b">
              <div>
                <h2 className="text-base font-bold font-sans text-gray-800">
                  ADTF
                </h2>

                <p className="text-xs font-sans text-gray-500 mt-1">
                  Full Bed Census & Floor Map
                </p>
              </div>
              <button
                className="rounded-md text-sm font-sans bg-cyan-100 px-2 py-1 text-white flex items-center justify-center hover:bg-cyan-600"
                onClick={() => navigate("/adtf")}
              >
                <FiChevronRight className="text-xl text-blue-500 hover:text-white" />
              </button>
            </div>
            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-x-scroll scrollHide">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Bed Availability Summary
                  </h3>

                  <div className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-semibold">
                    Weekly Status
                  </div>
                </div>

                {/* Header */}
                <div className="grid grid-cols-6 bg-cyan-50 border border-cyan-100 rounded-md px-3 py-3 mb-3">
                  <p className="text-xs font-semibold text-gray-500">Day</p>

                  <p className="text-xs font-semibold text-center text-red-500">
                    ICU
                  </p>

                  <p className="text-xs font-semibold text-center text-red-400">
                    ICU Avl
                  </p>

                  <p className="text-xs font-semibold text-center text-cyan-600">
                    General
                  </p>

                  <p className="text-xs font-semibold text-center text-emerald-600">
                    Gen Avl
                  </p>

                  <p className="text-xs font-semibold text-center text-gray-600">
                    Total
                  </p>
                </div>

                {/* Rows */}
                <div className="space-y-3">
                  {adtfData.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-6 items-center border border-gray-100 rounded-md px-3 py-1 hover:bg-cyan-50 transition"
                    >
                      {/* Day */}
                      <p className="text-xs font-sans font-medium text-gray-700">
                        {item.day}
                      </p>

                      {/* ICU Total */}
                      <p className="text-xs font-bold text-center text-red-500">
                        {item.icuTotal}
                      </p>

                      {/* ICU Available */}
                      <p className="text-xs font-bold text-center text-red-400">
                        {item.icuAvailable}
                      </p>

                      {/* General Total */}
                      <p className="text-xs font-bold text-center text-cyan-600">
                        {item.generalTotal}
                      </p>

                      {/* General Available */}
                      <p className="text-xs font-bold text-center text-emerald-600">
                        {item.generalAvailable}
                      </p>

                      {/* Total */}
                      <p className="text-xs font-bold text-center text-gray-700">
                        {item.total}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Total */}
                <div className="mt-4 px-4 py-1 shadow-lg">
                  <div className="grid grid-cols-6 items-center">
                    <p className="text-sm font-bold text-center text-gray-700">
                      Total
                    </p>

                    <p className="text-center  text-gray-700 font-bold text-xs">
                      112
                    </p>

                    <p className=" text-center text-gray-700 font-bold text-xs">
                      29
                    </p>

                    <p className="text-center  text-gray-700 font-bold text-xs">
                      198
                    </p>

                    <p className=" text-center text-gray-700 font-bold text-xs">
                      75
                    </p>

                    <p className="text-center text-gray-700 font-bold text-xs">
                      414
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#0d1b2e] rounded-xl p-3.5 inline-block font-sans select-none"
                style={{ maxWidth: 420 }}
              >
                <p className="text-[13px] font-semibold text-[#c8d8e8] mb-2.5">
                  Interactive Floor Map
                </p>

                {/* Floor shell */}
                <div className="bg-[#122035] border border-[#1e3a55] rounded-lg p-2 flex flex-col gap-5 mt-5">
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ICU_LABEL />
                      {topIcu.map((b) => (
                        <Bed key={b.id} {...b} />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {topRight.map((b) => (
                        <Bed key={b.id} {...b} />
                      ))}
                    </div>
                  </div>

                  {/* MIDDLE ROW */}
                  <div className="flex items-stretch gap-1">
                    {/* Left ICU block */}
                    <div
                      className="bg-[#1a0909] border border-[#7a2020] rounded-md px-2 py-2
            flex flex-col items-center gap-1.5 flex-shrink-0"
                    >
                      <ICU_LABEL />
                      <div className="grid grid-cols-2 gap-1">
                        {leftIcu.map((b) => (
                          <Bed key={b.id} {...b} />
                        ))}
                      </div>
                    </div>

                    {/* Corridor center */}
                    <div className="flex flex-col gap-1 flex-1">
                      <div
                        className="bg-[#091522] border border-[#1a3350] rounded flex items-center
              justify-evenly flex-1 w-28"
                      >
                        <div className="w-10 h-3.5 border-2 border-[#2a4a65] bg-[#091a28] rounded-sm" />
                        {/* fork SVG */}
                        <svg
                          width="20"
                          height="26"
                          viewBox="0 0 22 28"
                          fill="none"
                        >
                          <line
                            x1="11"
                            y1="28"
                            x2="11"
                            y2="10"
                            stroke="#3a6a8a"
                            strokeWidth="2.5"
                          />
                          <line
                            x1="11"
                            y1="10"
                            x2="4"
                            y2="4"
                            stroke="#3a6a8a"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <line
                            x1="11"
                            y1="10"
                            x2="18"
                            y2="4"
                            stroke="#3a6a8a"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle cx="4" cy="3" r="2" fill="#3a6a8a" />
                          <circle cx="18" cy="3" r="2" fill="#3a6a8a" />
                          <circle cx="11" cy="10" r="2" fill="#3a6a8a" />
                        </svg>
                        <div className="w-4 h-4 border-2 border-[#2a4a65] bg-[#091a28] rounded-full" />
                      </div>
                    </div>

                    {/* Right beds */}
                    <div className="flex flex-col gap-1">
                      <div
                        className="bg-[#0f2035] border border-[#1e3a50] rounded text-center
              text-[10px] font-bold text-[#5ec87a] tracking-wide py-0.5"
                      >
                        General
                      </div>
                      <div className="flex gap-1">
                        {midRight1.map((b) => (
                          <Bed key={b.id} {...b} />
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {midRight2.map((b) => (
                          <Bed key={b.id} {...b} />
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {midRight2.map((b) => (
                          <Bed key={b.id} {...b} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ICU_LABEL />
                      {topIcu.map((b) => (
                        <Bed key={b.id} {...b} />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      {topRight.map((b) => (
                        <Bed key={b.id} {...b} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 items-start">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#96b0c4]">
                      <div className="w-2.5 h-2.5 rounded-sm bg-red-600" /> ICU
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#96b0c4]">
                      <div className="w-2.5 h-2.5 rounded-sm bg-red-600" />{" "}
                      Occupied
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#96b0c4]">
                      <div className="w-2.5 h-2.5 rounded-sm bg-green-600" />{" "}
                      General
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#96b0c4]">
                      <div className="w-2.5 h-2.5 rounded-sm bg-green-600" />{" "}
                      Available
                    </div>
                  </div>
                  <div className="ml-auto text-right text-[11px] text-[#96b0c4] leading-5">
                    Exact
                    <br />
                    230 coants
                  </div>
                </div>

                {/* Selected info */}
                {selInfo && (
                  <div
                    className="mt-2 bg-[#0f2035] border border-[#2a5078] rounded-md
          px-3 py-1.5 flex items-center justify-between"
                  >
                    <span className="text-[11px] text-[#7ec8e0]">
                      {selInfo.type} Ward · {selInfo.status}
                    </span>
                    <button
                      onClick={() => setSel(null)}
                      className="text-[10px] text-[#96b0c4] bg-[#091522] border border-[#2a5078]
            rounded px-2 py-0.5 cursor-pointer hover:bg-[#122035]"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* OT Schedule */}
          <div className="bg-white w-[40%] h-[500px]  rounded-xl border border-gray-200 shadow-md overflow-y-auto scrollHide">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-2 border-b">
              <div>
                <h2 className="text-base font-sans font-bold text-gray-800">
                  Operation Theater Schedule
                </h2>

                <p className="text-xs font-sans text-gray-600 mt-1">
                  Live OT Schedule Monitoring
                </p>
              </div>

              <button className=" rounded-md text-sm font-sans bg-teal-500 px-2 py-1 text-white flex items-center justify-center hover:bg-teal-600"
  onClick={() => navigate("/ot-management")}
              >
                view all
              </button>
            </div>

            {/* Table */}
            <div className="p-5 overflow-x-auto scrollHide">
              {/* Header */}
              <div className="grid grid-cols-6 bg-cyan-50 border border-cyan-100 rounded-xl px-4 py-3 min-w-[700px]">
                <p className="text-xs font-semibold text-gray-500">Surgeon</p>

                <p className="text-xs font-semibold text-gray-500">Patient</p>

                <p className="text-xs font-semibold text-gray-500">Procedure</p>

                <p className="text-xs font-semibold text-center text-gray-500">
                  Start Time
                </p>

                <p className="text-xs font-semibold text-center text-gray-500">
                  End Time
                </p>

                <p className="text-xs font-semibold text-center text-gray-500">
                  Status
                </p>
              </div>

              {/* Rows */}
              <div className="space-y-3 mt-3 min-w-[700px]">
                {otSchedules.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 items-center border border-gray-100 rounded-xl px-4 py-2 hover:bg-cyan-50 transition"
                  >
                    <p className="text-xs font-sans font-semibold text-gray-700">
                      {item.surgeon}
                    </p>

                    <p className="text-xs font-sans font-semibold text-gray-600">
                      {item.patient}
                    </p>

                    <p className="text-xs font-sans font-semibold text-gray-600">
                      {item.procedure}
                    </p>

                    <p className="text-xs font-sans font-semibold text-center text-gray-700">
                      {item.start}
                    </p>

                    <p className="text-xs font-sans font-semibold text-center text-gray-700">
                      {item.end}
                    </p>

                    <div className="flex justify-center">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${item.color}`}
                      >
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          {/* Clinical Procedures */}
          <div className="w-full rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-2 border-b border-gray-100">
              <div>
                <h2 className="text-base font-sans font-bold text-gray-800">
                  Clinical Procedures
                </h2>

                <p className="text-xs font-sans text-gray-500 mt-1">
                  Live procedure monitoring
                </p>
              </div>

              <div className="h-9 w-9 rounded-xl bg-cyan-50 flex items-center justify-center">
                <FiChevronRight className="text-cyan-600 text-lg" />
              </div>
            </div>

            {/* Content */}
            <div className="">
              <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      Procedure Analytics
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Overall procedure status
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">35</p>

                    <p className="text-xs text-gray-500">Total Cases</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Left Side Chart */}
                  <div className="w-[130px] h-[130px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          innerRadius={28}
                          outerRadius={55}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            borderRadius: "10px",
                            border: "1px solid #e5e7eb",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Right Side Text */}
                  <div className="flex-1 space-y-2">
                    {chartData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ background: item.color }}
                          ></div>

                          <p className="text-xs font-medium text-gray-600">
                            {item.name}
                          </p>
                        </div>

                        <h4 className="text-sm font-bold text-gray-800">
                          {item.value}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pharmacy Orders */}
          <div>
            {orderCard(
              "Pharmacy Orders",
              347,
              <FaLink />,
              pharmacy,
              "/pharmacyorders",
            )}
          </div>

          {/* Diagnostic Orders */}
          <div>
            {orderCard(
              "Diagnostic Orders",
              219,
              <FaMicroscope />,
              diagnostic,
              "/diagnosticorders",
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashBoardNew;
