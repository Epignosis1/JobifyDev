import { useContext, createContext, useRef, useReducer } from "react";
import { useParams } from "react-router-dom";

const JobifyContext = createContext();
const initialState = {
  formData: {
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
  },
  isInactive: true,
};

function reductionFunction(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, isInactive: false };
    case "formDataUpdate":
      return { ...state, formData: action.payload };
  }
}
function JobifyProvider({ children }) {
  const [state, dispatch] = useReducer(reductionFunction, initialState);

  const { formData, isInactive } = state;
  const workRef = useRef(null);

  const { signupMode } = useParams();
  const handleNext = (e) => {
    e.preventDefault();
    dispatch({ type: "next" });
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function handleChange(e, signupMode) {
    const { name, value } = e.target;
    dispatch({
      type: "formDataUpdate",
      payload: {
        ...formData,
        [signupMode]: { ...formData[signupMode], [name]: value },
      },
    });
  }
  return (
    <JobifyContext.Provider
      value={{
        workRef,
        isInactive,
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
