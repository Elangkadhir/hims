import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaProcedures,
  FaClock,
  FaUserInjured,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OPD() {
  const [openAddPatient, setOpenAddPatient] = useState(false);
  const navigate = useNavigate();

  const handleClick = (patient) => {
    navigate("/patient-details", { state: { patient } });
  };

  const cards = [
    {
      title: "Total OPD",
      value: 128,
      icon: <FaUserInjured />,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Waiting Patients",
      value: 32,
      icon: <FaClock />,
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      title: "In Consultation",
      value: 18,
      icon: <FaProcedures />,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Completed",
      value: 78,
      icon: <FaCheckCircle />,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  const patients = [
    {
      token: "OPD-1001",
      id: "PT-10234",
      name: "Ravi Kumar",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      ageGender: "45 / Male",
      doctor: "Dr. Sharma",
      department: "Cardiology",
      contact: "9876543210",
      email: "ravi.kumar@gmail.com",
      date: "24 May 2026",
      time: "10:15 AM",
      status: "Waiting",
    },

    {
      token: "OPD-1002",
      id: "PT-10235",
      name: "Priya S",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      ageGender: "32 / Female",
      doctor: "Dr. Kumar",
      department: "Neurology",
      contact: "9123456780",
      email: "priya.s@gmail.com",
      date: "24 May 2026",
      time: "10:30 AM",
      status: "In Consultation",
    },

    {
      token: "OPD-1003",
      id: "PT-10236",
      name: "Arjun Mehta",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      ageGender: "28 / Male",
      doctor: "Dr. Patel",
      department: "Orthopedics",
      contact: "9988776655",
      email: "arjun.mehta@gmail.com",
      date: "23 May 2026",
      time: "11:00 AM",
      status: "Completed",
    },

    {
      token: "OPD-1004",
      id: "PT-10237",
      name: "Sneha Patel",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      ageGender: "38 / Female",
      doctor: "Dr. Monica",
      department: "General Medicine",
      contact: "9871122334",
      email: "sneha.patel@gmail.com",
      date: "24 May 2026",
      time: "11:20 AM",
      status: "Waiting",
    },

    {
      token: "OPD-1005",
      id: "PT-10238",
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      ageGender: "50 / Male",
      doctor: "Dr. Sharma",
      department: "Cardiology",
      contact: "9001122334",
      email: "vikram.singh@gmail.com",
      date: "24 May 2026",
      time: "11:45 AM",
      status: "In Consultation",
    },

    {
      token: "OPD-1006",
      id: "PT-10239",
      name: "Meena Joseph",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      ageGender: "29 / Female",
      doctor: "Dr. Kumar",
      department: "Dermatology",
      contact: "8899001122",
      email: "meena.joseph@gmail.com",
      date: "24 May 2026",
      time: "12:10 PM",
      status: "Completed",
    },
  ];

  const statusStyle = {
    Waiting: "bg-orange-50 text-orange-600 before:bg-orange-500",
    "In Consultation": "bg-blue-50 text-blue-600 before:bg-blue-500",
    Completed: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
  };

  const InputField = ({ label, ...props }) => (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
      />
    </div>
  );

  const SelectField = ({ label, options = [] }) => (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>
      <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
        <option>Select</option>
        {options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        {/* HEADER */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-purple-600 text-sm" />
              <h2 className="text-xl font-bold text-slate-800">OPD</h2>
            </div>

            <button
              onClick={() => setOpenAddPatient(true)}
              className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              New OPD Registration
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <h2 className="text-2xl font-bold text-slate-800 mt-1">
                    {item.value}
                  </h2>
                </div>

                <div className={`p-3 rounded-lg text-lg ${item.color}`}>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
          {/* SEARCH */}
          <div className="flex items-end gap-4 mb-4">
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                <input
                  type="text"
                  placeholder="Search (Name / Token / Mobile)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-purple-400"
                />
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-lg border border-slate-200">
            {/* HORIZONTAL SCROLL */}
            <div className="overflow-x-auto scrollWidth">
              <table className="w-full min-w-[1500px] text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm whitespace-nowrap">
                    <th className="px-5 py-3 font-semibold">Token</th>

                    <th className="px-5 py-3 font-semibold">Patient</th>

                    <th className="px-5 py-3 font-semibold">Age / Gender</th>

                    <th className="px-5 py-3 font-semibold">Email</th>

                    <th className="px-5 py-3 font-semibold">Mobile Number</th>

                    <th className="px-5 py-3 font-semibold">Doctor</th>

                    <th className="px-5 py-3 font-semibold">Department</th>

                    <th className="px-5 py-3 font-semibold">Date</th>

                    <th className="px-5 py-3 font-semibold">Time</th>

                    <th className="px-5 py-3 font-semibold">Status</th>

                    <th className="px-5 py-3 font-semibold text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {patients.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 text-sm text-slate-700 whitespace-nowrap hover:bg-slate-50 transition"
                    >
                      {/* TOKEN */}
                      <td className="px-5 py-3 font-bold text-purple-600">
                        {item.token}
                      </td>

                      {/* PATIENT */}
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          {/* PROFILE IMAGE */}
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* NAME + ID */}
                          <div>
                            <p className="font-semibold text-slate-800">
                              {item.name}
                            </p>

                            <p className="text-xs text-slate-500">{item.id}</p>
                          </div>
                        </div>
                      </td>

                      {/* AGE / GENDER */}
                      <td className="px-5 py-3">{item.ageGender}</td>

                      {/* EMAIL */}
                      <td className="px-5 py-3">{item.email}</td>

                      {/* MOBILE */}
                      <td className="px-5 py-3">{item.contact}</td>

                      {/* DOCTOR */}
                      <td className="px-5 py-3">{item.doctor}</td>

                      {/* DEPARTMENT */}
                      <td className="px-5 py-3">{item.department}</td>

                      {/* DATE */}
                      <td className="px-5 py-3">{item.date}</td>

                      {/* TIME */}
                      <td className="px-5 py-3 font-medium text-slate-600">
                        {item.time}
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-3">
                        <span
                          className={`relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold before:content-[''] before:w-2 before:h-2 before:rounded-full ${
                            statusStyle[item.status]
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      {/* ACTION */}
                      <td className="px-5 py-3">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleClick(item)}
                            className="px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold flex items-center gap-2"
                          >
                            <FaEye className="text-xs" />
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-500">
              Showing {patients.length} OPD patients
            </p>
          </div>
        </div>

        {/* MODAL */}
        {openAddPatient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-5 py-3 border-b bg-[#8C3EA8] text-white font-bold">
                OPD Registration
              </div>

              <div className="p-5 grid grid-cols-2 gap-4">
                <InputField label="Patient Name" />
                <InputField label="Mobile Number" />
                <InputField label="Age" />

                <SelectField
                  label="Gender"
                  options={["Male", "Female", "Other"]}
                />

                <SelectField
                  label="Department"
                  options={["Cardiology", "Neurology", "Orthopedics"]}
                />

                <SelectField
                  label="Doctor"
                  options={["Dr. Sharma", "Dr. Kumar"]}
                />
              </div>

              <div className="flex justify-end gap-3 p-4 border-t bg-slate-50">
                <button
                  onClick={() => setOpenAddPatient(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button className="px-4 py-2 bg-[#8C3EA8] text-white rounded-lg">
                  Register OPD
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OPD;
