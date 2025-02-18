import FormLayout from "./FormLayout";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const Form = ({ signType }) => {
  return (
    <>
      <FormLayout
        header={
          signType === "seeker"
            ? "Personal Information"
            : "Company representative"
        }
        paragraph={`This information is pertaining to you as
          ${
            signType === "seeker"
              ? "an individual"
              : "a representative of your company"
          }`}
      >
        {/* Personal /Company representative */}
        <FirstForm signType={signType} />
      </FormLayout>

      {/* Work / Company information */}
      <p className="text-2xl align-self text-center my-5">STEP 2 of 2</p>
      <FormLayout
        header={
          signType === "seeker" ? "Work Information" : "Company information"
        }
        paragraph={`This information is pertaining to 
          ${
            signType === "seeker"
              ? "your work experience"
              : "the information about this company"
          }`}
      >
        {/* Personal /Company representative */}
        <SecondForm signType={signType} />
      </FormLayout>
    </>
  );
};

export default Form;
