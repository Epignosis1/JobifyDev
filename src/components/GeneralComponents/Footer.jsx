function Footer() {
  return (
    <div className=" w-full  p-4 text-sm  text-white bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)]">
      <img src="Group 281.png " className="w-[120px] text-white" />
      <div className=" my-8 flex flex-col gap-2">
        <h2>Product</h2>
        <a className="block text-gray-500">Get started</a>
        <a className="block text-gray-500">Faqs</a>
      </div>

      <div className=" flex flex-col gap-2">
        <h2>Company</h2>
        <a className="block text-gray-500">About us</a>
        <a className="block text-gray-500">Contact us</a>
      </div>
    </div>
  );
}
export default Footer;
