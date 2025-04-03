import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaSave, FaSearch, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

function AppNavLinks() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8  lg:flex-row  lg:justify-between lg:items-center lg:w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-1 pt-2">
        <li className=" list-none mx-7 lg:mx-0 flex flex-col gap-6">
          <NavLink
            to="/dashboard"
            className="text-gray-800 flex items-center gap-2 font-medium   lg:text-base"
          >
            <div className="text-xl ">
              <FaSearch />
            </div>
            Search Jobs
          </NavLink>
        </li>
        <li onClick={() => navigate("/cv")} className=" list-none mx-6 ">
          <a className="text-gray-800  items-center flex gap-2 cursor-pointer  font-medium  lg:text-base">
            <div className="text-lg ml-1 ">
              <FaPlusCircle />
            </div>
            Post your resume
          </a>
        </li>
        <li onClick={() => navigate("/saved")} className=" list-none mx-6 ">
          <a className="text-gray-800  items-center flex gap-2 cursor-pointer  font-medium  lg:text-base">
            <div className="text-lg  ">
              <Bookmark />
            </div>
            Saved Jobs
          </a>
        </li>
      </div>
      <li
        className="list-none mx-7 lg:mx-0"
        onClick={() => navigate("/account")}
      >
        <a className="text-blue-900  flex items-center gap-2 cursor-pointer  font-medium  lg:text-base">
          <div className="text-lg">
            <FaUser />
          </div>
          My account
        </a>
      </li>
    </div>
  );
}

export default AppNavLinks;
