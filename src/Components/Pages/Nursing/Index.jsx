import { useState } from "react";
import Layout from "../../Layout/Layout";
import {
  HiDotsVertical,
  HiOutlineOfficeBuilding,
  HiOutlinePencilAlt,
  HiOutlineSwitchHorizontal,
  HiOutlineUser,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const DATA = [
  {
    id: "N-001",
    name: "Priya Ramesh",
    gender: "Female",
    age: 29,
    contact: "+91 98401 12345",
    dept: "ICU",
    ward: "Ward A",
    shift: "Morning",
    patients: 6,
    beds: "A1, A2, A3",
    duty: "On Duty",
    spec: "Critical Care",
    sup: "Dr. Arjun",
  },

  {
    id: "N-002",
    name: "Meena Krishnan",
    gender: "Female",
    age: 34,
    contact: "+91 94440 67890",
    dept: "General",
    ward: "Ward B",
    shift: "Evening",
    patients: 8,
    beds: "B4, B5",
    duty: "On Duty",
    spec: "General Nursing",
    sup: "Dr. Suresh",
  },

  {
    id: "N-003",
    name: "Kavitha Devi",
    gender: "Female",
    age: 41,
    contact: "+91 91760 23456",
    dept: "Emergency",
    ward: "ER Block",
    shift: "Night",
    patients: 4,
    beds: "ER1, ER2",
    duty: "On Duty",
    spec: "Critical Care",
    sup: "Dr. Nair",
  },

  {
    id: "N-004",
    name: "Lakshmi Venkat",
    gender: "Female",
    age: 27,
    contact: "+91 99400 34567",
    dept: "Pediatrics",
    ward: "Ward P",
    shift: "Morning",
    patients: 5,
    beds: "P1, P2, P3",
    duty: "Off Duty",
    spec: "General Nursing",
    sup: "Dr. Radha",
  },
];

const DEPT_PILL = {
  ICU: "bg-red-50 text-red-700",
  General: "bg-blue-50 text-blue-700",
  Emergency: "bg-amber-50 text-amber-700",
  OT: "bg-violet-50 text-violet-700",
  Pediatrics: "bg-pink-50 text-pink-700",
};

const SHIFT_PILL = {
  Morning: "bg-amber-50 text-amber-700",
  Evening: "bg-violet-50 text-violet-700",
  Night: "bg-slate-100 text-slate-700",
};

const DUTY_PILL = {
  "On Duty": "bg-emerald-50 text-emerald-700",
  "Off Duty": "bg-slate-100 text-slate-600",
  Leave: "bg-amber-50 text-amber-700",
};

function Pill({ text, cls }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cls}`}>
      {text}
    </span>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">
      {initials}
    </div>
  );
}

const SHIFTS = ["All", "Morning", "Evening", "Night"];

export default function NursingTable() {
  const [search, setSearch] = useState("");
  const [deptF, setDeptF] = useState("All");
  const [shiftF, setShiftF] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();
  const filtered = DATA.filter((n) => {
    const q = search.toLowerCase();

    const mq =
      !q ||
      n.name.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q) ||
      n.ward.toLowerCase().includes(q);

    return (
      mq &&
      (deptF === "All" || n.dept === deptF) &&
      (shiftF === "All" || n.shift === shiftF)
    );
  });

  const handleViewProfile = (nurse) => {
    navigate("/nurseprofile", {
      state: { nurse },
    });

    setOpenMenu(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
          {/* HEADER */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
            {/* LEFT */}
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Nursing Management
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                Total Nurses : {filtered.length}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* SEARCH */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  🔍
                </span>

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search nurse..."
                  className="w-56 h-10 rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs outline-none focus:border-purple-400"
                />
              </div>

              {/* SHIFT FILTER */}
              <select
                value={shiftF}
                onChange={(e) => setShiftF(e.target.value)}
                className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs outline-none focus:border-purple-400 text-slate-600"
              >
                {SHIFTS.map((shift) => (
                  <option key={shift}>{shift}</option>
                ))}
              </select>
            </div>
          </div>

          {/* TOP FILTER TABS */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            {[
              "All Nurses",
              "ICU",
              "General",
              "Emergency",
              "OT",
              "Pediatrics",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setDeptF(tab === "All Nurses" ? "All" : tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  deptF === (tab === "All Nurses" ? "All" : tab)
                    ? "bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-purple-300 hover:text-purple-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto overflow-y-visible rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] text-white">
                  <th className="px-4 py-3 text-left">Name</th>

                  <th className="px-4 py-3 text-left">Age / Gender</th>

                  <th className="px-4 py-3 text-left">Department</th>

                  <th className="px-4 py-3 text-left">Specialization</th>

                  <th className="px-4 py-3 text-left">Shift</th>

                  <th className="px-4 py-3 text-left">Patients</th>

                  <th className="px-4 py-3 text-left">Duty Status</th>

                  <th className="px-4 py-3 text-left">Supervisor</th>

                  <th className="px-4 py-3 text-left">Contact</th>

                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((n, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                  >
                    {/* NURSE */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={n.name} />

                        <div>
                          <h3 className="font-semibold text-slate-800">
                            {n.name}
                          </h3>

                          <p className="text-xs text-slate-400 mt-0.5">
                            {n.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* AGE / GENDER */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-700">
                          {n.age} yrs
                        </span>

                        <span className="text-xs text-slate-400">
                          {n.gender}
                        </span>
                      </div>
                    </td>

                    {/* DEPARTMENT */}
                    <td className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <Pill text={n.dept} cls={DEPT_PILL[n.dept]} />

                        <span className="text-xs text-slate-400">{n.ward}</span>
                      </div>
                    </td>

                    {/* SPECIALIZATION */}
                    <td className="px-4 py-3 text-slate-700 font-medium">
                      {n.spec}
                    </td>

                    {/* SHIFT */}
                    <td className="px-4 py-3">
                      <Pill text={n.shift} cls={SHIFT_PILL[n.shift]} />
                    </td>

                    {/* PATIENTS */}
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-700">
                        {n.patients} Patients
                      </div>

                      <p className="text-xs text-slate-400">{n.beds}</p>
                    </td>

                    {/* DUTY */}
                    <td className="px-4 py-3">
                      <Pill text={n.duty} cls={DUTY_PILL[n.duty]} />
                    </td>

                    {/* SUPERVISOR */}
                    <td className="px-4 py-3 text-slate-700 font-medium">
                      {n.sup}
                    </td>

                    {/* CONTACT */}
                    <td className="px-4 py-3 text-slate-600">{n.contact}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {/* VIEW BUTTON */}
                        <button
                          onClick={() => handleViewProfile(n)}
                          className="h-9 px-4 rounded-xl bg-violet-50 text-violet-600 text-sm font-semibold flex items-center gap-2 hover:bg-violet-100 transition"
                        >
                          <HiOutlineUser className="text-base" />
                          View
                        </button>

                        {/* EDIT BUTTON */}
                        <button className="h-9 px-4 rounded-xl bg-sky-50 text-sky-600 text-sm font-semibold flex items-center gap-2 hover:bg-sky-100 transition">
                          <HiOutlinePencilAlt className="text-base" />
                          Edit
                        </button>
                      </div>
                    </td>
                    {/* ACTION */}
                    {/* <td className="px-4 py-3 relative">
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === n.id ? null : n.id)
                        }
                        className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition"
                      >
                        <HiDotsVertical className="text-lg" />
                      </button>

                      {openMenu === n.id && (
                        <div className="absolute right-0 top-12 z-[999] w-52 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                          <button
                            className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition"
                            onClick={() => handleViewProfile(n)}
                          >
                            <HiOutlineUser className="text-base text-violet-600" />
                            View Profile
                          </button>

                          <button className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition">
                            <HiOutlineOfficeBuilding className="text-base text-emerald-600" />
                            Assign Ward
                          </button>

                          <button className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition">
                            <HiOutlineSwitchHorizontal className="text-base text-amber-600" />
                            Shift Change
                          </button>

                          <button className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition">
                            <HiOutlinePencilAlt className="text-base text-sky-600" />
                            Edit Details
                          </button>
                        </div>
                      )}
                    </td> */}
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={10}
                      className="px-4 py-10 text-center text-slate-400"
                    >
                      No nurses found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {openMenu && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpenMenu(null)}
          />
        )}
      </div>
    </Layout>
  );
}
