function GetStarted() {
  return (
    <div className="flex flex-col items-center md:flex-row bg-gradient-to-br from-[#2A033F] to-[#7B1FA2]  mt-6 items-center p-8 justify-center text-center gap-8 h-auto">
      <div>
        <h2 className=" w-[400px] text-white text-3xl">
          Create your <span className="text-[#F69D1D]">profile</span> and
          upgrade your possibility of getting relatable{" "}
          <span className="text-[#F69D1D]">jobs</span>
        </h2>

        <button className="bg-[#F69D1D] py-2 px-2  mt-6 rounded">
          Get started
        </button>
      </div>

      <img src="/main3.png" alt="job offer img " className="  h-[200px]" />
    </div>
  );
}

export default GetStarted;
