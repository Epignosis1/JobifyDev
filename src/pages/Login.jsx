import Logo from "../component/GeneralComponents/Logo";
import { NavLink } from "react-router-dom";

import Continue from "../component/LoginComponent/Continue";

function Login() {
  return (
    <div>
      <div className="flex ">
        <button className="shadow-md m-3 p-2 rounded-lg">
          <NavLink to="/">&larr; back</NavLink>
        </button>
      </div>
      <h2 className="text-center text-2xl mt-10 mb-8 font-semibold ">
        Log in to your account
      </h2>
      <div className="flex bg-gradient-to-tr from-[#2A033F] to-[#7B1FA2] flex-col py-10 bg-[#2A033F] rounded-xl md:w-[500px] w-[450px]  mx-auto">
        <div className="flex justify-center items-center mb-5">
          <Logo />
        </div>
        <form className="grid gap-y-8 mx-5 grid-cols-1 ">
          <input
            type="email"
            className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded"
            placeholder="Email address:"
          />
          <input
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-gray-300 p-2 rounded "
            placeholder="Password:"
          />
          <button
            className="bg-[#F69D1D] text-[#2A033F] rounded py-2 "
            type="submit"
          >
            Login
          </button>
        </form>

        <a className="mt-3 mx-5 text-orange-400 text-sm"> Forget password?</a>
      </div>

      <div>
        <Continue Logo="/Google.svg" Text="Google" />
        <Continue Logo="/Facebook.svg" Text="Facebook" />
      </div>
      <p className="text-center text-sm">
        New to Jobify? <a className="text-[#F69D1D] font-semibold">Join now</a>
      </p>
    </div>
  );
}
export default Login;
