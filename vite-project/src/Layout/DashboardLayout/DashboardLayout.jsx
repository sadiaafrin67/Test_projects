import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import DashNav from "./DashShared/DashNav/DashNav";
// import './DashShared/SideBar/SideBar.css'
// import SideBar from "./DashShared/SideBar/SideBar";
// import ToTop from "../MainLayout/Shared/ToTop/ToTop";
import { Helmet } from "react-helmet";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DashNav from "../DashNav/DashNav";


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
     
        <div className="flex">
        
          {/* Sidebar of dashboard starts here */}
          <div
            className={`side_bar bg-[#f9f9f9f5] min-h-screen fixed w-64 xl:min-w-[300px] z-[99999] text-white transition-all duration-300 ${isSidebarOpen ? "-ml-64 xl:ml-0" : "xl:-ml-[300px]"
              }`}
          >
            <Sidebar></Sidebar>
          </div>
          {/* Main content of Dashboard starts here */}
          <div className={`main_content w-svw transition-all duration-300 ${isSidebarOpen ? "xl:ml-[300px]" : ""}`}>
            <DashNav toggleSidebar={toggleSidebar} ></DashNav>
            <div className="flex-1">
              <Outlet></Outlet>
              <div className="fixed z-[99999] right-8 bottom-12">
                {/* <ToTop></ToTop> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default DashboardLayout;