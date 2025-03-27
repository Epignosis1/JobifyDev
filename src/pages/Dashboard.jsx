import { useEffect, useState } from "react";
import Spinner from "@/components/GeneralComponents/Spinner";
import { useJobApi } from "@/services/jobApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Appfooter from "@/components/ui/Appfooter";

function Dashboard() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const upPostsBtn = [
    {
      btn: "Upload your CV",
      content: "Find your dream job with Jobify",
      id: 1,
    },
    { btn: "Post a job", content: "Find the perfect candidate", id: 2 },
  ];

  const { isLoading, jobResult, isError, refetch } = useJobApi({
    jobTitle,
    location,
  });

  const useHandleSubmit = async (e) => {
    e.preventDefault();

    await refetch();
    setJobTitle("");
    setLocation("");
    navigate(`/joblist?jobTitle=${jobTitle}&location=${location}`);
    if (isError) toast.error("Error fetching data");
  };

  useEffect(() => {
    if (jobResult) console.log(jobResult);
  }, [jobResult]);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="flex flex-col items-center text-center py-24 px-6">
        <h1 className="text-4xl text-[#00008B] font-bold mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-600 text-lg max-w-lg">
          Explore thousands of opportunities and connect with the best
          employers.
        </p>
      </div>

      {/* Search Form */}
      <div className="flex justify-center">
        <form
          onSubmit={useHandleSubmit}
          className="bg-gray-100 p-6 shadow-md rounded-lg w-full max-w-lg space-y-4"
        >
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job title, keywords, or company"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City"
          />

          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#00008B] text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            {isLoading ? <Spinner /> : "Search Jobs"}
          </button>
        </form>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-14 my-20">
        {upPostsBtn.map((upPost) => (
          <div key={upPost.id} className="text-center">
            <button className="border-2 border-[#00008B] text-black w-[250px] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition">
              {upPost.btn}
            </button>
            <p className="text-gray-600 mt-2">{upPost.content}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Appfooter />
    </div>
  );
}

export default Dashboard;
