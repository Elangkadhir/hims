import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaProcedures,
  FaSearch,
  FaPlayCircle,
  FaCheckCircle,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";

function OtManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);
  const [modalType, setModalType] = useState("");

  const summaryCards = [
    {
      title: "Available Beds",
      value: 2,
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    {
      title: "In Surgery",
      value: 3,
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      title: "Cleaning",
      value: 1,
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    {
      title: "Emergency",
      value: 1,
      bg: "bg-red-50",
      text: "text-red-600",
    },
  ];

  const otList = [
    {
      otNo: "OT-01",
      patientId: "PT-10234",
      patient: "Arjun Mehta",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      email: "arjun.mehta@gmail.com",
      mobile: "9988776655",
      surgery: "Appendectomy",
      surgeon: "Dr. Sharma",
      anesthetist: "Dr. Monica",
      date: "24 May 2026",
      time: "09:30 AM",
      duration: "2 hrs",
      status: "In Surgery",
    },

    {
      otNo: "OT-02",
      patientId: "PT-10235",
      patient: "Priya Nair",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "priya.nair@gmail.com",
      mobile: "9123456780",
      surgery: "Gallbladder Surgery",
      surgeon: "Dr. Kumar",
      anesthetist: "Dr. Peter",
      date: "24 May 2026",
      time: "11:00 AM",
      duration: "1.5 hrs",
      status: "Scheduled",
    },

    {
      otNo: "OT-03",
      patientId: "PT-10236",
      patient: "Hari Prasad",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      email: "hari.prasad@gmail.com",
      mobile: "9876541122",
      surgery: "Cardiac Procedure",
      surgeon: "Dr. Rao",
      anesthetist: "Dr. John",
      date: "24 May 2026",
      time: "01:00 PM",
      duration: "4 hrs",
      status: "Completed",
    },

    {
      otNo: "OT-04",
      patientId: "PT-10237",
      patient: "Kavya Krishnan",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      email: "kavya.krishnan@gmail.com",
      mobile: "9001122334",
      surgery: "Emergency Trauma",
      surgeon: "Dr. Patel",
      anesthetist: "Dr. Allen",
      date: "24 May 2026",
      time: "02:30 PM",
      duration: "3 hrs",
      status: "Emergency",
    },
  ];

  const filteredOt = otList.filter(
    (item) =>
      item.patient.toLowerCase().includes(search.toLowerCase()) ||
      item.otNo.toLowerCase().includes(search.toLowerCase()) ||
      item.surgeon.toLowerCase().includes(search.toLowerCase()),
  );

  const statusStyle = {
    Scheduled: "bg-orange-50 text-orange-600",
    "In Surgery": "bg-blue-50 text-blue-600",
    Completed: "bg-emerald-50 text-emerald-600",
    Emergency: "bg-red-50 text-red-600",
  };

  function Info({ label, value }) {
    return (
      <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
        <p className="text-[11px] text-slate-500 font-semibold">{label}</p>
        <p className="text-sm font-bold text-slate-800 mt-1">{value}</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 px-5 py-4 border-b bg-slate-50">
          <button
            onClick={() => navigate("/dashboard-new")}
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center"
          >
            <FaArrowLeft className="text-slate-600 text-sm" />
          </button>

          <div>
            <h2 className="text-sm font-bold text-slate-800">
              Operation Theatre Management
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Live OT availability & surgery tracking
            </p>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {summaryCards.map((item, index) => (
              <div key={index} className="border rounded-xl p-4 bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-base font-sans text-slate-500 font-semibold">
                      {item.title}
                    </p>

                    <h2 className={`text-xl font-bold mt-2 ${item.text}`}>
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}
                  >
                    <FaProcedures className={item.text} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />

            <input
              type="text"
              placeholder="Search OT / Patient / Surgeon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <div className="overflow-x-auto scrollWidth">
              <table className="w-full min-w-[1700px] text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] border-b text-[11px] uppercase text-white whitespace-nowrap">
                    <th className="px-4 py-3">OT No</th>

                    <th className="px-4 py-3">Patient</th>

                    <th className="px-4 py-3">Email</th>

                    <th className="px-4 py-3">Mobile Number</th>

                    <th className="px-4 py-3">Surgery</th>

                    <th className="px-4 py-3">Surgeon</th>

                    <th className="px-4 py-3">Anesthesia</th>

                    <th className="px-4 py-3">Date</th>

                    <th className="px-4 py-3">Time</th>

                    <th className="px-4 py-3">Duration</th>

                    <th className="px-4 py-3">Status</th>

                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredOt.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 text-sm whitespace-nowrap hover:bg-slate-50 transition"
                    >
                      {/* OT NUMBER */}
                      <td className="px-4 py-4 font-semibold text-violet-600">
                        {item.otNo}
                      </td>

                      {/* PATIENT */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          {/* IMAGE */}
                          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.patient}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* NAME + ID */}
                          <div>
                            <p className="font-semibold text-slate-800">
                              {item.patient}
                            </p>

                            <p className="text-xs text-slate-500 mt-1">
                              {item.patientId}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* EMAIL */}
                      <td className="px-4 py-4">{item.email}</td>

                      {/* MOBILE */}
                      <td className="px-4 py-4">{item.mobile}</td>

                      {/* SURGERY */}
                      <td className="px-4 py-4">{item.surgery}</td>

                      {/* SURGEON */}
                      <td className="px-4 py-4">{item.surgeon}</td>

                      {/* ANESTHETIST */}
                      <td className="px-4 py-4">{item.anesthetist}</td>

                      {/* DATE */}
                      <td className="px-4 py-4">{item.date}</td>

                      {/* TIME */}
                      <td className="px-4 py-4">{item.time}</td>

                      {/* DURATION */}
                      <td className="px-4 py-4">{item.duration}</td>

                      {/* STATUS */}
                      <td className="px-4 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyle[item.status]}`}
                        >
                          {item.status}
                        </span>
                      </td>

                      {/* ACTION */}
                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedCase(item);
                              setModalType("view");
                            }}
                            className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold flex items-center gap-2"
                          >
                            <FaPlayCircle />
                            View
                          </button>

                          <button
                            onClick={() => {
                              setSelectedCase(item);
                              setModalType("update");
                            }}
                            className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-bold flex items-center gap-2"
                          >
                            <FaCheckCircle />
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8]">
                <div>
                  <h2 className="text-sm font-bold text-white">
                    {modalType === "view"
                      ? "OT Case Details"
                      : "Update Surgery Status"}
                  </h2>
                  <p className="text-xs text-white mt-1">
                    {selectedCase.patient} · {selectedCase.otNo}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedCase(null);
                    setModalType("");
                  }}
                  className="text-white hover:text-red-800 text-lg"
                >
                  ×
                </button>
              </div>

              <div className="p-5 max-h-[70vh] overflow-y-auto scrollHide">
                {modalType === "view" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <Info label="Patient Name" value={selectedCase.patient} />
                    <Info label="OT Number" value={selectedCase.otNo} />
                    <Info label="Surgery" value={selectedCase.surgery} />
                    <Info label="Surgeon" value={selectedCase.surgeon} />
                    <Info
                      label="Anesthetist"
                      value={selectedCase.anesthetist}
                    />
                    <Info label="Scheduled Time" value={selectedCase.time} />
                    <Info label="Duration" value={selectedCase.duration} />
                    <Info label="Status" value={selectedCase.status} />
                    <Info label="Diagnosis" value="Acute abdominal pain" />
                    <Info label="Consent Status" value="Completed" />
                    <Info label="Blood Required" value="2 Units" />
                    <Info label="Equipment Status" value="Ready" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Surgery Stage
                      </label>
                      <select className="w-full mt-1 border rounded-xl px-3 py-2 text-sm outline-none">
                        <option>Patient Shifted</option>
                        <option>Anesthesia Started</option>
                        <option>Surgery Started</option>
                        <option>In Progress</option>
                        <option>Closing</option>
                        <option>Recovery</option>
                        <option>Completed</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600">
                          Start Time
                        </label>
                        <input
                          type="time"
                          className="w-full mt-1 border rounded-xl px-3 py-2 text-sm outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600">
                          End Time
                        </label>
                        <input
                          type="time"
                          className="w-full mt-1 border rounded-xl px-3 py-2 text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Delay Reason
                      </label>
                      <input
                        type="text"
                        placeholder="Enter delay reason if any"
                        className="w-full mt-1 border rounded-xl px-3 py-2 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600">
                        Surgeon Notes
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Enter notes"
                        className="w-full mt-1 border rounded-xl px-3 py-2 text-sm outline-none resize-none"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-3 border-t">
                      <button
                        onClick={() => {
                          setSelectedCase(null);
                          setModalType("");
                        }}
                        className="px-4 py-2 rounded-lg border text-sm"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCase(null);
                          setModalType("");
                        }}
                        className="px-4 py-2 rounded-lg bg-[#0CB8A1] text-white text-sm font-semibold"
                      >
                        Save Update
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OtManagement;
