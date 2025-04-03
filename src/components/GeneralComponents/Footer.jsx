import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const handleTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" w-full  items-center relative flex lg:flex-row flex-col gap-8 lg:gap-[100px] p-4 text-sm  text-white bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)]">
      <img src="Group 278.png " className="w-[120px] lg:w-[160px] text-white" />
      <div className=" flex flex-col font-medium gap-2">
        <h2 className="text-xl">Product</h2>
        <a
          className="block cursor-pointer text-base text-gray-400"
          onClick={() => navigate("/signup")}
        >
          Get started
        </a>
        <a
          className="block cursor-pointer text-base text-gray-400"
          onClick={() => navigate("/about")}
        >
          Faqs
        </a>
      </div>
      <div className=" flex flex-col font-medium gap-2">
        <h2 className="text-xl">Company</h2>
        <a
          className="block text-base cursor-pointer text-gray-400"
          onClick={() => navigate("/career")}
        >
          Career
        </a>
        <a className="block cursor-pointer text-base text-gray-400">
          Contact us
        </a>
      </div>
      <div className="flex flex-col gap-4 ">
        <div>&copy; 2025 Jobify. All rights reserved</div>
        <div className="flex justify-between">
          <div className="flex gap-4 text-lg">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <div className="absolute right-1 " onClick={handleTop}>
            <ChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
