import { useEffect } from "react";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import NavLinks from "./Navlinks";
import { useNavigate } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { useJobifyContext } from "../context/JobifyProvider";
function Nav() {
  const { isOpen, dispatch } = useJobifyContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "navOpen", payload: false });
  }, [location, dispatch]);

  const handleTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className=" w-full fixed z-50 top-0 flex items-center lg:justify-around  justify-between px-8 py-3 w-full  md:p-8 bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] ">
      <a onClick={handleTop}>
        <Logo />
      </a>

      <ul className="items-center  hidden  lg:flex w-fit">
        <NavLinks />
      </ul>

      <div
        className={` transition-all duration-200 ease-in-out shadow-xl font-semibold bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] w-full justify-center flex flex-col md:text-lg left-0 items-center gap-8  py-6 absolute top-14 z-[2000]  ${
          isOpen
            ? "opacity-100 translate-y-0 "
            : "  opacity-0 -translate-y-1  pointer-events-none"
        }`}
      >
        <NavLinks />
      </div>

      <button
        className=" transition-all duration-9000 focus-none  ease-in-out text-2xl md:hidden text-white w-2"
        onClick={() => dispatch({ type: "navOpen", payload: !isOpen })}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

export default Nav;
