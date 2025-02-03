import { NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="flex ">
        <button className="shadow-md m-3 p-2 rounded-lg">
          <NavLink to="/">&larr; Back to home</NavLink>
        </button>
      </div>
      <h2 className="text-center text-3xl mt-10 mb-8 font-semibold ">
        Create your account
      </h2>
      <div className="flex shadow-lg mx-10 rounded-lg p-4 bg-white">
        <form className="w-full bg-white text-sm py-3 ">
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <input
              type="text"
              className="shadow-md rounded-sm border border-purple-900 px-3 py-2"
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="shadow-md rounded-sm border border-purple-900 px-3 "
            />
          </div>

          <input
            type="phone"
            className="w-full grid input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Phone number"
          />
          <input
            type="email"
            className=" w-full input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Email address"
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Country"
              className="shadow-md rounded-sm border border-purple-900 px-3 py-2"
            />
            <input
              type="text"
              placeholder="State"
              className="shadow-md rounded-sm border border-purple-900 px-3"
            />
          </div>

          <input
            type="password"
            className=" w-full input-field mb-2 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Password"
          />
          <p className="text-xs text-gray-500 mb-4">
            Please be informed that your password should entail uppercase
            letters, lowercase letters, numbers, and symbols
          </p>
          <input
            type="password"
            className="w-full input-field mb-4 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Confirm password"
          />
          <button className="p-4 bg-purple-950 text-white py-2 rounded-sm hover:bg-purple-800 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
