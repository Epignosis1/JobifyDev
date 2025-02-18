import { useParams } from "react-router-dom";
import Footer from "@/components/GeneralComponents/Footer";
import Nav from "@/components/GeneralComponents/Nav";
import Form from "@/components/FormComponents/Form";

const Signup = () => {
  const { signType } = useParams();

  return (
    <div className=" h-screen">
      <Nav />

      <div className="text-center text-gray-700  mt-10 mb-8  flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Create a Job {signType} Account
        </h2>
        <p className=" ">Your new career is one click away</p>
        <p className="text-2xl">STEP 1 of 2</p>
      </div>

      <Form signType={signType} />

      <Footer />
    </div>
  );
};

export default Signup;
