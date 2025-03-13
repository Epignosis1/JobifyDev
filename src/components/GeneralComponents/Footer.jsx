function Footer() {
  return (
    <div className=" w-full">
      <p className="text-center bg-[#F69D1D]  mx-auto p-4 w-11/12 md:w-1/2">
        Remain informed, maintain your lead
      </p>

      <ul className="flex flex-col bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] py-4 items-center md:flex-row justify-center gap-4 ">
        <li className="md:ml-5">
          <a className="text-white text-xs">Apply for Job</a>
        </li>
        <li className="md:ml-5">
          <a className="text-white text-xs">Search for companies reviews</a>
        </li>
        <li className="md:ml-5">
          <a className="text-white text-xs">Terms and conditions</a>
        </li>
        <li className="md:ml-5">
          <a className="text-white text-xs">Faq</a>
        </li>
        <li className="md:ml-5 text-center md:text-start pr-2">
          <a className="text-white text-xs">
            Contact us
            <br />
            Email: jobify234@gmail.com
            <br />
            Tel: +234939393
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
