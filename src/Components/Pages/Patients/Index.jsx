import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Patients() {
  const [openAddPatient, setOpenAddPatient] = useState(false);
  const navigate = useNavigate();

  const handleClick = (patient) => {
    navigate("/patient-details", { state: { patient } });
  };
  const patients = [
    {
      id: "PT-10234",
      name: "Ravi Kumar",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      ageGender: "45 / Male",
      patientType: "OP",
      doctor: "Dr. Sharma",
      department: "Cardiology",
      contact: "9876543210",
      email: "ravi.kumar@gmail.com",
      lastVisit: "12 Mar 2026",
      lastVisitTime: "10:30 AM",
      status: "Active",
    },

    {
      id: "PT-10235",
      name: "Priya S",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      ageGender: "32 / Female",
      patientType: "IP",
      doctor: "Dr. Kumar",
      department: "Neurology",
      ward: "Ward B",
      bed: "B-08",
      contact: "9123456780",
      email: "priya.s@gmail.com",
      lastVisit: "10 Mar 2026",
      lastVisitTime: "02:15 PM",
      status: "Follow-up",
    },

    {
      id: "PT-10236",
      name: "Arjun Mehta",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      ageGender: "28 / Male",
      patientType: "OP",
      doctor: "Dr. Patel",
      department: "Orthopedics",
      contact: "9988776655",
      email: "arjun.mehta@gmail.com",
      lastVisit: "08 Mar 2026",
      lastVisitTime: "11:45 AM",
      status: "Critical",
    },

    {
      id: "PT-10237",
      name: "Sneha Patel",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      ageGender: "38 / Female",
      patientType: "IP",
      doctor: "Dr. Monica",
      department: "General Medicine",
      ward: "ICU",
      bed: "ICU-03",
      contact: "9871122334",
      email: "sneha.patel@gmail.com",
      lastVisit: "05 Mar 2026",
      lastVisitTime: "08:20 PM",
      status: "Active",
    },
  ];

  const statusStyle = {
    Active: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
    "Follow-up": "bg-yellow-50 text-yellow-600 before:bg-yellow-500",
    Critical: "bg-red-50 text-red-600 before:bg-red-500",
  };

  const InputField = ({ label, ...props }) => {
    return (
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
  };

  const SelectField = ({ label, options = [] }) => {
    return (
      <div>
        <label className="text-xs font-semibold text-slate-600 mb-1 block">
          {label}
        </label>

        <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white">
          <option>Select</option>

          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen font-sans">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <FaArrowRight className="text-purple-600 text-sm" />
              <h2 className="text-xl font-bold text-slate-800">Patients</h2>
            </div>
          </div>
          <div className="flex items-end gap-4 mb-4">
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

                <input
                  type="text"
                  placeholder="Search (Name / Mobile / UHID)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-purple-400"
                />
              </div>
            </div>
            <div className="w-40 ml-auto">
              <select className="w-full h-10 cursor-pointer rounded-lg border border-slate-200 px-3 text-xs outline-none bg-white text-slate-600">
                <option>All Status</option>
                <option>Active</option>
                <option>Follow-up</option>
                <option>Critical</option>
              </select>
            </div>
            <button
              onClick={() => setOpenAddPatient(true)}
              className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
            >
              <FaPlus className="text-xs" />
              Add New Patient
            </button>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            {/* HORIZONTAL SCROLL */}
            <div className="overflow-x-auto scrollWidth">
              <table className="w-full min-w-[1400px] text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white text-sm whitespace-nowrap">
                    <th className="px-5 py-3 font-semibold">Name</th>

                    <th className="px-5 py-3 font-semibold">Age / Gender</th>

                    <th className="px-5 py-3 font-semibold">Mobile Number</th>

                    <th className="px-5 py-3 font-semibold">Email</th>

                    <th className="px-5 py-3 font-semibold">OP / IP</th>

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
                      className="border-b last:border-b-0 border-slate-200 text-sm text-slate-700 whitespace-nowrap"
                    >
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          {/* PROFILE IMAGE */}
                          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* NAME + ID */}
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-700">
                              {item.name}
                            </span>

                            <span className="text-xs text-slate-400 mt-1">
                              {item.id}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-3">{item.ageGender}</td>

                      <td className="px-5 py-3">{item.contact}</td>

                      <td className="px-5 py-3">{item.email}</td>

                      <td className="px-5 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.patientType === "OP"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {item.patientType}
                        </span>
                      </td>

                      <td className="px-5 py-3 font-medium">{item.doctor}</td>

                      <td className="px-5 py-3">{item.department}</td>

                      <td className="px-5 py-3">{item.lastVisit}</td>

                      <td className="px-5 py-3">{item.lastVisitTime}</td>

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
                        <div className="flex justify-center">
                          <button
                            className="px-3 py-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 text-xs font-bold flex items-center gap-2"
                            onClick={() => handleClick(item)}
                          >
                            <FaEye className="text-xs" />
                            View Detail
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-500">
              Showing 1 to 4 of 120 patients
            </p>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-400 flex items-center justify-center">
                <FaChevronLeft className="text-xs" />
              </button>

              {[1, 2, 3,].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-md border text-xs font-semibold ${
                    page === 1
                      ? "bg-purple-50 border-purple-200 text-purple-600"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-600 text-xs">
                ...
              </button> */}
              {/* <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-600 text-xs">
                5
              </button> */}

              <button className="w-8 h-8 rounded-md border border-slate-200 text-slate-500 flex items-center justify-center">
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        {openAddPatient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
              <div className="shrink-0 flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
                <h2 className="text-lg font-bold text-white">
                  Add New Patient
                </h2>

                <button
                  onClick={() => setOpenAddPatient(false)}
                  className="text-white text-xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 scrollHide">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Patient Basic Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField
                        label="Patient Name"
                        placeholder="Enter patient name"
                      />

                      <InputField
                        label="Mobile Number"
                        placeholder="Enter mobile number"
                      />

                      <InputField
                        label="Age"
                        type="number"
                        placeholder="Enter age"
                      />

                      <SelectField
                        label="Gender"
                        options={["Male", "Female", "Other"]}
                      />

                      <InputField label="Date of Birth" type="date" />

                      <SelectField
                        label="Blood Group"
                        options={[
                          "A+",
                          "A-",
                          "B+",
                          "B-",
                          "O+",
                          "O-",
                          "AB+",
                          "AB-",
                        ]}
                      />
                    </div>
                  </div>
                  <div className="border-t pt-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Visit Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <SelectField
                        label="Visit Type"
                        options={["OPD", "IPD", "Emergency"]}
                      />

                      <SelectField
                        label="Department"
                        options={[
                          "Cardiology",
                          "Neurology",
                          "Orthopedics",
                          "Pediatrics",
                          "General Medicine",
                        ]}
                      />

                      <SelectField
                        label="Doctor"
                        options={["Dr. Sharma", "Dr. Patel", "Dr. Kumar"]}
                      />

                      <SelectField
                        label="Priority"
                        options={["Normal", "Urgent", "Emergency"]}
                      />
                    </div>
                  </div>
                  <div className="border-t pt-5">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">
                      Address Details
                    </h3>

                    <textarea
                      rows="3"
                      placeholder="Enter address"
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                    />
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex justify-end gap-3 px-5 py-4 border-t bg-slate-50">
                <button
                  onClick={() => setOpenAddPatient(false)}
                  className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 text-sm font-semibold"
                >
                  Cancel
                </button>

                <button className="px-5 py-2 rounded-lg bg-[#0CB8A1] text-white text-sm font-bold">
                  Save Patient
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Patients;
