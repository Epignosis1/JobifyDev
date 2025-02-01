import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="flex border-b border-[rgba(255,255,255,0.2)] items-center justify-between bg-[#2A033F] py-2 px-8">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="flex items-center ">
        <li className="ml-10 text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-[1px] border-b-[orange]"
                : " text-white hover:text-orange transition duration-300"
            }
          >
            Find Jobs
          </NavLink>
        </li>
        <li className="ml-10 text-base">
          <NavLink className="text-white">Career</NavLink>
        </li>
        <li className="ml-10 text-base">
          <NavLink className="text-white">Employers</NavLink>
        </li>
        <li className="ml-10 text-base">
          <NavLink className="text-white">About us</NavLink>
        </li>
        <li className="ml-10 text-base">
          <NavLink className="text-white">Help</NavLink>
        </li>
      </ul>

      <div>
        <button className="bg-[#F69D1D] py-1 mx-4 px-3 w-25 rounded-lg text-black">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-white text-black px-3 py-1 rounded-lg">
          Create account
        </button>
      </div>
    </div>
  );
}

export default Nav;
