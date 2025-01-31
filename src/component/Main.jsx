import GetStarted from "./GetStarted";
import Explore from "./explore";

function Main() {
  return (
    <div>
      <Explore
        mainLinks="/main1.svg"
        mainHeader="Find new Employment Posssibilities"
        mainParagraph="Create an account, complete your profile and wait for the appropriate oppourtunities"
      />
      <Explore
        mainLinks="/main2.svg"
        mainHeader="Discover useful advice on Career Developments"
        mainParagraph="Find and apply for the suitable jobs more quickly with personalized career advice and suggestions "
      />

      <GetStarted />
    </div>
  );
}

export default Main;
