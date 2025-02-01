import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <li className=" text-base list-none ">
        <NavLink className="text-white">Find Job</NavLink>
      </li>
      <li className=" text-base list-none">
        <NavLink className="text-white">Career</NavLink>
      </li>
      <li className=" text-base list-none">
        <NavLink className="text-white">Employers</NavLink>
      </li>
      <li className=" text-base list-none">
        <NavLink className="text-white">About us</NavLink>
      </li>
      <li className=" text-base list-none">
        <NavLink className="text-white">Help</NavLink>
      </li>
    </>
  );
}

export default NavLinks;
