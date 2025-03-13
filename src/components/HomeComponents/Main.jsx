import GetStarted from "./GetStarted";
import Explore from "./Explore";
import Banner from "./Banner";
import Faq from "./Faq";
import Contact from "./Contact";
import Works from "./Works";

function Main() {
  return (
    <div className="relative overflow-hidden">
      <Banner />
      <Works />
      <Explore />
      <Faq />

      <GetStarted />
      <Contact />
    </div>
  );
}

export default Main;
