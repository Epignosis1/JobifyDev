import { NavLink, useNavigate } from "react-router-dom";

import { useJobifyContext } from "@/components/context/JobifyProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";

import Spinner from "@/components/GeneralComponents/Spinner";
import { useLogin } from "@/authentication/useLogin";
import { signInWithGoogle } from "@/authentication/appAuth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  const { login, isPending } = useLogin();

  const { passwordVisibilty, handlePasswordVisibility } = useJobifyContext();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h2 className="text-center text-2xl mt-10 mb-8 font-semibold ">
        Log in to your account
      </h2>
      <div className="flex border bg-white border-gray-200 border-opacity-70  shadow-lg  flex-col py-6  rounded-xl md:w-[500px] w-[90%]  mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid gap-y-2  mx-5 grid-cols-1 "
        >
          <>
            <label className="text-sm font-medium">Email address</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              disabled={isPending}
              className=" border focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded"
            />
          </>
          <>
            <label className="font-medium text-sm mt-[20px]">Password</label>
            <div className="relative">
              <input
                name="password"
                value={password}
                disabled={isPending}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisibilty ? "text" : "password"}
                className="border w-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded "
              />
              <button
                className="absolute top-3 right-2"
                onClick={handlePasswordVisibility}
              >
                {passwordVisibilty ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </>
          <button
            className={`${
              isFormValid ? "bg-black" : "bg-gray-900 "
            } item-center flex justify-center mt-[20px] text-sm text-white rounded-sm py-[8px] `}
            type="submit"
            disabled={!isFormValid}
          >
            {isPending ? <Spinner /> : "Log in"}
          </button>
        </form>

        <a
          onClick={() => navigate("/forget")}
          className="mt-3 cursor-pointer mt-[20px] mx-5 text-[var(--light-purple)] text-sm"
        >
          {" "}
          Forgot your password?
        </a>
      </div>

      <div>
        <div className="flex justify-center items-center my-4">
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full max-w-sm px-4 py-3 border border-gray-200 shadown-md rounded-3xl shadow-sm text-sm font-meedium text-gray-700 bg-white hover:bg-gray-100"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
      <p className="text-center text-sm">
        New to Jobify?{" "}
        <NavLink
          to="/Signup"
          className="text-[var(--light-purple)] cursor-pointer font-semibold"
        >
          Join now
        </NavLink>
      </p>
    </>
  );
}
export default Login;
