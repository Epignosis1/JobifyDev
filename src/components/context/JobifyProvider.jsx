import { useContext, createContext, useRef, useReducer } from "react";

const JobifyContext = createContext();
const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    qualification: "",
    experience: "",
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
  const helpRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: "formDataUpdate",
      payload: {
        ...formData,
        [name]: value,
      },
    });
  }
  return (
    <JobifyContext.Provider
      value={{
        helpRef,
        isInactive,

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
