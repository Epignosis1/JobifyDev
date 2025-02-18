import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./Navlinks";
import { FiX, FiMenu } from "react-icons/fi";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="flex items-center justify-between  py-2 w-full px-6 md:px-8 bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] shadow-md">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="items-center gap-3 hidden p-2 md:flex w-fit">
        <NavLinks />
      </ul>

      {isOpen && (
        <div className="  shadow-xl font-semibold bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] w-full justify-center flex flex-col md:text-lg left-0 items-center gap-8  py-6 absolute top-10 z-[2000]">
          <NavLinks />
        </div>
      )}

      <button
        className=" transition-all focus-none; duration-3000 ease-in-out text-2xl md:hidden text-white w-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Nav;
