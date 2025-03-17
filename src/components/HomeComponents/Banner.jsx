import Motion from "./Motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[var(--dark-purple)] to-[var(--light-purple)] ">
      <Motion>
        <div className=" gap-4 pt-[200px] text-white  h-[70vh] flex flex-col  text-center">
          <h1 className="md:text-5gixl w-[400px] lg:w-[80%] mx-auto text-3xl font-semibold">
            Find new{" "}
            <span className="text-[var(--primary-orange)]">Employment</span>{" "}
            Posssibilities, your career starts here
          </h1>
          {/* <p className="md:text-xl text-base">
            Create an account, complete your profile and wait for the
            appropriate oppourtunities
          </p> */}
          <div className=" flex items-center gap-8 mt-4 justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="bg-[var(--primary-orange)] p-4 flex  text-black rounded-xl"
            >
              Get started <ArrowRight size={24} />
            </button>
            <a
              onClick={() => navigate("/about")}
              className="text-base cursor-pointer font-medium block underline underline-offset-[6px] text-white"
            >
              {" "}
              Learn more{" "}
            </a>
          </div>
        </div>
      </Motion>
    </div>
  );
}

export default Banner;
