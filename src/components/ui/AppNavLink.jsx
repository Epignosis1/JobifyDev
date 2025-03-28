import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaSearch, FaBuilding, FaUser } from "react-icons/fa";

function AppNavLinks() {
  return (
    <div className="flex flex-col gap-8 pt-2">
      <li className=" list-none mx-7 flex flex-col gap-6">
        <NavLink className="text-gray-700 flex items-center gap-2 font-medium  texte lg:text-base">
          <div className="text-xl ">
            <FaSearch />
          </div>
          Search Jobs
        </NavLink>
      </li>
      <li className=" list-none mx-6 ">
        <a className="text-gray-700 md:mr-[200px] items-center flex gap-2 cursor-pointer  font-medium text- lg:text-base">
          <div className="text-lg ml-1 ">
            <FaPlusCircle />
          </div>
          Post your resume
        </a>
      </li>

      <li className="list-none mx-7">
        <a className=" md:mr-[200px]  gap-2 flex items-center cursor-pointer  font-medium text- lg:text-base">
          <div className="">
            <FaBuilding />
          </div>{" "}
          Find companies
        </a>
      </li>

      <li className="list-none mx-7">
        <a className="text-blue-700 md:mr-[200px] flex items-center gap-2 cursor-pointer  font-medium text- lg:text-base">
          <div>
            <FaUser />
          </div>
          My account
        </a>
      </li>
    </div>
  );
}

export default AppNavLinks;
