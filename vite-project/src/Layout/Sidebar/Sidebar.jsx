import { useState } from "react";
import { FaRegHospital } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <div className="border-red-600 p-4 pt-0 ">
      <div className="text-black inline-flex gap-x-3 items-center my-6 text-xl font-semibold">
        <span className="self-center">
          <FaRegHospital />
        </span>
        <span>SHERE</span>
      </div>

      <div className="">
        <button
          type="button"
          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group "
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
          onClick={() => setOpenDashboard(!openDashboard)}
        >
          <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
            Dashboard
          </span>
          {!openDashboard && <IoIosArrowDown className="w-5 h-5" />}
          {openDashboard && <IoIosArrowUp className="w-5 h-5" />}
        </button>
        <ul
          id="dropdown-example"
          className={`${
            openDashboard
              ? "block transition-all ease-in-out duration-300"
              : "hidden transition-all ease-in-out duration-300"
          } py-2 space-y-2 `}
        >
          <li>
            <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ">
              <div className="text-black">
                <Link to="/contracts">Contracts</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ">
              <div className="text-black">
                <Link to="/patients">Patients</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ">
              <div className="text-black">
                <Link to="/home">Home Visits</Link>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ">
              <div className="text-black">
                <Link to="/contracts">Roles & Users</Link>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ">
              <div className="text-black">
                <Link to="/role">Settings</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
