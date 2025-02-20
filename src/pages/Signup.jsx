import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/GeneralComponents/Footer";
import Nav from "@/components/GeneralComponents/Nav";
import Form from "@/components/FormComponents/Form";
import { useJobifyContext } from "@/components/context/JobifyProvider";

const Signup = () => {
  const { signupMode } = useJobifyContext();

  return (
    <div className=" h-screen">
      <Nav />

      <div className="text-center text-gray-700  mt-10 mb-8  flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Create a Job {signupMode} Account
        </h2>
        <p className=" ">Your new career is one click away</p>
        <p className="text-2xl">STEP 1 of 2</p>
      </div>

      <Form />

      <Footer />
    </div>
  );
};

export default Signup;
