import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const jobApi = async ({ jobTitle, location }) => {
  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    jobTitle
  )}%20jobs%20in%20${encodeURIComponent(
    location
  )}&page=1&num_pages=1&country=us&date_posted=all`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aec8bb047fmsh26e2dd4d4548503p1b3a40jsne6df788e0115",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
};

export const useJobApi = ({ jobTitle, location }) => {
  const {
    isLoading,
    data: jobResult,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["storedJobs", jobTitle, location],
    queryFn: () => jobApi({ jobTitle, location }),

    onError: (error) => toast.error(error.message),
  });

  return { isLoading, jobResult, isError, refetch };
};
