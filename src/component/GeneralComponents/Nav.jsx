import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import NavLinks from "../Navlinks";
import { FiX, FiMenu } from "react-icons/fi";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex   items-center justify-between bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] py-6 px-6 md:px-20">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="items-center gap-14 hidden p-5 md:flex">
        <NavLinks />
      </ul>

      {isOpen && (
        <div className="  shadow-xl font-semibold bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] w-full justify-center flex flex-col text-lg left-0 items-center gap-8  py-6 absolute top-20">
          <NavLinks />
          <Link to="/login">
            <button className="bg-[#F69D1D] py-1 mx-4 px-3 w-[90vw] rounded-full text-black">
              Login
            </button>
          </Link>

          <Link to="/Signup">
          <button className="bg-white w-[90vw] rounded-full text-black px-3 py-1 ">
            Sign up
          </button>
          </Link>
          
        </div>
      )}

      <button
        className=" transition-all focus-none; duration-3000 ease-in-out text-2xl md:hidden text-white w-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div className="hidden md:block">
        <button className="bg-[#F69D1D] py-1 mx-4 px-3 w-25 rounded-lg text-black">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-white text-black px-3 py-1 rounded-lg">
          <Link to="/Signup">Signup</Link>
        </button>
      </div>
    </header>
  );
}

export default Nav;
