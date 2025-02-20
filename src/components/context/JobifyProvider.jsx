import { useContext, createContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const JobifyContext = createContext();
function JobifyProvider({ children }) {
  const workRef = useRef(null);
  const [isInactive, setIsInactive] = useState(true);

  const { signupMode } = useParams();
  const handleNext = (e) => {
    e.preventDefault();
    setIsInactive(false);
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [formData, setFormData] = useState({
    seeker: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      country: "",
      state: "",
      dob: "",
      gender: "",
      qualification: "",
      experience: "",
    },
    employer: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      position: "",
      address: "",
      companyName: "",
      industry: "",
      employees: "",
      typeOfEmployer: "",
    },
  });

  function handleChange(e, signupMode) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [signupMode]: {
        ...prevData[signupMode],
        [name]: value,
      },
    }));
  }
  return (
    <JobifyContext.Provider
      value={{
        workRef,
        isInactive,
        setIsInactive,
        handleNext,
        signupMode,
        formData,
        handleChange,
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
