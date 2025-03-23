import { useJobifyContext } from "../context/JobifyProvider";
import { FiX, FiMenu } from "react-icons/fi";
import AppNavLinks from "./AppNavLink";
const AppNav = () => {
  const { isOpen, dispatch } = useJobifyContext();
  return (
    <div className="flex pb-4 justify-between border-b px-6 items-center  shadow-sm">
      <img src="Group 281.png " className=" w-[140px]" />
      <div
        className={` mt-4 h-[100%] transition-all border border-gray-300  bg-white  duration-200 ease-in-out shadow-xl font-semibold  w-full  flex flex-col md:text-lg left-0 gap-8  py-8 absolute top-14 z-[2000]  ${
          isOpen
            ? "opacity-100 translate-y-0 "
            : "  opacity-0 -translate-y-1  pointer-events-none"
        }`}
      >
        <AppNavLinks />
      </div>

      <button
        className=" transition-all duration-9000 focus-none  ease-in-out text-2xl md:hidden text-white w-2"
        onClick={() => dispatch({ type: "navOpen", payload: !isOpen })}
      >
        {isOpen ? (
          <FiX className="text-purple-900" />
        ) : (
          <FiMenu className="text-purple-900" />
        )}
      </button>
    </div>
  );
};

export default AppNav;
