import { useJobApi } from "@/services/jobApi";
import { MapPin } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { Bookmark } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function JobList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get("jobTitle");
  const location = searchParams.get("location");
  const jobsPerPage = 20;

  const { jobResult } = useJobApi({
    jobTitle,
    location,
  });
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = jobResult.data.slice(startIndex, endIndex);
  console.log(currentJobs);
  const totalPages = Math.ceil(jobResult.data.length / jobsPerPage);

  return (
    <div className="relative">
      <button className="flex gap-3 text-sm border border-blue-800 w-[450px] m-auto p-3 items-center mt-4 cursor-pointer rounded">
        <FaSearch size={16} /> {`${jobTitle} jobs in ${location}`}
      </button>

      <p className="mx-4 mt-8 mb-4 text-sm">{jobResult.data.length} jobs</p>
      <div className="">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-200 flex justify-between  p-4"
          >
            <div className="  flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#00008B]">
                {job.job_title}
              </h2>
              <p className="text-base text-gray-600">{job.employer_name}</p>
              <div className="flex items-center text-sm font-medium gap-2">
                <div className="text-orange-500">
                  <MapPin />
                </div>
                {job.job_location}
              </div>
              <p className="text-sm bg-gray-100 w-fit p-1 rounded-2xl">
                {job.job_posted_at}
              </p>
            </div>

            <div className="mt-2 bg-white text-gray-700">
              <Bookmark />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4  justify-between mx-4">
        {currentPage > 1 && (
          <button
            className="px-4 py-2 bg-[#00008B] w-[100px] text-white rounded "
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
        )}
        <span className="text-sm text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4  py-2 bg-[#00008B] w-[100px] text-white rounded "
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
