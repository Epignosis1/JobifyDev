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
      <div className="flex bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--light-purple)] flex-col py-10  rounded-xl md:w-[500px] w-[400px]  mx-auto">
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
            className="bg-[var(--primary-orange)] text-[var(--dark-purple)] rounded py-2 "
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
        New to Jobify?{" "}
        <NavLink
          to="/Signup"
          className="text-[var(--primary-orange)] cursor-pointer font-semibold"
        >
          Join now
        </NavLink>
      </p>
    </div>
  );
}
export default Login;
