function Footer() {
  return (
    <div>
      <p className="text-center bg-[#F69D1D] mt-20 mx-auto p-4 w-1/2">
        Remain informed, maintain your lead
      </p>

      <ul className="flex flex-col bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] py-4 items-center md:flex-row md:justify-center gap-4 ">
        <li className="ml-5">
          <a className="text-white text-xs">Apply for Job</a>
        </li>
        <li className="ml-5">
          <a className="text-white text-xs">Search for companies reviews</a>
        </li>
        <li className="ml-5">
          <a className="text-white text-xs">Terms and conditions</a>
        </li>
        <li className="ml-5">
          <a className="text-white text-xs">Faq</a>
        </li>
        <li className="ml-5 text-center">
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
  );
}
export default Footer;
