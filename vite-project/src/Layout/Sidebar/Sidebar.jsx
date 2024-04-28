import React from "react";
import { FaRegHospital } from "react-icons/fa";
import Home from "../DashboardRoutes/Home/Home";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="text-black flex justify-center items-center gap-2 my-6 text-xl font-semibold">
        <FaRegHospital /> SHERE
      </div>
      <div className="text-black">
        <Link to="/home">Home</Link>
      </div>
      <div className="text-black">
        <Link to="/patients">Patients</Link>
      </div>
      <div className="text-black">
        <Link to="/contracts">Contracts</Link>
      </div>
      <div className="text-black">
        <Link to="/role">Roles & Users</Link>
      </div>
    </div>
  );
};

export default Sidebar;
