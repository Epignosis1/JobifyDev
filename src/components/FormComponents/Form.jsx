import FormLayout from "./FormLayout";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import { useJobifyContext } from "../context/JobifyProvider";

const Form = () => {
  const { signupMode } = useJobifyContext();
  return (
    <>
      <FormLayout
        header={
          signupMode === "seeker"
            ? "Personal Information"
            : "Company representative"
        }
        paragraph={`This information is pertaining to you as
          ${
            signupMode === "seeker"
              ? "an individual"
              : "a representative of your company"
          }`}
      >
        {/* Personal /Company representative */}
        <FirstForm />
      </FormLayout>

      {/* Work / Company information */}
      <p className="text-2xl align-self text-center my-5">STEP 2 of 2</p>
      <FormLayout
        header={
          signupMode === "seeker" ? "Work Information" : "Company information"
        }
        paragraph={`This information is pertaining to 
          ${
            signupMode === "seeker"
              ? "your work experience"
              : "the information about this company"
          }`}
      >
        {/* Personal /Company representative */}
        <SecondForm />
      </FormLayout>
    </>
  );
};

export default Form;
