import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiLogOut,
  FiCalendar,
  FiUsers,
  FiGrid,
  FiCreditCard,
  FiPackage,
  FiActivity,
  FiBarChart2,
  FiUserCheck,
  FiHelpCircle,
  FiUserPlus,
  FiHeart,
  FiAlertTriangle,
  FiClipboard,
  FiFileText,
  FiCamera,
  FiShoppingBag,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import { FaBed } from "react-icons/fa";

function SideMenu({ collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  const handleClick = (path) => {
    console.log("path", path);
    navigate(path);
  };

const menuItems = [
  { title: "Dashboard", path: "/dashboard-new", icon: FiHome },

  { title: "Patients", path: "/patient-management", icon: FiUsers },

  { title: "OPD", path: "/out-patients", icon: FiUserPlus },

  { title: "IPD", path: "/in-patients", icon: FiHeart },

  { title: "Emergency", path: "/emergency", icon: FiAlertTriangle },

  { title: "Bed & Wards", path: "/bet-management", icon: FiGrid },
  { title: "OT Management", path: "/ot-management", icon: FaBed  },

  { title: "Nursing", path: "/nurseprofile", icon: FiClipboard },

  { title: "Users", path: "/users", icon: FiUsers },

  { title: "EMR", path: "/emr-patients", icon: FiFileText },

  { title: "Lab", path: "/diagnosticorders", icon: FiActivity },

  { title: "Radiology", path: "/radiology", icon: FiCamera },

  { title: "Pharmacy", path: "/pharmacyorders", icon: FiShoppingBag },

  {
    title: "Billing & Payments",
    path: "/payments",
    icon: FiCreditCard,
  },

  { title: "Inventory", path: "/inventory", icon: FiPackage },

  { title: "Appointments", path: "/appointments", icon: FiCalendar },

  { title: "Service Master", path: "/service-master", icon: FiLayers },

  { title: "Reports & Analytics", path: "/analytics", icon: FiBarChart2 },

  { title: "Admin", path: "/admin", icon: FiShield },

  { title: "Settings", path: "/change-password", icon: FiSettings },
];

return (
  <div className="h-screen px-3 py-5 font-medium text-white rounded-md bg-gradient-to-b from-[#24184f] via-[#2b215f] to-[#211749] flex flex-col">
    
    {/* Scrollable Menu */}
    <div className="flex-1 overflow-y-auto scrollHide pr-1">
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isMenuItemActive(item.path);

          return (
            <div
              key={item.path}
              title={item.title}
              onClick={() => handleClick(item.path)}
              className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer text-sm transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-[#10d4c2] to-[#16b8a8] text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />

              {!collapsed && (
                <span className="whitespace-nowrap">
                  {item.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Fixed Bottom Logout */}
    <div className="pt-3 border-t border-white/10 mt-3">
      <div
        title="Logout"
        onClick={() => handleClick("/")}
        className={`flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer text-sm transition-all duration-200 ${
          isMenuItemActive("/")
            ? "bg-gradient-to-r from-[#10d4c2] to-[#16b8a8] text-white shadow-lg shadow-cyan-500/20"
            : "text-slate-200 hover:bg-white/10 hover:text-white"
        }`}
      >
        <FiLogOut className="w-5 h-5 shrink-0" />

        {!collapsed && <span>Logout</span>}
      </div>
    </div>
  </div>
);
}

export default SideMenu;
