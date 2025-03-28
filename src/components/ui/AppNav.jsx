import { FiX, FiMenu } from "react-icons/fi";
import AppNavLinks from "./AppNavLink";
import { useState } from "react";
const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="flex  justify-between px-6 items-center  ">
      <img src="Group 379.png " className=" w-[120px]" />
      <div
        className={` mt-4 h-[100%] transition-all border border-gray-300  bg-white  duration-200 ease-in-out shadow-xl font-semibold  w-full  flex flex-col md:text-lg left-0 gap-6  py-8 absolute top-14 z-[2000]  ${
          isOpen
            ? "opacity-100 translate-y-0 "
            : "  opacity-0 -translate-y-1  pointer-events-none"
        }`}
      >
        <AppNavLinks />
      </div>

      <button
        className=" transition-all duration-9000 focus-none  ease-in-out text-2xl md:hidden text-white w-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX className="text-[#00008B]" />
        ) : (
          <FiMenu className="text-[#00008B]" />
        )}
      </button>
    </div>
  );
};

export default AppNav;
