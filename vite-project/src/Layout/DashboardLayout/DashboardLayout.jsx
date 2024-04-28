import { useState } from "react";

import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import DashNav from "../../components/DashNav/DashNav";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log(isSidebarOpen);
  };
  return (
    <>
      <Helmet>
        <title>SHREYU | Dashboard</title>
      </Helmet>

      <div className="flex ">
        {/* Sidebar of dashboard starts here */}
        <div
          className={`side_bar bg-[#f9f9f9f5] min-h-screen fixed w-64 xl:min-w-[300px] z-[99999] text-white transition-all duration-300  ${
            isSidebarOpen ? "-ml-64 xl:ml-0" : "xl:-ml-[300px]"
          }`}
        >
          <Sidebar />
        </div>
        {/* Main content of Dashboard starts here */}
        <div
          className={`main_content w-svw transition-all duration-300 ${
            isSidebarOpen ? "xl:ml-[300px]" : ""
          }`}
        >
          <DashNav toggleSidebar={toggleSidebar}></DashNav>
          <div className="flex-1 py-4 px-8 text-secondary-foreground">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
