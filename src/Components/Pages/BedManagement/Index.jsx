import React, { useState } from "react";
import {
  FaBed,
  FaUserInjured,
  FaProcedures,
  FaWheelchair,
  FaHospitalUser,
  FaPlus,
  FaExchangeAlt,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";

const WardManagement = () => {
  const [openAdmissionModal, setOpenAdmissionModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedWardFilter, setSelectedWardFilter] = useState("All");

  // TOP CARDS
  const topCards = [
    {
      title: "Total Patients",
      value: "128",
      icon: <FaHospitalUser />,
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    {
      title: "Available Beds",
      value: "36",
      icon: <FaBed />,
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
    },
    {
      title: "Occupied Beds",
      value: "92",
      icon: <FaBed />,
      bg: "bg-red-50",
      text: "text-red-500",
      border: "border-red-200",
    },
    {
      title: "ICU Beds",
      value: "20",
      icon: <FaProcedures />,
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
    },
    {
      title: "General Beds",
      value: "80",
      icon: <FaWheelchair />,
      bg: "bg-orange-50",
      text: "text-orange-500",
      border: "border-orange-200",
    },
    {
      title: "Emergency Today",
      value: "12",
      icon: <FaHospitalUser />,
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
    },
  ];

  // PATIENT TABLE DATA
  const patientData = [
    {
      id: "IP1023",
      name: "Kumar S",
      age: 56,
      gender: "Male",
      mobile: "+91 9876543210",
      ward: "ICU",
      bed: "B12",
      doctor: "Dr. Ravi",
      status: "Critical",
      statusColor: "bg-red-50 text-red-600",
    },
    {
      id: "IP1045",
      name: "Meena R",
      age: 34,
      gender: "Female",
      mobile: "+91 9876543211",
      ward: "General",
      bed: "G08",
      doctor: "Dr. Priya",
      status: "Stable",
      statusColor: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "IP1078",
      name: "Suresh T",
      age: 62,
      gender: "Male",
      mobile: "+91 9876543212",
      ward: "General",
      bed: "G15",
      doctor: "Dr. Arjun",
      status: "Stable",
      statusColor: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "IP1091",
      name: "Lakshmi P",
      age: 28,
      gender: "Female",
      mobile: "+91 9876543213",
      ward: "Private",
      bed: "P03",
      doctor: "Dr. Kavya",
      status: "Recovering",
      statusColor: "bg-blue-50 text-blue-600",
    },
    {
      id: "IP1102",
      name: "Ramesh B",
      age: 70,
      gender: "Male",
      mobile: "+91 9876543214",
      ward: "ICU",
      bed: "B08",
      doctor: "Dr. Ravi",
      status: "Critical",
      statusColor: "bg-red-50 text-red-600",
    },
    {
      id: "IP1120",
      name: "Anitha S",
      age: 41,
      gender: "Female",
      mobile: "+91 9876543215",
      ward: "General",
      bed: "G02",
      doctor: "Dr. Priya",
      status: "Discharge Due",
      statusColor: "bg-yellow-50 text-yellow-700",
    },
  ];

  // BED DATA
  const bedSections = [
    {
      title: "ICU (Block - B)",
      beds: [
        ["B1", "green"],
        ["B2", "red"],
        ["B3", "red"],
        ["B4", "yellow"],
        ["B5", "green"],
        ["B6", "green"],
        ["B7", "red"],
        ["B8", "red"],
      ],
    },

    {
      title: "General Ward (Block - G)",
      beds: [
        ["G01", "green"],
        ["G02", "red"],
        ["G03", "green"],
        ["G04", "green"],
        ["G05", "green"],
        ["G06", "yellow"],
        ["G07", "green"],
        ["G08", "red"],
      ],
    },

    {
      title: "Private Ward (Block - P)",
      beds: [
        ["P01", "green"],
        ["P02", "green"],
        ["P03", "red"],
        ["P04", "green"],
      ],
    },
  ];

  // BED COLORS
  const getBedColor = (color) => {
    const colors = {
      green:
        "bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100",
      red: "bg-red-50 border-red-300 text-red-700 hover:bg-red-100",
      yellow:
        "bg-yellow-50 border-yellow-300 text-yellow-700 hover:bg-yellow-100",
    };

    return colors[color];
  };

  // FILTER
  const filterBeds = (beds) => {
    let filtered = beds;

    if (selectedFilter !== "All") {
      const filterMap = {
        Available: "green",
        Occupied: "red",
        Cleaning: "yellow",
      };

      filtered = filtered.filter((bed) => bed[1] === filterMap[selectedFilter]);
    }

    return filtered;
  };

  return (
    <Layout>
      <div className="min-h-screen p-4 bg-slate-50">
        {/* PAGE TITLE */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-800">Bed Management</h2>

          <p className="text-sm text-slate-500 mt-1">
            Live patient admission & bed allocation overview
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {topCards.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${item.border} ${item.bg} p-4 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    {item.title}
                  </p>

                  <h2 className={`text-3xl font-bold mt-2 ${item.text}`}>
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm ${item.text}`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 mt-5">
          {/* LEFT SECTION */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] px-5 py-1.5 flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-base">Patient List</h2>
              </div>

              <button
                onClick={() => setOpenAdmissionModal(true)}
                className="h-8 px-4 rounded-lg bg-white text-blue-700 font-semibold text-sm flex items-center gap-2"
              >
                <FaPlus />
                New Admission
              </button>
            </div>

            {/* FILTERS */}
            <div className="p-4 border-b border-slate-200 grid grid-cols-1 md:grid-cols-4 gap-3">
              <select className="h-10 rounded-lg border border-slate-200 px-3 text-sm outline-none">
                <option>All Wards</option>
                <option>ICU</option>
                <option>General</option>
                <option>Private</option>
              </select>

              <select className="h-10 rounded-lg border border-slate-200 px-3 text-sm outline-none">
                <option>All Doctors</option>
              </select>

              <select className="h-10 rounded-lg border border-slate-200 px-3 text-sm outline-none">
                <option>All Status</option>
              </select>

              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

                <input
                  placeholder="Search patient..."
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-sm outline-none"
                />
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto h-[400px] overflow-y-scroll scrollHide">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b text-xs uppercase text-slate-500 whitespace-nowrap">
                    <th className="px-4 py-4 text-left">Patient ID</th>

                    <th className="px-4 py-4 text-left">Name</th>

                    <th className="px-4 py-4 text-left">Age / Gender</th>

                    <th className="px-4 py-4 text-left">Mobile</th>

                    <th className="px-4 py-4 text-left">Ward</th>

                    <th className="px-4 py-4 text-left">Bed</th>

                    <th className="px-4 py-4 text-left">Doctor</th>

                    <th className="px-4 py-4 text-left">Status</th>

                    <th className="px-4 py-4 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {patientData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-slate-50 whitespace-nowrap"
                    >
                      <td className="px-4 py-4 text-sm font-bold text-blue-600">
                        {item.id}
                      </td>

                      <td className="px-4 py-4 text-sm font-medium">
                        {item.name}
                      </td>

                      {/* AGE / GENDER */}
                      <td className="px-4 py-4 text-sm">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-700">
                            {item.age} /
                          </span>

                          <span className="text-xs text-slate-500">
                            {item.gender}
                          </span>
                        </div>
                      </td>

                      {/* MOBILE */}
                      <td className="px-4 py-4 text-sm text-slate-600">
                        {item.mobile}
                      </td>

                      <td className="px-4 py-4 text-sm">{item.ward}</td>

                      <td className="px-4 py-4 text-sm">{item.bed}</td>

                      <td className="px-4 py-4 text-sm">{item.doctor}</td>

                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <button
                          onClick={() => {
                            setSelectedPatient(item);
                            setOpenTransferModal(true);
                          }}
                          className="h-9 px-4 rounded-lg bg-[#0CB8A1] hover:bg-[#08B8A8] text-white text-xs font-semibold flex items-center gap-2"
                        >
                          <FaExchangeAlt />
                          Transfer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] px-5 py-1.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h2 className="text-white font-bold text-base">
                  Bed Management
                </h2>
              </div>

              <div className="flex gap-2">
                {/* WARD FILTER */}
                <select
                  value={selectedWardFilter}
                  onChange={(e) => setSelectedWardFilter(e.target.value)}
                  className="h-8 rounded-lg bg-white px-3 text-xs font-sans cursor-pointer outline-none scrollHide"
                >
                  <option>Category</option>
                  <option>ICU</option>

                  <option>General Ward</option>

                  <option>Private Ward</option>

                  <option>Emergency Ward</option>

                  <option>Semi-Private Ward</option>

                  <option>Pediatric Ward</option>

                  <option>Maternity Ward</option>

                  <option>Surgical Ward</option>

                  <option>Cardiac Ward</option>

                  <option>Neurology Ward</option>

                  <option>Orthopedic Ward</option>

                  <option>Isolation Ward</option>

                  <option>Trauma Care Unit</option>

                  <option>Post-Operative Ward</option>

                  <option>Burn Unit</option>

                  <option>Dialysis Unit</option>

                  <option>Observation Ward</option>
                </select>

                {/* STATUS FILTER */}
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="h-8 rounded-lg bg-white px-3 text-xs font-sans cursor-pointer outline-none"
                >
                  <option>Status</option>
                  <option>Available</option>
                  <option>Occupied</option>
                  <option>Cleaning</option>
                </select>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              {/* LEGEND */}
              <div className="flex flex-wrap gap-5 text-xs font-sans font-medium mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  Available
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  Occupied
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  Cleaning
                </div>
              </div>
              <div className="h-[400px] overflow-y-scroll scrollHide pr-1">
                {/* BED BLOCKS */}
                {bedSections
                  .filter((section) => {
                    if (selectedWardFilter === "All") return true;

                    if (
                      selectedWardFilter === "ICU" &&
                      section.title.includes("ICU")
                    )
                      return true;

                    if (
                      selectedWardFilter === "General" &&
                      section.title.includes("General")
                    )
                      return true;

                    if (
                      selectedWardFilter === "Private" &&
                      section.title.includes("Private")
                    )
                      return true;

                    return false;
                  })
                  .map((section, index) => {
                    const filteredBeds = filterBeds(section.beds);

                    if (filteredBeds.length === 0) return null;

                    return (
                      <div key={index} className="mb-7">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-bold text-slate-700">
                            {section.title}
                          </h3>

                          <span className="text-xs text-slate-400 font-medium">
                            {filteredBeds.length} Beds
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {filteredBeds.map(([bed, color], idx) => {
                            const patient = patientData.find(
                              (p) => p.bed === bed,
                            );

                            return (
                              <div key={idx} className="relative group">
                                {/* BED CARD */}
                                <div
                                  className={`h-16 w-20 rounded-2xl border flex flex-col items-center justify-center font-bold text-sm transition-all duration-200 cursor-pointer ${getBedColor(
                                    color,
                                  )}`}
                                >
                                  <FaBed className="text-lg mb-2" />
                                  {bed}
                                </div>

                                {/* TOOLTIP */}
                                {color === "red" && patient && (
                                  <div className="absolute z-50 hidden group-hover:block bottom-[75px] left-1/2 -translate-x-1/2 w-52 rounded-2xl bg-white border border-slate-200 shadow-2xl p-4">
                                    {/* Arrow */}
                                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45"></div>

                                    <div className="flex items-center gap-3">
                                      <div className="w-11 h-11 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">
                                        {patient.name.charAt(0)}
                                      </div>

                                      <div>
                                        <h3 className="text-sm font-bold text-slate-800">
                                          {patient.name}
                                        </h3>

                                        <p className="text-xs text-slate-500">
                                          Age: {patient.age}
                                        </p>

                                        <p className="text-xs text-slate-500">
                                          Gender: {patient.gender}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                                      <p className="text-xs text-slate-500">
                                        Ward:
                                        <span className="font-semibold text-slate-700 ml-1">
                                          {patient.ward}
                                        </span>
                                      </p>

                                      <p className="text-xs text-slate-500">
                                        Doctor:
                                        <span className="font-semibold text-slate-700 ml-1">
                                          {patient.doctor}
                                        </span>
                                      </p>

                                      <p className="text-xs text-slate-500">
                                        Status:
                                        <span className="font-semibold text-red-600 ml-1">
                                          {patient.status}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* ADMISSION MODAL */}
        {openAdmissionModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] px-6 py-1.5 flex items-center justify-between">
                <h2 className="text-white text-lg font-bold">
                  Admission / Bed Allocation
                </h2>

                <button
                  onClick={() => setOpenAdmissionModal(false)}
                  className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                <Input label="Patient UHID / Name" />
                <Input label="Mobile Number" />
                <Input label="Admission Type" />
                <Input label="Ward" />
                <Input label="Bed Number" />
                <Input label="Consulting Doctor" />
                <Input label="Expected Stay (Days)" />
                <Input label="Advance Amount" />
              </div>

              <div className="px-6 py-5 border-t flex justify-end gap-3">
                <button
                  onClick={() => setOpenAdmissionModal(false)}
                  className="h-10 px-5 rounded-lg border border-slate-300 text-slate-600 font-semibold"
                >
                  Cancel
                </button>

                <button className="h-10 px-6 rounded-lg bg-[#0CB8A1] text-white font-semibold">
                  Admit Patient
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TRANSFER MODAL */}
        {openTransferModal && selectedPatient && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] px-6 py-1.5 flex items-center justify-between">
                <h2 className="text-white text-lg font-bold">
                  Patient Transfer
                </h2>

                <button
                  onClick={() => setOpenTransferModal(false)}
                  className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6 space-y-5">
                <div className="bg-slate-50 rounded-2xl p-4 border">
                  <h3 className="font-bold text-slate-800">
                    {selectedPatient.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Current Ward: {selectedPatient.ward} · Bed:{" "}
                    {selectedPatient.bed}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="From Ward & Bed" value="ICU - B12" />
                  <Input label="To Ward & Bed" value="General - G10" />
                  <Input label="Approved By" value="Dr. Ravi Kumar" />
                  <Input label="Reason" value="Condition improving" />
                </div>
              </div>

              <div className="px-6 py-5 border-t flex justify-end gap-3">
                <button
                  onClick={() => setOpenTransferModal(false)}
                  className="h-8 text-sm font-sans px-5 rounded-lg border border-slate-300 text-slate-600 font-semibold"
                >
                  Cancel
                </button>

                <button className="h-8 text-sm font-sans px-6 rounded-lg bg-[#0CB8A1] text-white font-semibold">
                  Confirm Transfer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-600 mb-2 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full h-10 rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default WardManagement;
