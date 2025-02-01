function Explore() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src="/main2.svg" className="md:w-[1100px] w-[460px] mt-[40px]" />
      <h1 className="mdtext-5xl text-3xl text-center mt-4">
        Discover useful advice on Career Developments
      </h1>
      <p className="text-xl text-center">
        Find and apply for the suitable jobs more quickly with personalized
        career advice and suggestions{" "}
      </p>
      <button className=" mt-4 bg-gradient-to-b from-[#2A033F] to-[#7B1FA2] text-white w-32 py-2 rounded">
        Explore
      </button>
    </div>
  );
}

export default Explore;
