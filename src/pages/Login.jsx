import { NavLink, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useJobifyContext } from "@/components/context/JobifyProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { login } from "@/authentication/appAuth";
import Spinner from "@/components/GeneralComponents/Spinner";
import { useLogin } from "@/authentication/useLogin";
import { Toaster } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("jonas@example.com");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  const { passwordVisibilty, handlePasswordVisibility } = useJobifyContext();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="flex ">
        <button
          onClick={() => navigate("/")}
          className="bg-white shadow-md m-3 p-2 rounded-lg"
        >
          <ChevronLeft className="h-4 inline w-4 shrink-0 text-muted-foreground transition-transform duration-200" />{" "}
          Back
        </button>
      </div>
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
              disabled={isLoading}
              className=" border focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded"
            />
          </>
          <>
            <label className="font-medium text-sm mt-[20px]">Password</label>
            <div className="relative">
              <input
                name="password"
                value={password}
                disabled={isLoading}
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
            <Toaster />
          </>
          <button
            className="bg-black item-center flex justify-center mt-[20px] text-sm text-white rounded-sm py-[8px] "
            type="submit"
          >
            {isLoading ? <Spinner /> : "Log in"}
          </button>
        </form>

        <a className="mt-3 mt-[20px] mx-5 text-[var(--light-purple)] text-sm">
          {" "}
          Forgot your password?
        </a>
      </div>

      <div>
        <div className="flex  gap-x-8 items-center text-[#74737e] w-[400px] mx-auto my-4 justify-center border border-gray-900 bg-white py-2 border-opacity-10 rounded-full ">
          <div>
            <img src="/Google.svg" className=" w-7 " />
          </div>
          <p className="text-sm">Continue with Google</p>
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
    </div>
  );
}
export default Login;
