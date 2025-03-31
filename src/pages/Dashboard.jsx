import { useEffect, useState } from "react";

import { useJobApi } from "@/services/jobApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-white mt-4 text-gray-900">
      {/* Search Form */}
      <div className="flex justify-center">
        <form
          onSubmit={useHandleSubmit}
          className="p-4  rounded-lg w-full max-w-lg space-y-4"
        >
          <label className="flex items-center font-bold gap-2">
            <div className="">
              <BriefcaseBusinessIcon />
            </div>
            <p>What</p>
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-3 border-2 border-[#00008B] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job title, keywords, or company"
          />

          <label className="flex items-center font-bold gap-2">
            <MapPin />
            Where
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border-2 border-[#00008B] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City"
          />

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#00008B] text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search Jobs
          </button>
        </form>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-14 my-20">
        <div className="text-center">
          <button
            onClick={() => navigate("/cv")}
            className="border-2 border-[#00008B] text-black w-[250px] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
          >
            Upload your CV
          </button>
          <p className="text-gray-600 mt-2">Find your dream job with jobify</p>
        </div>
        <div className="text-center">
          <button className="border-2 border-[#00008B] text-black w-[250px] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition">
            Post a Job
          </button>
          <p className="text-gray-600 mt-2">Find the perfect candidate</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
