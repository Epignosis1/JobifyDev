import { useContext, createContext, useRef, useReducer } from "react";

const JobifyContext = createContext();
const initialState = {
  passwordVisibilty: false,
  isOpen: false,
};

function reductionFunction(state, action) {
  switch (action.type) {
    case "password":
      return { ...state, passwordVisibilty: action.payload };
    case "navOpen":
      return { ...state, isOpen: action.payload };
  }
}
function JobifyProvider({ children }) {
  const [state, dispatch] = useReducer(reductionFunction, initialState);
  const { passwordVisibilty, isOpen } = state;

  const helpRef = useRef(null);

  function handlePasswordVisibility(e) {
    e.preventDefault();
    dispatch({ type: "password", payload: !passwordVisibilty });
  }

  return (
    <JobifyContext.Provider
      value={{
        helpRef,
        passwordVisibilty,
        isOpen,
        handlePasswordVisibility,
        dispatch,
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
