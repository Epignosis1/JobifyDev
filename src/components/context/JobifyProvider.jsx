import { useContext, createContext, useRef, useState } from "react";

const JobifyContext = createContext();
function JobifyProvider({ children }) {
  const workRef = useRef(null);
  const [isInactive, setIsInactive] = useState(true);
  const [firstName, setFirstName] = useState("");

  const handleNext = (e) => {
    if (!firstName) return;
    e.preventDefault();
    setIsInactive(false);
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <JobifyContext.Provider
      value={{
        workRef,
        isInactive,
        setIsInactive,
        handleNext,
        setFirstName,
      }}
    >
      {children}
    </JobifyContext.Provider>
  );
}

export const useJobifyContext = () => {
  const context = useContext(JobifyContext);
  return context;
};

export default JobifyProvider;
