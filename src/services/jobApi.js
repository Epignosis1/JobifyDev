import { useQuery } from "@tanstack/react-query";

export const jobApi = async ({ jobTitle, location }) => {
  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    jobTitle
  )}%20jobs%20in%20${encodeURIComponent(
    location
  )}&page=1&num_pages=20&country=us&date_posted=all`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "302dc427ecmsh3f534419a9ddbe7p13aa2ejsne01b32e8d11d",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
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
    enabled: false,
  });

  return { isLoading, jobResult, isError, refetch };
};
