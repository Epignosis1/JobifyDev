import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function NavLinks() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMoveToHelp = () => {
    if (location.pathname === "/") {
      const faqSection = document.getElementById("faq");
      console.log(faqSection);
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#faq");
    }
  };
  const handleMoveToContact = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contact");
    }
  };
  return (
    <>
      <li className=" list-none mx-6">
        <NavLink
          to="/career"
          className="text-white font-semibold uppercase text-sm lg:text-base"
        >
          Career
        </NavLink>
      </li>

      <li className=" list-none mx-6">
        <NavLink
          to="/about"
          className="text-white uppercase font-semibold text-sm lg:text-base text-nowrap"
        >
          About us
        </NavLink>
      </li>
      <li className=" list-none mx-6">
        <a
          onClick={handleMoveToContact}
          className="text-white cursor-pointer font-semibold uppercase text-sm lg:text-base text-nowrap"
        >
          Contact us
        </a>
      </li>
      <li className=" list-none mx-6">
        <a
          onClick={handleMoveToHelp}
          className="text-white md:mr-[200px] uppercase cursor-pointer  font-semibold text-sm lg:text-base"
        >
          faq
        </a>
      </li>
      <li className="bg-[#F69D1D] py-1 lg:px-[40px] lg:py-4 rounded-lg lg:rounded-2xl text-black list-none text-sm lg:text-base w-11/12 md:w-2/12 text-center mx-2">
        <Link to="/login" className="block ">
          Login
        </Link>
      </li>
      <li className="bg-[#F69D1D] py-1 text-black lg:px-[40px] rounded-lg lg:py-4 lg:rounded-2xl  list-none text-sm lg:text-base w-11/12 md:w-2/12 text-center mx-2">
        <Link to="/signUpOption" className="block ]">
          Signup
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
