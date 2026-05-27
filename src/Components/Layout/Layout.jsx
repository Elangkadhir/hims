import React, { useState } from "react";
import Header from "../Shared/Header";
import SideMenu from "../Shared/SideMenu";

function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="shadow-lg">
        <Header onToggle={toggleSidebar} />
      </div>
      <div className="flex flex-1 gap-2 mx-2 overflow-hidden mt-2">
        <div
          className={`transition-all duration-300 ${
            sidebarCollapsed
              ? "w-[4%]"
              : "w-full md:w-1/4 lg:w-1/5 xl:w-[18%] 2xl:w-[15%]"
          } border rounded-md`}
        >
          <SideMenu collapsed={sidebarCollapsed}/>
        </div>

        <div className="p-2 w-full border rounded-md overflow-y-auto scrollWidth bg-slate-50">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
