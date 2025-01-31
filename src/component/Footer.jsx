import Logo from "./Logo";

function Footer() {
  return (
    <div>
      <p className="text-center bg-[#F69D1D] mt-20 mx-auto p-4 w-1/2">
        Remain informed, maintain your lead
      </p>

      <div className="flex items-center justify-around  bg-[#2A033F]  px-4">
        <Logo />

        <ul className="flex justify-around mt-3">
          <li className="ml-10">
            <a className="text-white text-xs">Apply for Job</a>
          </li>
          <li className="ml-10">
            <a className="text-white text-xs">Search for companies reviews</a>
          </li>
          <li className="ml-10">
            <a className="text-white text-xs">Terms and conditions</a>
          </li>
          <li className="ml-10">
            <a className="text-white text-xs">Fag</a>
          </li>
          <li className="ml-10">
            <a className="text-white text-xs">
              Contact us
              <br />
              Email:jobify234@gmail.com
              <br />
              Tel:+234939393
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
