import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaCalendarAlt,
  FaClock,
  FaTimes,
  FaShareAlt,
  FaVial,
  FaCapsules,
} from "react-icons/fa";

function Appointments() {
  const [openAddAppointment, setOpenAddAppointment] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const appointments = [
    {
      id: "APT-1001",
      patient: "Ravi Kumar",
      type: "OP",
      doctor: "Dr. Sharma",
      department: "Cardiology",
      date: "13 May 2026",
      time: "09:30 AM",
      mode: "In-Clinic",
      status: "Confirmed",
    },
    {
      id: "APT-1002",
      patient: "Priya S",
      type: "IP",
      doctor: "Dr. Kumar",
      department: "Neurology",
      date: "13 May 2026",
      time: "10:15 AM",
      mode: "Ward Visit",
      status: "In Progress",
    },
    {
      id: "APT-1003",
      patient: "Arjun Mehta",
      type: "OP",
      doctor: "Dr. Patel",
      department: "Orthopedics",
      date: "13 May 2026",
      time: "11:00 AM",
      mode: "Video Call",
      status: "Pending",
    },
    {
      id: "APT-1004",
      patient: "Sneha Patel",
      type: "OP",
      doctor: "Dr. Monica",
      department: "General Medicine",
      date: "13 May 2026",
      time: "12:30 PM",
      mode: "In-Clinic",
      status: "Cancelled",
    },
  ];

  const filteredAppointments =
    activeTab === "All"
      ? appointments
      : appointments.filter((item) => item.type === activeTab);

  const statusStyle = {
    Confirmed: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
    "In Progress": "bg-blue-50 text-blue-600 before:bg-blue-500",
    Pending: "bg-orange-50 text-orange-600 before:bg-orange-500",
    Cancelled: "bg-red-50 text-red-600 before:bg-red-500",
  };

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-purple-600 text-sm" />
              <h2 className="text-xl font-bold text-slate-800">Appointments</h2>
            </div>

            <button
              onClick={() => setOpenAddAppointment(true)}
              className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              Book Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <SummaryCard title="Today Appointments" value="186" />
            <SummaryCard title="Confirmed" value="92" />
            <SummaryCard title="In Progress" value="34" />
            <SummaryCard title="Pending" value="60" />
          </div>

          <div className="flex items-end gap-4 mb-4">
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                <input
                  type="text"
                  placeholder="Search (Patient / Doctor / Appointment ID)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-purple-400"
                />
              </div>
            </div>

            <div className="flex gap-2 ml-auto">
              {["All", "OP", "IP"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-10 px-4 rounded-lg text-xs font-bold border ${
                    activeTab === tab
                      ? "bg-[#0CB8A1] text-white border-[#0CB8A1]"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <select className="w-40 h-10 cursor-pointer rounded-lg border border-slate-200 px-3 text-xs outline-none bg-white text-slate-600">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>In Progress</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200 scrollWidth">
  <table className="min-w-[1700px] w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm whitespace-nowrap">
                  <th className="px-5 py-3 font-semibold ">Appointment ID</th>
                  <th className="px-5 py-3 font-semibold">Patient</th>
                  <th className="px-5 py-3 font-semibold">OP / IP</th>
                  <th className="px-5 py-3 font-semibold">Doctor</th>
                  <th className="px-5 py-3 font-semibold">Department</th>
                  <th className="px-5 py-3 font-semibold">Date</th>
                  <th className="px-5 py-3 font-semibold">Time</th>
                  <th className="px-5 py-3 font-semibold">Mode</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Consultation</th>
                  <th className="px-5 py-3 font-semibold">Orders</th>
                  <th className="px-5 py-3 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredAppointments.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700 whitespace-nowrap overflow-x-auto"
                  >
                    <td className="px-5 py-3 font-medium">{item.id}</td>
                    <td className="px-5 py-3 font-medium">{item.patient}</td>

                    <td className="px-5 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.type === "OP"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-5 py-3">{item.doctor}</td>
                    <td className="px-5 py-3">{item.department}</td>
                    <td className="px-5 py-3">{item.date}</td>
                    <td className="px-5 py-3">{item.time}</td>
                    <td className="px-5 py-3">{item.mode}</td>

                    <td className="px-5 py-3">
                      <span
                        className={`relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold before:content-[''] before:w-2 before:h-2 before:rounded-full ${
                          statusStyle[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                  <td className="px-5 py-3">
  <button
    className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
      item.type === "OP"
        ? "bg-blue-50 text-blue-600 border-blue-200"
        : "bg-orange-50 text-orange-600 border-orange-200"
    }`}
  >
    {item.type === "OP" ? "Preconsultation" : "View Visit"}
  </button>
</td>

<td className="px-5 py-3">
  <div className="flex items-center gap-2">
    <button className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
      <FaCapsules className="text-xs" />
    </button>

    <button className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
      <FaVial className="text-xs" />
    </button>
  </div>
</td>

<td className="px-5 py-3">
  <div className="flex justify-center gap-2">
    <button className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center">
      <FaEye className="text-xs" />
    </button>

    <button className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
      <FaShareAlt className="text-xs" />
    </button>

    <button className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
      <FaTimes className="text-xs" />
    </button>
  </div>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {openAddAppointment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
              <div className="shrink-0 flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
                <h2 className="text-lg font-bold text-white">
                  Book Appointment
                </h2>

                <button
                  onClick={() => setOpenAddAppointment(false)}
                  className="text-white text-xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto scrollHide p-5">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Patient Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Patient Name"
                        placeholder="Enter patient name"
                      />
                      <Input
                        label="Mobile Number"
                        placeholder="Enter mobile number"
                      />
                      <Select
                        label="Patient Type"
                        options={["OP", "IP", "Emergency"]}
                      />
                      <Input label="UHID / Patient ID" placeholder="PT-10234" />
                    </div>
                  </div>

                  <div className="border-t pt-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Appointment Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select
                        label="Department"
                        options={[
                          "Cardiology",
                          "Neurology",
                          "Orthopedics",
                          "Pediatrics",
                          "General Medicine",
                        ]}
                      />

                      <Select
                        label="Doctor"
                        options={[
                          "Dr. Sharma",
                          "Dr. Kumar",
                          "Dr. Patel",
                          "Dr. Monica",
                        ]}
                      />

                      <Input label="Appointment Date" type="date" />
                      <Input label="Appointment Time" type="time" />

                      <Select
                        label="Appointment Mode"
                        options={["In-Clinic", "Video Call", "Ward Visit"]}
                      />

                      <Select
                        label="Priority"
                        options={["Normal", "Urgent", "Emergency"]}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Reason / Notes
                    </h3>

                    <textarea
                      rows="3"
                      placeholder="Enter appointment reason"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
                    />
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex justify-end gap-3 px-5 py-4 border-t bg-slate-50">
                <button
                  onClick={() => setOpenAddAppointment(false)}
                  className="px-5 py-1 rounded-lg border border-teal-300 text-slate-600 text-sm font-semibold"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setOpenAddAppointment(false)}
                  className="px-5 py-1 rounded-lg bg-[#0CB8A1] text-white text-sm font-bold"
                >
                  Save Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const SummaryCard = ({ title, value }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <h2 className="text-xl font-bold text-[#0CB8A1] mt-2">{value}</h2>
    </div>
  );
};

const Input = ({ label, ...props }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-400"
      />
    </div>
  );
};

const Select = ({ label, options = [] }) => {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white focus:border-purple-400">
        <option>Select</option>
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Appointments;
