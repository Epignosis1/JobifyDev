import { Twitter, X, Linkedin } from "lucide-react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Motion from "./Motion";

function Contact() {
  const contactRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      contactRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <Motion>
      <div
        ref={contactRef}
        className="flex my-[50px] p-8 w-[90vw] lg:h-[100vh] rounded-3xl lg:flex-row m-auto flex-col items-center gap-6 bg-gradient-to-bl from-[var(--dark-purple)] to-[var(--light-purple)]"
        id="contact"
      >
        <div className="flex basis-1/2 flex-col gap-4 lg:gap-8 lg:items-start items-center ">
          <h1 className="text-3xl lg:text-6xl lg:text-left text-center font-bold text-[var(--primary-orange)]">
            We Would love to hear from you
          </h1>
          <p className="text-white text-lg lg:text-xl">
            Send us a message or connect with us
          </p>
          <div className="flex gap-4">
            <a>
              <X
                size={28}
                className="text-white cursor-pointer hover:text-orange-400"
              />
            </a>
            <a>
              <Twitter
                size={28}
                className="text-white cursor-pointer hover:text-orange-400"
              />
            </a>
            <a>
              <Linkedin
                size={28}
                className="text-white cursor-pointer  hover:text-orange-400"
              />
            </a>
          </div>
        </div>

        <form className="basis-1/2 bg-white mt-[30px] rounded-2xl w-full p-4 grid gird-cols-1 gap-6">
          <div>
            <label className="block text-[15px] text-gray-600 mb-2 font-light">
              Full Name
            </label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 text-gray-600 text-[15px] font-light">
              Email Address
            </label>
            <input
              type="text"
              className="w-full text-gray-600 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2  text-gray-600 text-[15px] font-light">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button className="w-full p-2 bg-blue-700 text-white rouunded-md hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </Motion>
  );
}
export default Contact;
