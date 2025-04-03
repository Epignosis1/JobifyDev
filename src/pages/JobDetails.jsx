import { useParams } from "react-router-dom";
import { useJobApiDetails } from "@/services/jobdetailsApi";
import { Clock, MapPin, Notebook } from "lucide-react";

function JobDetails() {
  const { id } = useParams();
  console.log(id);

  const { jobDetailsResult, isLoading } = useJobApiDetails({ id });

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;

  const jobDetails = jobDetailsResult?.data || [];
  return (
    <div className="m-6">
      {jobDetails.map((jobDetail) => (
        <>
          <div key={jobDetail.job_id} className="flex flex-col gap-4">
            <h2 className="text-2xl  font-medium">{jobDetail.job_title}</h2>
            <p className="text-gray-500 text-lg">{jobDetail.employer_name}</p>

            <div className="flex text-sm gap-2 font-medium items-center">
              <div className="text-[#00008B]">
                <MapPin size={20} />
              </div>
              {jobDetail.job_location}
            </div>
            <div className="flex text-sm gap-2 font-medium items-center">
              <div className="text-[#00008B]">
                <Notebook size={20} />
              </div>
              Permanent
            </div>
            <div className="flex text-sm gap-2 font-medium items-center">
              <div className="text-[#00008B]">
                <Clock size={20} />
              </div>
              {jobDetail.job_employment_type}
            </div>
            <p className="text-sm bg-gray-200 w-fit p-1 rounded-2xl">
              {jobDetail.job_posted_at}
            </p>
          </div>
          <div className="border-t border-gray-300 mt-4 pt-8 ">
            <p>{jobDetail.job_description}</p>
          </div>

          <a
            className='"flex block text-center cursor-pointer items-center lg:w-[200px] w-full bg-blue-800 p-2 text-white font-semibold rounded-3xl justify-center mt-10'
            href={jobDetail.job_apply_link}
            target="_blank"
          >
            Apply
          </a>
        </>
      ))}
    </div>
  );
}
export default JobDetails;
