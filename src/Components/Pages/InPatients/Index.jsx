// IPD.jsx
import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  FaArrowRight,
  FaSearch,
  FaPlus,
  FaEye,
  FaBed,
  FaUserInjured,
  FaProcedures,
  FaCheckCircle,
  FaHospital,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

function IPD() {
  const [openAddPatient, setOpenAddPatient] = useState(false);
  const navigate = useNavigate();
  const [openAssignModal, setOpenAssignModal] = useState(false);

  const handleClick = (patient) => {
    navigate("/in-patient-details", { state: { patient } });
  };

  const cards = [
    {
      title: "Total IPD",
      value: 86,
      icon: <FaHospital />,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Occupied Beds",
      value: 64,
      icon: <FaBed />,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Critical Care",
      value: 12,
      icon: <FaHeartbeat />,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Discharged",
      value: 24,
      icon: <FaCheckCircle />,
      color: "text-emerald-600 bg-emerald-50",
    },
  ];

  const patients = [
    {
      admissionNo: "IPD-2001",
      patientType: "IP",
      id: "PT-20034",
      name: "Ramesh Kumar",
      ageGender: "54 / Male",
      doctor: "Dr. Sharma",
      ward: "General Ward",
      bed: "B-12",
      diagnosis: "Hypertension",
      admissionDate: "22 May 2026",
      status: "Admitted",
    },

    {
      admissionNo: "IPD-2002",
      patientType: "IP",
      id: "PT-20035",
      name: "Anitha S",
      ageGender: "38 / Female",
      doctor: "Dr. Monica",
      ward: "ICU",
      bed: "ICU-04",
      diagnosis: "Cardiac Arrest",
      admissionDate: "23 May 2026",
      status: "Critical",
    },

    {
      admissionNo: "IPD-2003",
      patientType: "IP",
      id: "PT-20036",
      name: "Vijay Mehta",
      ageGender: "46 / Male",
      doctor: "Dr. Kumar",
      ward: "Private Room",
      bed: "P-08",
      diagnosis: "Diabetes",
      admissionDate: "20 May 2026",
      status: "Under Treatment",
    },

    {
      admissionNo: "IPD-2004",
      patientType: "IP",
      id: "PT-20037",
      name: "Priya Joseph",
      ageGender: "29 / Female",
      doctor: "Dr. Patel",
      ward: "Semi Private",
      bed: "SP-05",
      diagnosis: "Fever",
      admissionDate: "21 May 2026",
      status: "Discharged",
    },
  ];

  const statusStyle = {
    Admitted: "bg-blue-50 text-blue-600 before:bg-blue-500",
    Critical: "bg-red-50 text-red-600 before:bg-red-500",
    "Under Treatment": "bg-yellow-50 text-yellow-600 before:bg-yellow-500",
    Discharged: "bg-emerald-50 text-emerald-600 before:bg-emerald-500",
  };

  const InputField = ({ label, ...props }) => (
    <div>
      <label className="text-xs font-semibold text-slate-600 mb-1 block">
        {label}
      </label>

      <input
        {...props}
        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-400"
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
              <FaArrowRight className="text-indigo-600 text-sm" />

              <h2 className="text-xl font-bold text-slate-800">IPD Patients</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpenAddPatient(true)}
                className="bg-[#8C3EA8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
              >
                <FaPlus className="text-xs" />
                New IPD Admission
              </button>
              <button
                className="bg-[#0D9488] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
                onClick={() => setOpenAssignModal(true)}
              >
                <FaPlus className="text-xs" />
                Assign
              </button>
            </div>
          </div>

          {/* CARDS */}
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
                  placeholder="Search (Name / Admission No / Bed)"
                  className="w-full h-10 rounded-lg border border-slate-200 pl-9 pr-3 text-xs outline-none focus:border-indigo-400"
                />
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] text-white text-sm">
                  <th className="px-5 py-3 font-semibold">Admission No</th>

                  <th className="px-5 py-3 font-semibold">Patient</th>

                  <th className="px-5 py-3 font-semibold">Age / Gender</th>

                  <th className="px-5 py-3 font-semibold">Doctor</th>

                  <th className="px-5 py-3 font-semibold">Ward</th>

                  <th className="px-5 py-3 font-semibold">Bed</th>

                  <th className="px-5 py-3 font-semibold">Diagnosis</th>

                  <th className="px-5 py-3 font-semibold">Admission Date</th>

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
                    className="border-b border-slate-200 text-sm text-slate-700"
                  >
                    {/* ADMISSION */}
                    <td className="px-5 py-3 font-bold text-indigo-600">
                      {item.admissionNo}
                    </td>

                    {/* PATIENT */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                          {item.name?.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {item.name}
                          </p>

                          <p className="text-xs text-slate-500">{item.id}</p>
                        </div>
                      </div>
                    </td>

                    {/* AGE */}
                    <td className="px-5 py-3">{item.ageGender}</td>

                    {/* DOCTOR */}
                    <td className="px-5 py-3">{item.doctor}</td>

                    {/* WARD */}
                    <td className="px-5 py-3">{item.ward}</td>

                    {/* BED */}
                    <td className="px-5 py-3 font-semibold text-slate-700">
                      {item.bed}
                    </td>

                    {/* DIAGNOSIS */}
                    <td className="px-5 py-3">{item.diagnosis}</td>

                    {/* DATE */}
                    <td className="px-5 py-3">{item.admissionDate}</td>

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
                          className="px-3 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center gap-2"
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

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-slate-500">
              Showing {patients.length} IPD patients
            </p>
          </div>
        </div>

        {/* MODAL */}
        {openAddPatient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-5 py-3 border-b bg-gradient-to-r from-[#08B8A8] via-[#5E73B7] to-[#8C3EA8] text-white font-bold">
                IPD Admission
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
                  options={[
                    "Cardiology",
                    "Neurology",
                    "Orthopedics",
                    "General Medicine",
                  ]}
                />

                <SelectField
                  label="Doctor"
                  options={["Dr. Sharma", "Dr. Kumar", "Dr. Monica"]}
                />

                <SelectField
                  label="Ward Type"
                  options={[
                    "General Ward",
                    "Semi Private",
                    "Private Room",
                    "ICU",
                  ]}
                />

                <InputField label="Bed Number" />

                <InputField label="Diagnosis" />

                <InputField label="Admission Date" type="date" />
              </div>

              <div className="flex justify-end gap-3 p-4 border-t bg-slate-50">
                <button
                  onClick={() => setOpenAddPatient(false)}
                  className="px-4 py-1 border rounded-lg"
                >
                  Cancel
                </button>

                <button className="px-4 py-1 bg-[#8C3EA8] text-white rounded-lg">
                  Admit Patient
                </button>
              </div>
            </div>
          </div>
        )}

        {openAssignModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-2 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-lg font-semibold">
                    Assign Patient
                  </h2>
                  {/* <p className="text-teal-100 text-xs mt-1">
                  Assign patient to doctor and nurse
                </p> */}
                </div>

                <button
                  onClick={() => setOpenAssignModal(false)}
                  className="text-white text-xl"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Patient */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Patient Name
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-teal-500">
                      <option>Select Patient</option>
                      <option>Raj Kumar</option>
                      <option>Priya Sharma</option>
                      <option>Arun Prakash</option>
                    </select>
                  </div>

                  {/* Ward */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Ward
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-teal-500">
                      <option>Select Ward</option>
                      <option>General Ward</option>
                      <option>ICU</option>
                      <option>NICU</option>
                      <option>Emergency Ward</option>
                      <option>Private Ward</option>
                      <option>Semi Private Ward</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Room No
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Room Number"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 flex items-center gap-2">
                      <FaUserDoctor className="text-blue-600" />
                      Assign Doctor
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-500">
                      <option>Select Doctor</option>
                      <option>Dr. Arvind</option>
                      <option>Dr. Meena</option>
                      <option>Dr. Karthik</option>
                    </select>
                  </div>

                  {/* Nurse */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 flex items-center gap-2">
                      <FaUserNurse className="text-pink-600" />
                      Assign Nurse
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-pink-500">
                      <option>Select Nurse</option>
                      <option>Nurse Divya</option>
                      <option>Nurse Keerthi</option>
                      <option>Nurse Swetha</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Priority
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-orange-500">
                      <option>Normal</option>
                      <option>Urgent</option>
                      <option>Critical</option>
                    </select>
                  </div>

                  {/* Shift */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">
                      Shift
                    </label>

                    <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-1 focus:ring-purple-500">
                      <option>Morning</option>
                      <option>Evening</option>
                      <option>Night</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    Notes
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Enter notes..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none resize-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setOpenAssignModal(false)}
                    className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button className="px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700">
                    Assign Patient
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default IPD;
