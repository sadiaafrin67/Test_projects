import { FaBars } from "react-icons/fa";

const DashNav = ({ toggleSidebar }) => {
  return (
    <div className="min-w-full bg-white shadow-md flex items-center justify-end  xl:justify-between pl-3 pr-4 ">
      <div className="hidden xl:flex">
        <button className="border p-1 bg-gray-100" onClick={toggleSidebar}>
          {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
          <FaBars></FaBars>
        </button>
      </div>
      <div className="dropdown dropdown-end">
        <div className="dropdown dropdown-end">
          <div className="flex items-center">
            <div className="flex flex-col items-end lg:mr-3 h-full">
              <h3 className="capitalize poppins-font text-[16px] font-semibold"></h3>
              <p className="capitalize poppins-font text-[12px] text-[#464a53]"></p>
            </div>

            <div className="dropdown dropdown-hover relative h-[65px]"></div>
          </div>
        </div>
      </div>
      <div className="flex xl:hidden">
        <button className="" onClick={toggleSidebar}>
          <FaBars></FaBars>
        </button>
      </div>
    </div>
  );
};

export default DashNav;
