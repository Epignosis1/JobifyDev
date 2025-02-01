function Banner() {
  return (
    <div className=" gap-4 text-white h-[70vh] flex flex-col bg-gradient-to-r from-[#2A033F] to-[#7B1FA2] justify-center text-center">
      <h1 className="md:text-6xl text-4xl font-semibold">
        Find new <span className="text-[#F69D1D]">Employment</span>{" "}
        Posssibilities
      </h1>
      <p className="md:text-xl text-base">
        Create an account, complete your profile and wait for the appropriate
        oppourtunities
      </p>
      <button className="bg-[#F69D1D] mt-4 w-32 mx-auto text-black py-2 rounded">
        Explore
      </button>
    </div>
  );
}

export default Banner;
