import { NavLink } from "react-router-dom";

function AppNavLinks() {
  return (
    <>
      <li className=" list-none mx-6">
        <NavLink className="text-gray-500 font-semibold uppercase text-sm lg:text-base">
          Search Jobs
        </NavLink>
      </li>

      <li className=" list-none mx-6">
        <NavLink
          to="/about"
          className="text-gray-500 uppercase font-semibold text-sm lg:text-base text-nowrap"
        >
          Saved Jobs
        </NavLink>
      </li>
      <li className=" list-none mx-6">
        <a className="text-gray-500 cursor-pointer font-semibold uppercase text-sm lg:text-base text-nowrap">
          Sent Applications
        </a>
      </li>
      <li className=" list-none mx-6">
        <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
          Cover letters
        </a>
      </li>
      <li className=" list-none mx-6">
        <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
          Documents
        </a>
      </li>
      <li className=" list-none mx-6">
        <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
          Cvs
        </a>
      </li>

      <div className="flex flex-col gap-8 border-t border-gray-300 pt-8">
        <li className="list-none mx-6">
          <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
            Find companies
          </a>
        </li>
        <li className="list-none mx-6">
          <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
            Post a job
          </a>
        </li>
        <li className="list-none mx-6">
          <a className="text-gray-500 md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base">
            My account
          </a>
        </li>
      </div>
    </>
  );
}

export default AppNavLinks;
