import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  const data = [
    {
      title: "Our Vision",
      description:
        "To become the most trusted and reliable recruitment platform in Nigeria, with a focus on career development and recruitment solutions.",
      image: "/main3.png",
      order: false,
    },
    {
      title: "Our Mission",
      description:
        "To provide an inclusive and accessible platform for Nigerian job seekers and recruiters to find and apply for suitable jobs, while also empowering them to develop their careers.",
      image: "/visionImg.svg",
      order: true,
    },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="space-y-5 my-[120px]">
      <div className="w-11/12 mx-auto text-white mt-5">
        <div className="relative overflow-hidden">
          <img
            src="/about.png"
            alt="about-hero-img"
            className="rounded-t-xl md:w-[800px] m-auto"
          />
          <motion.p
            className="text-xl lg:text-2xl font-medium px-10 absolute bottom-2 md:right-80 right-0 bg-sub rounded-r-full shadow-md"
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
          >
            About us
          </motion.p>
        </div>
        <div className=" bg-main pt-3 rounded-b-md">
          <p className="text-sm md:text-base text-center w-11/12 pb-4 mx-auto">
            Jobify is a new recruitment website in Nigeria that connects skilled
            job seekers with verified companies and is primarily focused on
            career development and recruitment solutions.
            <br /> Jobify provides organizations and job seekers with
            individualized HR solutions, training services, and online career
            development support.
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col my-[80px] md:flex-row gap-4 items-center px-5 py-5"
          >
            <img
              src={item.image}
              alt="about-img"
              className={`${item.order ? "md:order-2" : ""} md:w-5/12`}
            />
            <div
              className={`${
                item.order ? "md:order-1" : ""
              } md:w-6/12 text-center`}
            >
              <h3 className="text-xl lg:text-3xl  font-semibold">
                {item.title}
              </h3>
              <p className="lg:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
