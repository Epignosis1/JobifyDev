import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const jobApiDetails = async ({ id }) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&country=us`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aec8bb047fmsh26e2dd4d4548503p1b3a40jsne6df788e0115",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);

  return result;
};

export const useJobApiDetails = ({ id }) => {
  const {
    isLoading,
    data: jobDetailsResult,
    isError,
  } = useQuery({
    queryKey: ["storedJobs", id],
    queryFn: () => jobApiDetails({ id }),
    onError: (error) => toast.error(error.message),
  });
  console.log(jobDetailsResult);
  return { isLoading, jobDetailsResult, isError };
};
