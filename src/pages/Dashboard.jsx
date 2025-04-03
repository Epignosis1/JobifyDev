import { useEffect, useState } from "react";

import { useJobApi } from "@/services/jobApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Account } from "./Account";

import { MapPin } from "lucide-react";
import { BriefcaseBusinessIcon } from "lucide-react";

function Dashboard() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const { jobResult } = useJobApi({
    jobTitle,
    location,
  });

  const useHandleSubmit = (e) => {
    e.preventDefault();

    try {
      navigate(`/joblist?jobTitle=${jobTitle}&location=${location}`);
    } catch {
      toast.error("Failled to fetch jobs.Please try again");
    } finally {
      setLocation("");
    }
  };

  useEffect(() => {
    if (jobResult) console.log(jobResult);
  }, [jobResult]);
  return (
    <div className="  md:mt-[100px] mt-4 text-gray-900">
      {/* Search Form */}
      <div className="flex justify-center ">
        <form
          onSubmit={useHandleSubmit}
          className="p-4 md:flex items-center  justify-center rounded-lg w-full md:space-y-0 md:max-w-full max-w-3xl  space-y-4"
        >
          <div className="basis-[35%]">
            <label className="flex mb-4 items-center font-bold gap-2">
              <div className="">
                <BriefcaseBusinessIcon />
              </div>
              <p>What</p>
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full md:p-6 p-3 md:border-r-0  border-2 border-[#00008B] rounded-lg md:rounded-tr-none md:rounded-br-none  focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job title, keywords, or company"
            />
          </div>

          <div className="basis-[35%]">
            <label className="flex mb-4  items-center font-bold gap-2">
              <MapPin />
              Where
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 md:p-6 md:border-l-0 border-2 border-[#00008B] rounded-lg md:rounded-tl-none md:rounded-bl-none md:rounded-tr-none md:rounded-br-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="w-full basis-[30%] md:w-fit lg:p-7 lg:mt-10 flex justify-center items-center bg-[#00008B] text-white p-3 lg:rounded-none rounded-lg hover:bg-blue-700 transition"
            >
              Search Jobs
            </button>
          </div>
        </form>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-8 gap-14 my-20">
        <div
          onClick={() => navigate("/cv")}
          className=" cursor-pointer text-center lg:rounded lg:text-left lg:border border-gray-400 lg:p-8 lg:w-[38%]"
        >
          <button
            onClick={() => navigate("/cv")}
            className="border-2 lg:border-none lg:text-xl border-[#00008B] lg:w-fit  text-black w-[250px] lg:px-0 px-6 py-3 rounded-full font-semibold  transition"
          >
            Upload your CV
          </button>
          <p className="text-gray-600 mt-2">Find your dream job with jobify</p>
        </div>
        <div
          onClick={() => navigate("/post")}
          className="cursor-pointer text-center lg:text-left lg:rounded lg:border border-gray-400 lg:p-8 lg:w-[38%]"
        >
          <button
            onClick={() => navigate("/post")}
            className="border-2 lg:border-none lg:text-xl border-[#00008B] text-black w-[250px] px-6 py-3 lg:w-fit rounded-full lg:px-0 font-semibold   transition"
          >
            Post a Job
          </button>
          <p className="text-gray-600 mt-2">Find the perfect candidate</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
