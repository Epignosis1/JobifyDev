import Motion from "./Motion";
function Explore() {
  return (
    <Motion>
      <div className="flex flex-col text-center justify-center items-center gap-4">
        <img
          src="/main2.svg"
          className="text=center md:w-[1100px] w-[420px] mt-[40px]"
        />
        <h1 className="mdtext-5xl text-3xl text-center mt-4">
          Discover useful advice on Career Developments
        </h1>
        <p className="text-lg px-6 text-center">
          Find and apply for the suitable jobs more quickly with personalized
          career advice and suggestions{" "}
        </p>
        <button className=" mt-4 bg-gradient-to-b from-[var(--dark-purple)] to-[var(--light-purple)] text-white w-32 py-2 rounded">
          Explore
        </button>
      </div>
    </Motion>
  );
}

export default Explore;
