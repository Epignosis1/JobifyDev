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
  passwordVisibilty: false,
  isOpen: false,
};

function reductionFunction(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, isInactive: false };
    case "formDataUpdate":
      return { ...state, formData: action.payload };
    case "password":
      return { ...state, passwordVisibilty: action.payload };
    case "navOpen":
      return { ...state, isOpen: action.payload };
  }
}
function JobifyProvider({ children }) {
  const [state, dispatch] = useReducer(reductionFunction, initialState);
  const { formData, isInactive, passwordVisibilty, isOpen } = state;
  const helpRef = useRef(null);

  function handlePasswordVisibility(e) {
    e.preventDefault();
    dispatch({ type: "password", payload: !passwordVisibilty });
  }
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
        passwordVisibilty,
        isOpen,
        dispatch,
        formData,
        handleChange,
        handlePasswordVisibility,
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
