import GetStarted from "./GetStarted";
import Explore from "./Explore";
import Banner from "./Banner";
import Faq from "./Faq";
import Contact from "./Contact";

function Main() {
  return (
    <div className="relative overflow-hidden">
      <Banner />

      <Explore />
      <Faq />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default Main;
