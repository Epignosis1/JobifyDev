import Continue from "@/components/LoginComponent/Continue";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="flex ">
        <button
          onClick={() => navigate(-1)}
          className="bg-white shadow-md m-3 p-2 rounded-lg"
        >
          <ChevronLeft className="h-4 inline w-4 shrink-0 text-muted-foreground transition-transform duration-200" />{" "}
          back
        </button>
      </div>
      <h2 className="text-center text-2xl mt-10 mb-8 font-semibold ">
        Log in to your account
      </h2>
      <div className="flex border bg-white border-gray-200 border-opacity-70  shadow-lg  flex-col py-6  rounded-xl md:w-[500px] w-[90%]  mx-auto">
        <form className="grid gap-y-2  mx-5 grid-cols-1 ">
          <>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              className=" border focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded"
            />
          </>
          <>
            <label className="font-medium text-sm mt-[20px]">Password</label>
            <input
              type="password"
              className="border focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded "
            />
          </>
          <button
            className="bg-black mt-[20px] text-sm text-white rounded-sm py-[8px] "
            type="submit"
          >
            Log in
          </button>
        </form>

        <a className="mt-3 mt-[20px] mx-5 text-[var(--light-purple)] text-sm">
          {" "}
          Forgot your password?
        </a>
      </div>

      <div>
        <Continue Logo="/Google.svg" Text="Google" />
        <Continue Logo="/Facebook.svg" Text="Facebook" />
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
