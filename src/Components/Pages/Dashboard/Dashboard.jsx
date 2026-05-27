import React, { useState } from "react";
import {
  FaUserPlus,
  FaCalendarAlt,
  FaBed,
  FaMicroscope,
  FaVial,
  FaCapsules,
  FaRegNewspaper,
  FaRegCalendarAlt,
  FaLink,
  FaTimes,
  FaTrash,
  FaSearch,
} from "react-icons/fa";
import Layout from "../../Layout/Layout";
import WardManagement from "../BedManagement/Index";
import SupportServicesFinancial from "../SupportServices/Index";
import PharmacyOrders from "../PharmacyOrders/Index";
import DiagnosisOrders from "../DiagnosisOrders/Index";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [activeBottomContent, setActiveBottomContent] = useState("");
  const menuItems = [
    { icon: FaUserPlus, label: "Register Patient" },
    { icon: FaCalendarAlt, label: "Book Appointment" },
    { icon: FaBed, label: "Admit Patient" },
    { icon: FaMicroscope, label: "Inclinic Test" },
    { icon: FaVial, label: "Order Lab Test" },
    { icon: FaCapsules, label: "Order Pharmacy" },
    { icon: FaRegNewspaper, label: "Billing Summary" },
  ];

  const handleMenuClick = (label) => {
    setSelectedMenu(label);

    if (label === "Billing Summary") {
      setOpenMenuModal(false);
      setCurrentPage("billing");
    } else {
      setOpenMenuModal(true);
    }
  };

  const appointments = [
    {
      patient: "Arjun Mehta",
      id: "#PT-00421",
      doctor: "Dr. Sharma",
      time: "09:00",
      dept: "Cardiology · OPD",
      status: "Confirmed",
      type: "opd",
    },
    {
      patient: "Priya Nair",
      id: "#PT-00422",
      doctor: "Dr. Patel",
      time: "09:30",
      dept: "Neurology · OPD",
      status: "In Progress",
      type: "opd",
    },
    {
      patient: "Rohit Singh",
      id: "#PT-00423",
      doctor: "Dr. Iyer",
      time: "10:00",
      dept: "Orthopedics · OPD",
      status: "Pending",
      type: "opd",
    },
    {
      patient: "Sunita Reddy",
      id: "#PT-00424",
      doctor: "Dr. Kumar",
      time: "10:30",
      dept: "Ward 3B · IPD",
      status: "Confirmed",
      type: "ipd",
    },
    {
      patient: "Amit Desai",
      id: "#PT-00425",
      doctor: "Dr. Sharma",
      time: "11:00",
      dept: "Ward 5A · IPD",
      status: "Cancelled",
      type: "ipd",
    },
    {
      patient: "Kavya Krishnan",
      id: "#PT-00426",
      doctor: "Dr. Rao",
      time: "11:30",
      dept: "Pediatrics · OPD",
      status: "Confirmed",
      type: "opd",
    },
  ];

  const filteredAppointments =
    activeTab === "All"
      ? appointments
      : appointments.filter((item) =>
          activeTab === "OPD" ? item.type === "opd" : item.type === "ipd",
        );

  const getStatusStyle = (status) => {
    if (status === "Confirmed")
      return "bg-emerald-50 text-emerald-600 before:bg-emerald-500";
    if (status === "In Progress")
      return "bg-blue-50 text-blue-600 before:bg-blue-500";
    if (status === "Pending")
      return "bg-orange-50 text-orange-600 before:bg-orange-500";
    return "bg-red-50 text-red-500 before:bg-red-500";
  };

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

  const [medicineForm, setMedicineForm] = useState({
    medicine: "",
    dosage: "",
    quantity: "",
  });

  const [medicineRows, setMedicineRows] = useState([]);

  const addMedicineRow = () => {
    if (
      !medicineForm.medicine ||
      !medicineForm.dosage ||
      !medicineForm.quantity
    )
      return;

    setMedicineRows([...medicineRows, medicineForm]);

    setMedicineForm({
      medicine: "",
      dosage: "",
      quantity: "",
    });
  };

  const deleteMedicineRow = (index) => {
    setMedicineRows(medicineRows.filter((_, i) => i !== index));
  };

  const orderCard = (title, count, icon, data) => (
    <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.08)] border border-slate-200 overflow-hidden">
      <div className="flex items-start justify-between px-6 py-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-blue-800 text-sm">{icon}</span>
            <h2 className="font-bold text-slate-900 text-sm font-sans">
              {title}
            </h2>
            <span className="text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-xs font-bold">
              {count}
            </span>
          </div>
          <p className="text-[13px] text-slate-500 mt-2">Total orders today</p>
        </div>
        <button
          onClick={() =>
            title === "Pharmacy Orders"
              ? setCurrentPage("pharmacy")
              : setCurrentPage("diagnosis")
          }
          className="border border-blue-200 bg-blue-50 text-blue-600 text-xs font-sans font-bold rounded-lg px-4 py-1 mt-2"
        >
          Details
        </button>
      </div>

      <div className="px-6 py-2 space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[105px_1fr_48px_64px] items-center gap-4 border-b last:border-b-0 border-slate-100 pb-2 last:pb-0"
          >
            <p className="text-slate-900 text-xs font-sans font-semibold">
              {item.label}
            </p>

            <div className="h-[7px] bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${item.bar}`}></div>
            </div>

            <p
              className={`font-bold text-xs font-sans ${
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

  const renderModalContent = () => {
    if (selectedMenu === "Register Patient") {
      return (
        <div className="space-y-5">
          <div>
            <h3 className="text-sm font-sans font-bold text-slate-800 mb-3">
              Patient Basic Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scrollHide">
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Patient Name
                </label>
                <input
                  className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
                  placeholder="Enter patient name"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Mobile Number
                </label>
                <input
                  className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
                  placeholder="Enter mobile number"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Gender
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Blood Group
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>Select blood group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-sm font-bold text-slate-800 mb-3">
              Visit Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Visit Type
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>OPD</option>
                  <option>IPD</option>
                  <option>Emergency</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Department
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>Select department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Doctor
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>Select doctor</option>
                  <option>Dr. Sharma</option>
                  <option>Dr. Patel</option>
                  <option>Dr. Kumar</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Priority
                </label>
                <select className="w-full mt-1 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400 bg-white">
                  <option>Normal</option>
                  <option>Urgent</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-sm font-bold text-slate-800 mb-3">
              Address Details
            </h3>

            <textarea
              rows="3"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-400"
              placeholder="Enter address"
            ></textarea>
          </div>
        </div>
      );
    }

    if (selectedMenu === "Book Appointment") {
      return (
        <div className="flex-1 overflow-y-auto">
          <div className="relative w-full max-w-sm mb-5">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search Name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-4">
                Patient Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter patient name"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Patient Type
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                    <option>Select</option>
                    <option>OP</option>
                    <option>IP</option>
                    <option>Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    UHID / Patient ID
                  </label>
                  <input
                    type="text"
                    placeholder="PT-10234"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="border-t pt-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4">
                Appointment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Department
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                    <option>Select</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                    <option>Pediatrics</option>
                    <option>General Medicine</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Doctor
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                    <option>Select</option>
                    <option>Dr. Sharma</option>
                    <option>Dr. Kumar</option>
                    <option>Dr. Patel</option>
                    <option>Dr. Monica</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Appointment Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Appointment Mode
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                    <option>Select</option>
                    <option>In-Clinic</option>
                    <option>Video Call</option>
                    <option>Ward Visit</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">
                    Priority
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                    <option>Select</option>
                    <option>Normal</option>
                    <option>Urgent</option>
                    <option>Emergency</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-t pt-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4">
                Reason / Notes
              </h3>

              <textarea
                rows="3"
                placeholder="Enter appointment reason"
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>
        </div>
      );
    }

    if (selectedMenu === "Admit Patient") {
      return (
        <div>
          <div className="relative w-full max-w-sm mb-5">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search Name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter patient name"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Age
              </label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter age"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Bed
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-xs font-sans outline-none bg-white">
                <option>Select Bed</option>
                <option>301 - A</option>
                <option>304 - A</option>
                <option>306 - A</option>
                <option>ICU - 02</option>
                <option>ER - 01</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Ward
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-xs font-sans outline-none bg-white">
                <option>Select Ward</option>
                <option>Ward A</option>
                <option>Ward B</option>
                <option>Ward C</option>
                <option>ICU</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Assigned Doctor
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-xs font-sans outline-none bg-white">
                <option>Select Doctor</option>
                <option>Dr. Sharma</option>
                <option>Dr. Kumar</option>
                <option>Dr. Patel</option>
                <option>Dr. Monica</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Admission Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-xs font-sans outline-none bg-white">
                <option>Select Type</option>
                <option>Normal</option>
                <option>Emergency</option>
                <option>Planned</option>
                <option>Surgery</option>
                <option>Observation</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Expected Stay Days
              </label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter days"
              />
            </div>
          </div>
        </div>
      );
    }

    if (selectedMenu === "Inclinic Test") {
      return (
        <div>
          <div className="relative w-full max-w-sm mb-3">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search Name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>
          <label className="text-lg font-semibold text-slate-600 mb-3 block border-b pb-2">
            Details
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter patient name"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient ID / UHID
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="PT-10234"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Test Name
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Test</option>
                <option>Blood Test</option>
                <option>Urine Test</option>
                <option>ECG</option>
                <option>X-Ray</option>
                <option>Blood Sugar</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Test Category
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Category</option>
                <option>Laboratory</option>
                <option>Radiology</option>
                <option>Cardiology</option>
                <option>Pathology</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Referring Doctor
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Doctor</option>
                <option>Dr. Sharma</option>
                <option>Dr. Kumar</option>
                <option>Dr. Patel</option>
                <option>Dr. Monica</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Priority
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Priority</option>
                <option>Normal</option>
                <option>Urgent</option>
                <option>Emergency</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Sample Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Sample</option>
                <option>Blood</option>
                <option>Urine</option>
                <option>Saliva</option>
                <option>Tissue</option>
                <option>Not Required</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Test Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Test Time
              </label>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Estimated Cost
              </label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="₹ Enter amount"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Clinical Notes
              </label>
              <textarea
                rows="3"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter clinical notes or reason for test"
              />
            </div>
          </div>
        </div>
      );
    }

    if (selectedMenu === "Order Lab Test") {
      return (
        <div>
          <div className="relative w-full max-w-sm mb-5">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search Name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>
          <label className="text-lg font-semibold text-slate-600 mb-3 block border-b pb-2">
            Details
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter patient name"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient ID / UHID
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="PT-10234"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Lab Test Name
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Test</option>
                <option>CBC</option>
                <option>Blood Sugar</option>
                <option>Liver Function Test</option>
                <option>Kidney Function Test</option>
                <option>Thyroid Profile</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Test Category
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Category</option>
                <option>Hematology</option>
                <option>Biochemistry</option>
                <option>Microbiology</option>
                <option>Immunology</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Sample Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Sample</option>
                <option>Blood</option>
                <option>Urine</option>
                <option>Stool</option>
                <option>Saliva</option>
                <option>Tissue</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Ordered By Doctor
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Doctor</option>
                <option>Dr. Sharma</option>
                <option>Dr. Kumar</option>
                <option>Dr. Patel</option>
                <option>Dr. Monica</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Sample Collection Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Sample Collection Time
              </label>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Priority
              </label>
              <select className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans bg-white">
                <option>Select Priority</option>
                <option>Normal</option>
                <option>Urgent</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Clinical Notes
              </label>
              <textarea
                rows="3"
                className="w-full border rounded-lg px-3 py-2 outline-none text-xs font-sans"
                placeholder="Enter test instructions or clinical notes"
              />
            </div>
          </div>
        </div>
      );
    }

    if (selectedMenu === "Order Pharmacy") {
      return (
        <div className="space-y-4">
          <div className="relative w-full max-w-sm mb-5">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />

            <input
              type="text"
              placeholder="Search Name..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-md text-sm outline-none focus:border-[#0CB8A1]"
            />
          </div>
          <label className="text-lg font-semibold text-slate-600 mb-3 block border-b pb-2">
            Details
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient Name
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 text-xs outline-none"
                placeholder="Enter patient name"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Patient ID / UHID
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 text-xs outline-none"
                placeholder="PT-10234"
              />
            </div>
          </div>

          {/* Medicine Entry */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded-xl p-4 bg-slate-50">
            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Medicine
              </label>

              <input
                list="medicineList"
                value={medicineForm.medicine}
                onChange={(e) =>
                  setMedicineForm({
                    ...medicineForm,
                    medicine: e.target.value,
                  })
                }
                placeholder="Select / Enter medicine"
                className="w-full border rounded-lg px-3 py-2 text-xs outline-none"
              />

              <datalist id="medicineList">
                <option value="Paracetamol 500mg" />
                <option value="Pantoprazole 40mg" />
                <option value="Azithromycin 250mg" />
              </datalist>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Dosage
              </label>

              <input
                value={medicineForm.dosage}
                onChange={(e) =>
                  setMedicineForm({
                    ...medicineForm,
                    dosage: e.target.value,
                  })
                }
                placeholder="1 Tablet"
                className="w-full border rounded-lg px-3 py-2 text-xs outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 mb-1 block">
                Quantity
              </label>

              <input
                type="number"
                value={medicineForm.quantity}
                onChange={(e) =>
                  setMedicineForm({
                    ...medicineForm,
                    quantity: e.target.value,
                  })
                }
                placeholder="10"
                className="w-full border rounded-lg px-3 py-2 text-xs outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={addMedicineRow}
            className="px-4 py-2 bg-[#0CB8A1] text-white rounded-lg text-xs font-bold"
          >
            + Add Medicine
          </button>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left">Medicine</th>
                  <th className="px-4 py-3 text-left">Dosage</th>
                  <th className="px-4 py-3 text-left">Quantity</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {medicineRows.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3">{item.medicine}</td>
                    <td className="px-4 py-3">{item.dosage}</td>
                    <td className="px-4 py-3">{item.quantity}</td>

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => deleteMedicineRow(index)}
                        className="w-8 h-8 rounded-lg bg-red-50 border border-red-200 text-red-600 inline-flex items-center justify-center"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="border rounded-lg px-3 py-2 outline-none"
          placeholder="Patient Name"
        />
        <input
          className="border rounded-lg px-3 py-2 outline-none"
          placeholder="Bill Number"
        />
        <input
          className="border rounded-lg px-3 py-2 outline-none"
          placeholder="Total Amount"
        />
        <select className="border rounded-lg px-3 py-2 outline-none">
          <option>Billing Status</option>
          <option>Paid</option>
          <option>Pending</option>
        </select>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen p-2 font-sans">
        <div className="bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] h-[50px] flex items-center px-4 shadow-sm rounded-md overflow-x-auto">
          <div className="flex items-center h-full text-white text-sm font-bold whitespace-nowrap">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleMenuClick(item.label)}
                  className="flex items-center gap-3 px-5 py-2 cursor-pointer border-l border-white/15 first:border-l-0 hover:bg-[#0794bf] rounded-2xl transition-all text-xs"
                >
                  <Icon className="text-base" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
        {currentPage === "dashboard" && (
          <>
            <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-5 mt-5">
              <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(15,23,42,0.08)] border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-2 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-3 ">
                      <FaRegCalendarAlt className="text-blue-900" />
                      <h2 className="font-bold text-slate-900 text-sm font-sans">
                        Appointments
                      </h2>
                      <span className="text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-xs font-bold">
                        186
                      </span>
                    </div>
                    <p className="text-xs font-sans text-slate-500 mt-2">
                      Today -
                      {activeTab === "All"
                        ? "All Appointments"
                        : activeTab === "OPD"
                          ? "OPD Appointments"
                          : "IPD Appointments"}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    {["All", "OPD", "IPD"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1 rounded-lg text-xs font-sans font-semibold ${
                          activeTab === tab
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "text-slate-500"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}

                    <button className="bg-blue-50 text-blue-600 border text-xs font-sans border-blue-200 px-4 py-1 rounded-lg  font-bold">
                      View All
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto h-96 scrollHide">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-sans text-slate-500">
                        <th className="px-3 py-4 font-bold">Patient Name</th>
                        <th className="px-3 py-4 font-bold">Doctor Name</th>
                        <th className="px-3 py-4 font-bold">Time</th>
                        <th className="px-3 py-4 font-bold">Dept / Ward</th>
                        <th className="px-3 py-4 font-bold">Status</th>
                        <th className="px-3 py-4 font-bold">Consultation</th>
                        <th className="px-3 py-4 font-bold">Orders</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredAppointments.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b last:border-b-0 border-slate-100 "
                        >
                          <td className="px-3 py-4">
                            <p className="font-bold text-slate-900 text-xs font-sans">
                              {item.patient}
                            </p>
                            <p className="text-xs text-slate-500">{item.id}</p>
                          </td>

                          <td className="px-3 py-4 text-slate-800 text-xs font-sans font-semibold">
                            {item.doctor}
                          </td>

                          <td className="px-3 py-4 text-blue-600 text-xs font-sans">
                            {item.time}
                          </td>

                          <td className="px-3 py-4 text-slate-500 text-xs font-sans">
                            {item.dept}
                          </td>

                          <td className="px-3 py-4">
                            <span
                              className={`relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-sans font-bold  ${getStatusStyle(
                                item.status,
                              )}`}
                            >
                              {item.status}
                            </span>
                          </td>

                          <td className="px-3 py-4">
                            <button className="bg-blue-50 text-blue-600 border border-blue-200 rounded-lg px-4 py-1 text-xs font-sans font-bold">
                              {item.type === "opd"
                                ? "Preconsultation"
                                : "View Visit"}
                            </button>
                          </td>
                          <td className="px-3 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center cursor-pointer">
                                <FaCapsules className="text-blue-600 text-xs" />
                              </div>

                              <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center cursor-pointer">
                                <FaVial className="text-emerald-600 text-xs" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-5">
                {orderCard("Pharmacy Orders", 347, <FaLink />, pharmacy)}
                {orderCard(
                  "Diagnostic Orders",
                  219,
                  <FaMicroscope />,
                  diagnostic,
                )}
              </div>
            </div>
            <div className="w-full mt-3">
              <WardManagement />
            </div>
            <div className="w-full mt-3">
              <SupportServicesFinancial />
            </div>
          </>
        )}
        {openMenuModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl scrollHide overflow-y-scroll shadow-xl flex flex-col">
              <div className="shrink-0 flex items-center justify-between px-5 py-2 border-b bg-gradient-to-r from-[#8C3EA8] via-[#5E73B7] to-[#08B8A8] rounded-t-2xl">
                <h2 className="text-lg font-semibold text-white">
                  {selectedMenu}
                </h2>

                <button
                  onClick={() => setOpenMenuModal(false)}
                  className="text-white hover:text-red-800"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto scrollHide p-5">
                {renderModalContent()}
              </div>
              <div className="shrink-0 flex justify-end gap-3 px-5 py-4 border-t bg-gray-50 rounded-b-2xl">
                <button
                  onClick={() => setOpenMenuModal(false)}
                  className="px-5 py-1 rounded-lg text-sm font-sans font-semibold border border-teal-300 text-gray-600 hover:bg-white"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setOpenMenuModal(false)}
                  className="px-5 py-1 text-sm font-sans font-semibold rounded-lg bg-[#0794bf] text-white hover:bg-[#087da1]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === "pharmacy" && (
          <PharmacyOrders onBack={() => setCurrentPage("dashboard")} />
        )}

        {currentPage === "diagnosis" && (
          <DiagnosisOrders onBack={() => setCurrentPage("dashboard")} />
        )}

        {currentPage === "billing" && (
          <div className="w-full mt-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h2 className="text-sm font-bold text-slate-800">
                Billing Summary
              </h2>

              <button
                onClick={() => setCurrentPage("dashboard")}
                className="text-xs text-blue-600 font-semibold"
              >
                Back to Dashboard
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border rounded-xl p-4 bg-blue-50">
                <p className="text-xs text-slate-500">Total Billing</p>
                <h3 className="text-xl font-bold text-blue-700 mt-1">
                  ₹2,45,000
                </h3>
              </div>

              <div className="border rounded-xl p-4 bg-emerald-50">
                <p className="text-xs text-slate-500">Paid Amount</p>
                <h3 className="text-xl font-bold text-emerald-700 mt-1">
                  ₹1,82,000
                </h3>
              </div>

              <div className="border rounded-xl p-4 bg-orange-50">
                <p className="text-xs text-slate-500">Pending Amount</p>
                <h3 className="text-xl font-bold text-orange-600 mt-1">
                  ₹63,000
                </h3>
              </div>

              <div className="border rounded-xl p-4 bg-purple-50">
                <p className="text-xs text-slate-500">Today Bills</p>
                <h3 className="text-xl font-bold text-purple-700 mt-1">42</h3>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Bill No</th>
                    <th className="px-4 py-3">Patient</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    [
                      "BILL-001",
                      "Arjun Mehta",
                      "OP Consultation",
                      "₹1,500",
                      "Paid",
                    ],
                    ["BILL-002", "Priya Nair", "Lab Test", "₹2,800", "Pending"],
                    ["BILL-003", "Rohit Singh", "Pharmacy", "₹950", "Paid"],
                  ].map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3">{item[0]}</td>
                      <td className="px-4 py-3">{item[1]}</td>
                      <td className="px-4 py-3">{item[2]}</td>
                      <td className="px-4 py-3 font-semibold">{item[3]}</td>

                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item[4] === "Paid"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {item[4]}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-center">
                        <button className="bg-blue-50 text-blue-600 border border-blue-200 px-4 py-1 rounded-lg text-xs font-semibold hover:bg-blue-100">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
