import GetStarted from "./GetStarted";
import Explore from "./Explore";
import Banner from "./Banner";
import Faq from "./Faq";
import Contact from "./Contact";

function Main() {
  return (
    <div>
      <Banner>
        <h1 className="md:text-6xl text-3xl font-semibold">
          Find new{" "}
          <span className="text-[var(--primary-orange)]">Employment</span>{" "}
          Posssibilities
        </h1>
        <p className="md:text-xl text-base">
          Create an account, complete your profile and wait for the appropriate
          oppourtunities
        </p>
        <button className="bg-[var(--primary-orange)] mt-4 w-32 mx-auto text-black py-2 rounded">
          Explore
        </button>
      </Banner>
      <Explore />
      <Faq />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default Main;
