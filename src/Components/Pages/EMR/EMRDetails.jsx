import { useState } from "react";
import Layout from "../../Layout/Layout";

/* ── tiny icon helpers (inline SVG) ── */
const Icon = ({ d, cls = "w-4 h-4", stroke = "currentColor", fill = "none" }) => (
  <svg className={cls} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const HeartIcon    = () => <Icon d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />;
const PillIcon     = () => <Icon d="M10.5 3.5a6 6 0 0 1 8.49 8.49l-8 8a6 6 0 0 1-8.48-8.49l8-8zM12 12l4-4" />;
const FlaskIcon    = () => <Icon d="M9 3h6m-6 0v6l-4 9a1 1 0 0 0 .9 1.4h12.2a1 1 0 0 0 .9-1.4l-4-9V3M9 3h6" />;
const ClipIcon     = () => <Icon d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2" />;
const DownloadIcon = () => <Icon d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />;
const PlusIcon     = () => <Icon d="M12 5v14M5 12h14" />;
const UserIcon     = () => <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />;
const EditIcon     = () => <Icon d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />;
const AlertTriIcon = () => <Icon d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />;
const InfoIcon     = () => <Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8h.01M12 12v4" />;
const ChevronRight = () => <Icon d="M9 18l6-6-6-6" cls="w-3.5 h-3.5" />;
const NoteIcon     = () => <Icon d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />;
const OrderIcon    = () => <Icon d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />;
const RxIcon       = () => <Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />;
const PrintIcon    = () => <Icon d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6v-8z" />;
const GenderIcon   = () => <Icon d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 20v2M12 2v2M20 12h2M2 12h2" />;
const RingIcon     = () => <Icon d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />;
const BriefIcon    = () => <Icon d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />;
const DoctorIcon   = () => <Icon d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9zM8 7V5a4 4 0 0 1 8 0v2" />;
const HospIcon     = () => <Icon d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" />;
const CalIcon      = () => <Icon d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM16 2v4M8 2v4M3 10h18" />;
const WarnIcon     = () => <Icon d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#fee2e2" stroke="#ef4444" />;
const XrayIcon     = () => <Icon d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />;

/* ── Badge ── */
const Badge = ({ text, color }) => {
  const map = {
    green:  "bg-green-50 text-green-700 border border-green-200",
    yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200",
    blue:   "bg-blue-50 text-blue-700 border border-blue-200",
    red:    "bg-red-50 text-red-600 border border-red-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${map[color] || map.blue}`}>
      {text}
    </span>
  );
};

/* ── Nav tabs ── */
const TABS = ["Overview","Vitals","Clinical Notes","Diagnosis","Medications","Lab Reports","Radiology","Procedures","Care Plan","Documents","Timeline"];

/* ── Main Component ── */
export default function EMRDetails() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 py-4">

        {/* ── HEADER ── */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mb-4">
          <div className="flex items-start gap-5">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0 bg-gray-100">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl font-bold text-blue-600">
                RK
              </div>
            </div>

            {/* Name + IDs */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-bold text-gray-900">Ramesh Kumar</h1>
                <span className="text-blue-500 text-base">♂</span>
              </div>
              <div className="text-[12px] text-gray-500 mb-1">
                <span className="font-medium text-gray-600">MRN :</span> MRN2025001234
              </div>
              <div className="text-[12px] text-gray-500 mb-2">
                <span className="font-medium text-gray-600">UHID :</span> UHID2025005678
              </div>
              <Badge text="Active" color="green" />
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 text-[13px] flex-wrap">
              {[
                { label: "Age / DOB",     value: "52 Y / 12 May 1972" },
                { label: "Phone",         value: "+91 98765 43210" },
                { label: "Blood Group",   value: "B+", red: true },
                { label: "Allergies",     value: "Penicillin, Nuts", red: true },
                { label: "Address",       value: "123, Anna Nagar,\nChennai - 600040" },
              ].map(({ label, value, red }) => (
                <div key={label}>
                  <div className="text-[11px] text-gray-400 mb-0.5">{label}</div>
                  <div className={`font-semibold whitespace-pre-line ${red ? "text-red-500" : "text-gray-800"}`}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 ml-auto flex-shrink-0">
              <button className="flex items-center gap-1.5 border border-gray-300 text-gray-700 text-[12px] font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <DownloadIcon /> Download Summary
              </button>
              <button className="flex items-center gap-1.5 bg-blue-600 text-white text-[12px] font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <PlusIcon /> Add New Note
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mt-4 pt-4">
            <div className="flex gap-8 flex-wrap text-[12px]">
              {[
                { icon: <GenderIcon />, label: "Gender",           value: "Male",                color: "text-blue-500" },
                { icon: <RingIcon />,   label: "Marital Status",   value: "Married",             color: "text-pink-400" },
                { icon: <BriefIcon />,  label: "Occupation",       value: "Business",            color: "text-amber-500" },
                { icon: <DoctorIcon />, label: "Attending Doctor", value: "Dr. Priya Sharma",    color: "text-green-500" },
                { icon: <HospIcon />,   label: "Department",       value: "General Medicine",    color: "text-purple-500" },
                { icon: <CalIcon />,    label: "Admission Date",   value: "10 May 2025",         color: "text-blue-400" },
                { icon: null,           label: "Patient Status",   value: null, badge: true },
              ].map(({ icon, label, value, color, badge }) => (
                <div key={label} className="flex items-start gap-2">
                  {icon && <span className={`mt-0.5 ${color}`}>{icon}</span>}
                  <div>
                    <div className="text-[10px] text-gray-400">{label}</div>
                    {badge
                      ? <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">IPD</span>
                      : <div className="font-semibold text-gray-800">{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BODY: left + right ── */}
        <div className="flex gap-4">
          {/* ── LEFT (main) ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Nav Tabs */}
            {/* <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
              <div className="flex border-b border-gray-100">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-[12px] font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div> */}

            {/* ── 4-card summary row ── */}
            <div className="grid grid-cols-4 gap-3">
              {/* Vitals */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-400"><HeartIcon /></span>
                    <span className="text-[13px] font-semibold text-gray-700">Vitals</span>
                    <span className="text-[10px] text-gray-400">(Latest)</span>
                  </div>
                  <span className="text-[10px] text-gray-400">10:30 AM</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { val: "120/80", unit: "BP (mmHg)" },
                    { val: "78",     unit: "Pulse (bpm)" },
                    { val: "98",     unit: "SpO₂ (%)" },
                    { val: "98.6",   unit: "Temp (°F)" },
                  ].map(({ val, unit }) => (
                    <div key={unit}>
                      <div className="text-[18px] font-bold text-gray-800 leading-tight">{val}</div>
                      <div className="text-[10px] text-gray-400">{unit}</div>
                    </div>
                  ))}
                </div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 hover:underline">
                  View Trends <ChevronRight />
                </button>
              </div>

              {/* Medications */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-blue-400"><PillIcon /></span>
                  <span className="text-[13px] font-semibold text-gray-700">Medications</span>
                </div>
                <div className="text-[32px] font-bold text-gray-800 mb-0.5">5</div>
                <div className="text-[11px] text-gray-400 mb-3">Active Medications</div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 hover:underline">
                  View MAR <ChevronRight />
                </button>
              </div>

              {/* Lab Reports */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-purple-400"><FlaskIcon /></span>
                  <span className="text-[13px] font-semibold text-gray-700">Lab Reports</span>
                </div>
                <div className="text-[32px] font-bold text-gray-800 mb-0.5">3</div>
                <div className="text-[11px] text-gray-400 mb-3">Reports Available</div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 hover:underline">
                  View Reports <ChevronRight />
                </button>
              </div>

              {/* Pending Orders */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-orange-400"><ClipIcon /></span>
                  <span className="text-[13px] font-semibold text-gray-700">Pending Orders</span>
                </div>
                <div className="text-[32px] font-bold text-gray-800 mb-0.5">2</div>
                <div className="text-[11px] text-gray-400 mb-3">Pending</div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 hover:underline">
                  View Orders <ChevronRight />
                </button>
              </div>
            </div>

            {/* ── Middle row: Diagnosis + Notes + Medications ── */}
            <div className="grid grid-cols-3 gap-3">
              {/* Diagnosis */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <h3 className="text-[13px] font-bold text-gray-800 mb-3">Diagnosis</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] text-gray-400 mb-0.5">Primary Diagnosis</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-gray-800">Hypertension (I10)</span>
                      <Badge text="Confirmed" color="green" />
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <div className="text-[10px] text-gray-400 mb-0.5">Secondary Diagnosis</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-gray-800">Type 2 Diabetes Mellitus (E11.9)</span>
                      <Badge text="Under Control" color="yellow" />
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <div className="text-[10px] text-gray-400 mb-0.5">Other Conditions</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-gray-800">Dyslipidemia (E78.5)</span>
                      <Badge text="Stable" color="blue" />
                    </div>
                  </div>
                </div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-4 hover:underline">
                  View All <ChevronRight />
                </button>
              </div>

              {/* Clinical Notes */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <h3 className="text-[13px] font-bold text-gray-800 mb-3">Recent Clinical Notes</h3>
                <div className="space-y-3">
                  {[
                    { name: "Dr. Priya Sharma", role: "Consultant Physician", time: "Today, 10:30 AM", note: "Patient is responding well to medication. BP and sugar levels are stable.", color: "bg-blue-100 text-blue-700" },
                    { name: "Nurse Anitha", role: "Staff Nurse", time: "Today, 09:15 AM", note: "Vitals monitored. All parameters normal. Patient comfortable.", color: "bg-green-100 text-green-700" },
                    { name: "Dr. Priya Sharma", role: "Consultant Physician", time: "Yesterday, 06:20 PM", note: "Reviewed lab reports. Continue same treatment.", color: "bg-blue-100 text-blue-700" },
                  ].map(({ name, role, time, note, color }, i) => (
                    <div key={i} className={`${i > 0 ? "border-t border-gray-100 pt-3" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${color}`}>
                          {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11px] font-semibold text-gray-800">{name}</div>
                          <div className="text-[10px] text-gray-400">{role}</div>
                        </div>
                        <div className="text-[10px] text-gray-400 flex-shrink-0">{time}</div>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                  View All Notes <ChevronRight />
                </button>
              </div>

              {/* Medications Active */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1 mb-3">
                  <h3 className="text-[13px] font-bold text-gray-800">Medications</h3>
                  <span className="text-[10px] text-gray-400">(Active)</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Tab. Amlodipine 5mg",   dose: "1-0-0", freq: "OD" },
                    { name: "Tab. Metformin 500mg",  dose: "1-1-1", freq: "TDS" },
                    { name: "Tab. Atorvastatin 20mg",dose: "0-0-1", freq: "HS" },
                    { name: "Tab. Aspirin 75mg",     dose: "1-0-0", freq: "OD" },
                    { name: "Tab. Vitamin D3 60K",   dose: "0-0-1", freq: "Weekly" },
                  ].map(({ name, dose, freq }) => (
                    <div key={name} className="flex items-center gap-2 py-1 border-b border-gray-50 last:border-0">
                      <span className="text-blue-400 flex-shrink-0"><PillIcon /></span>
                      <span className="text-[12px] text-gray-700 flex-1">{name}</span>
                      <span className="text-[11px] text-gray-400 font-mono">{dose}</span>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{freq}</span>
                    </div>
                  ))}
                </div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                  View MAR <ChevronRight />
                </button>
              </div>
            </div>

            {/* ── Bottom row: Lab Reports + Radiology + Allergies ── */}
            <div className="grid grid-cols-3 gap-3">
              {/* Lab Reports */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1 mb-3">
                  <h3 className="text-[13px] font-bold text-gray-800">Lab Reports</h3>
                  <span className="text-[10px] text-gray-400">(Latest)</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                      <th className="text-left pb-2 font-medium">Test Name</th>
                      <th className="text-left pb-2 font-medium">Date</th>
                      <th className="text-left pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    {[
                      { test: "Complete Blood Count", date: "14 May 2025", status: "Completed" },
                      { test: "Fasting Blood Sugar",  date: "14 May 2025", status: "Completed" },
                      { test: "Lipid Profile",        date: "13 May 2025", status: "Completed" },
                    ].map(({ test, date, status }) => (
                      <tr key={test} className="border-b border-gray-50">
                        <td className="py-2 text-gray-700 font-medium">{test}</td>
                        <td className="py-2 text-gray-400">{date}</td>
                        <td className="py-2">
                          <span className="text-[10px] font-semibold text-green-600">{status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                  View All Reports <ChevronRight />
                </button>
              </div>

              {/* Radiology */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-1 mb-3">
                  <h3 className="text-[13px] font-bold text-gray-800">Radiology</h3>
                  <span className="text-[10px] text-gray-400">(Latest)</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-100">
                      <th className="text-left pb-2 font-medium">Test Name</th>
                      <th className="text-left pb-2 font-medium">Date</th>
                      <th className="text-left pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { test: "Chest X-Ray", date: "14 May 2025", status: "Completed" },
                      { test: "ECG",          date: "13 May 2025", status: "Completed" },
                    ].map(({ test, date, status }) => (
                      <tr key={test} className="border-b border-gray-50">
                        <td className="py-2 text-gray-700 font-medium">{test}</td>
                        <td className="py-2 text-gray-400">{date}</td>
                        <td className="py-2">
                          <span className="text-[10px] font-semibold text-green-600">{status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                  View All <ChevronRight />
                </button>
              </div>

              {/* Allergies & Alerts */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <h3 className="text-[13px] font-bold text-gray-800 mb-3">Allergies & Alerts</h3>
                <div className="space-y-2">
                  {[
                    { icon: "🔴", label: "Drug Allergy",  sub: "Penicillin",      badge: "High",   badgeColor: "red" },
                    { icon: "🟠", label: "Food Allergy",  sub: "Nuts",            badge: "Medium", badgeColor: "orange" },
                    { icon: "🔵", label: "Alert",         sub: "Diabetic Patient",badge: "Info",   badgeColor: "blue" },
                  ].map(({ icon, label, sub, badge, badgeColor }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{icon}</span>
                        <div>
                          <div className="text-[11px] font-semibold text-gray-700">{label}</div>
                          <div className="text-[10px] text-gray-400">{sub}</div>
                        </div>
                      </div>
                      <Badge text={badge} color={badgeColor} />
                    </div>
                  ))}
                </div>
                <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                  View All <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT sidebar ── */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-4">

            {/* Alerts */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500"><AlertTriIcon /></span>
                <h3 className="text-[13px] font-bold text-gray-800">Alerts</h3>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Allergy: Penicillin", badge: "Severe",  color: "red" },
                  { label: "Diabetic Patient",    badge: "Info",    color: "blue" },
                  { label: "On Blood Thinner",    badge: "Caution", color: "orange" },
                ].map(({ label, badge, color }) => (
                  <div key={label} className={`flex items-center justify-between py-2 border-b border-gray-50 last:border-0`}>
                    <div className="flex items-center gap-2">
                      <span className={`${color === "red" ? "text-red-400" : color === "blue" ? "text-blue-400" : "text-orange-400"}`}>
                        {color === "blue" ? <InfoIcon /> : <AlertTriIcon />}
                      </span>
                      <span className="text-[11px] text-gray-700">{label}</span>
                    </div>
                    <Badge text={badge} color={color} />
                  </div>
                ))}
              </div>
              <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-3 hover:underline">
                View All Alerts <ChevronRight />
              </button>
            </div>

            {/* Patient Timeline */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Patient Timeline</h3>
              <div className="relative pl-5">
                {/* vertical line */}
                <div className="absolute left-2 top-2 bottom-2 w-px bg-gray-200" />
                <div className="space-y-4">
                  {[
                    { time: "10:30 AM",     title: "Vitals Updated",      sub: "by Nurse Anitha",       color: "bg-red-400" },
                    { time: "10:15 AM",     title: "Medication Given",     sub: "Amlodipine 5mg",        color: "bg-green-400" },
                    { time: "09:30 AM",     title: "Lab Sample Collected", sub: "Blood Sample",          color: "bg-purple-400" },
                    { time: "09:00 AM",     title: "Doctor Consultation",  sub: "Dr. Priya Sharma",      color: "bg-blue-400" },
                    { time: "10 May 2025",  title: "Patient Admitted",     sub: "General Medicine",      color: "bg-teal-400" },
                  ].map(({ time, title, sub, color }) => (
                    <div key={title} className="relative">
                      <div className={`absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-white ${color} shadow-sm`} />
                      <div className="text-[10px] text-gray-400 mb-0.5">{time}</div>
                      <div className="text-[11px] font-semibold text-gray-800">{title}</div>
                      <div className="text-[10px] text-gray-500">{sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="text-[11px] text-blue-600 font-medium flex items-center gap-0.5 mt-4 hover:underline">
                View Full Timeline <ChevronRight />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Quick Actions</h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: <NoteIcon />,  label: "New Note",     color: "bg-blue-50 text-blue-600" },
                  { icon: <OrderIcon />, label: "Add Order",    color: "bg-green-50 text-green-600" },
                  { icon: <RxIcon />,    label: "Prescribe",    color: "bg-purple-50 text-purple-600" },
                  { icon: <PrintIcon />, label: "Print Summary",color: "bg-orange-50 text-orange-600" },
                ].map(({ icon, label, color }) => (
                  <button key={label} className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} group-hover:scale-105 transition-transform`}>
                      {icon}
                    </div>
                    <span className="text-[9px] text-gray-500 text-center leading-tight">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}