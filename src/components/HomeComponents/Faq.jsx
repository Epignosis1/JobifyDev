import { useJobifyContext } from "@/components/context/JobifyProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Motion from "./Motion";

const Faq = () => {
  const { helpRef } = useJobifyContext();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq" && helpRef.current) {
      helpRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, helpRef]);
  return (
    <Motion>
      <div className=" my-[120px] w-11/12 mx-auto" ref={helpRef}>
        <div className="relative mt-5 " id="faq">
          <img src="/faq.svg" alt="about-hero-img" className="rounded-t-xl" />
          <motion.div
            className="text-xl lg:text-2xl font-medium px-10 absolute bottom-2 md:right-100 right-0  lg:text-lg bg-sub rounded-r-full shadow-md"
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
          >
            Frequently asked questions
          </motion.div>
        </div>
        <div className="w-11/12 md:w-10/12 mt-5 mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="lg:text-lg">
                How do I apply?
              </AccordionTrigger>
              <AccordionContent className=" lg:text-lg bg-gray-100 px-4 py-2 rounded-2xl">
                Click on the job title and follow the directions for applying in
                the selected listing. If you have questions about an application
                you have submitted, you should contact the employer directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="lg:text-lg">
                Do I need a laptop before i can visit Jobify?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg bg-gray-100 px-4 py-2 rounded-2xl">
                No. You can use your smartphone to access jobify.com as well.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="lg:text-lg">
                Does applying for a job require a resume?
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg bg-gray-100 px-4 py-2 rounded-2xl">
                Yes. Employers use resumes to make hiring decisions because they
                provide information about your focus, credentials, strengths,
                and dedication to beginning or changing a profession.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="lg:text-lg">
                Does Jobify get a part of my pay if I acquire a job?
              </AccordionTrigger>
              <AccordionContent className=" lg:text-lg bg-gray-100 px-4 py-2 rounded-2xl">
                Does Jobify get a part of my pay if I acquire a job?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="lg:text-lg">
                Can I use Jobify to advertise?
              </AccordionTrigger>
              <AccordionContent className=" lg:text-lg bg-gray-100 px-4 py-2 rounded-2xl">
                Yes, you can. As an employer, click &#39;Post a job&#39; and
                select one of the alternatives to post your job openings on
                Jobify.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Motion>
  );
};

export default Faq;
