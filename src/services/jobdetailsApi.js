import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const jobApiDetails = async ({ id }) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&country=us`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b53f30c35emsh84792794d7302b8p1d7e6ejsnede270f2b566",
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
