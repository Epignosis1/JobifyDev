import { Link, NavLink } from "react-router-dom";

function NavLinks() {
	return (
		<>
			<li className=" list-none ">
				<NavLink className="text-white text-sm lg:text-base text-nowrap">
					Find Job
				</NavLink>
			</li>
			<li className=" list-none">
				<NavLink className="text-white text-sm lg:text-base">Career</NavLink>
			</li>
			<li className=" list-none">
				<NavLink className="text-white text-sm lg:text-base">Employers</NavLink>
			</li>
			<li className=" list-none">
				<NavLink
					to="about"
					className="text-white text-sm lg:text-base text-nowrap">
					About us
				</NavLink>
			</li>
			<li className=" list-none">
				<NavLink to="help" className="text-white text-sm lg:text-base">
					Help
				</NavLink>
			</li>
			<li className="bg-[#F69D1D] py-1 px-3 rounded-lg text-black list-none text-sm lg:text-base w-11/12 md:w-2/12 text-center mx-2">
				<Link to="/login">Login</Link>
			</li>
			<li className="bg-white text-black px-3 py-1 rounded-lg list-none text-sm lg:text-base w-11/12 md:w-2/12 text-center mx-2">
				<Link to="/Signup">Signup</Link>
			</li>
		</>
	);
}

export default NavLinks;
