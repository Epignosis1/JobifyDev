import Motion from "./Motion";
import { useNavigate } from "react-router-dom";
function Explore() {
  const navigate = useNavigate();
  return (
    <Motion className="my-[120px]">
      <div className="flex flex-col md:flex-row  text-center justify-center items-start gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-4xl text-3xl font-semibold  text-center mt-4">
            Discover useful advice on Career paths
          </h1>
          <p className="text-lg px-6 text-center">
            Find and apply for the suitable jobs more quickly with personalized
            career suggestions{" "}
          </p>
          <button
            onClick={() => navigate("/career")}
            className=" mt-4  bg-gradient-to-b m-auto from-[var(--dark-purple)] to-[var(--light-purple)] text-white w-32 md:py-4 py-2 rounded"
          >
            Explore
          </button>
        </div>
        <div>
          <img
            src="/main2.svg"
            className="text=center md:w-[600px] w-[420px] "
          />
        </div>
      </div>
    </Motion>
  );
}

export default Explore;
