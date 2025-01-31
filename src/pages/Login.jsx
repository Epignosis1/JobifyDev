import Nav from "../component/Nav";
import Logo from "../component/Logo";

import Continue from "../component/Continue";

function Login() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col py-10 justify-center bg-[#2A033F] rounded-xl w-[500px] mt-20 mx-auto">
        <div className="flex justify-center items-center mb-5">
          <Logo />
        </div>
        <form className="grid gap-y-8 mx-5 grid-cols-1 ">
          <input type="email" className="p-2 " placeholder="Email address:" />
          <input type="password" className=" p-2 " placeholder="Password:" />
          <button
            className="bg-[#F69D1D] text-[#2A033F] rounded-full py-2 "
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
        New to Jobify? <a className="text-[#F69D1D] font-medium">Join now</a>
      </p>
    </div>
  );
}
export default Login;
