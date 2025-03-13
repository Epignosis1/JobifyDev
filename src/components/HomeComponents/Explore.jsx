import Motion from "./Motion";
import { useNavigate } from "react-router-dom";
function Explore() {
  const navigate = useNavigate();
  return (
    <Motion>
      <div className="flex flex-col my-[120px] text-center justify-center items-center gap-6">
        <h1 className="mdtext-5xl text-3xl font-semibold  text-center mt-4">
          Discover useful advice on Career paths
        </h1>

        <p className="text-lg px-6 text-center">
          Find and apply for the suitable jobs more quickly with personalized
          career suggestions{" "}
        </p>
        <img
          src="/main2.svg"
          className="text=center md:w-[1100px] w-[420px] "
        />
        <button
          onClick={() => navigate("/career")}
          className=" mt-4 bg-gradient-to-b from-[var(--dark-purple)] to-[var(--light-purple)] text-white w-32 py-2 rounded"
        >
          Explore
        </button>
      </div>
    </Motion>
  );
}

export default Explore;
