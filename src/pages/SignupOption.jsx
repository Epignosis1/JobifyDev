import SignOptbtn from "@/components/SignOptbtn";
import { useNavigate } from "react-router-dom";

const SignupOption = () => {
  const signup = [
    {
      img: "/seeker.svg",
      option: "Job Seeker",
      description:
        "Are you looking for your dream Job,Create a Unique career profile with Jobify",
      mode: "seeker",
      id: 1,
    },
    {
      img: "/employer.svg",
      option: "Employer",
      description:
        "Are you looking for your quality candidate? Advertise an search with Jobberman",
      mode: "employer",
      id: 2,
    },
  ];
  const navigate = useNavigate();
  const handleClick = (sign) => {
    navigate(`/signUpOption/${sign.mode}`);
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-10 font-bold">
        Create your account
      </h1>
      <div className="flex flex-col  md:flex-row justify-center text-center ">
        {signup.map((sign) => (
          <div
            key={sign.id}
            className="border-[1px] flex flex-col w-[400px] rounded md:w-[500px] h-[400px] gap-3 m-auto md:m-8 items-center  justify-center  mt-8 "
          >
            <img src={sign.img} alt="hii" />
            <h2 className="text-2xl font-bold">{sign.option}</h2>
            <p className="text-base -gray-500">{sign.description}</p>

            <SignOptbtn onClick={() => handleClick(sign)}>
              {sign.mode}
            </SignOptbtn>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignupOption;
