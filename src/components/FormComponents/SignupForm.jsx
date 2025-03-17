import { useJobifyContext } from "@/components/context/JobifyProvider";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signUpUser } from "@/authentication/appAuth.js";
import { useState } from "react";

function Form() {
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { passwordVisibilty, handlePasswordVisibility, dispatch } =
    useJobifyContext();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // setMessage("");
      const result = await signUpUser(email, password, firstName, lastName);
      if (result.success) navigate("/");
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: "resetSignUpForm" });
  };

  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl text-center font-semibold">
        Create a your Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-[90vw] md:w-[500px] m-auto bg-white text-sm rounded-xl p-5 border-[1px] my-[30px] "
      >
        <div className="grid gap-4 grid-cols-1   ">
          <div>
            <label className="block mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full  rounded-sm border   border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full border-gray-300  rounded-sm border   py-2 px-3 "
            />
          </div>
          <div>
            <label className="mb-2 block">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border-gray-300 input-field  rounded-sm border  px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisibilty ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-gray-300 grid input-field  rounded-sm border  px-3 py-2"
              />
              <button
                className="absolute top-3 right-2"
                onClick={handlePasswordVisibility}
              >
                {passwordVisibilty ? <FaEye /> : <FaEyeSlash />}
              </button>

              {password && (
                <div className="text-red-600 text-sm">
                  {password.length < 5 ? "Password must be greater than 4" : ""}
                </div>
              )}
            </div>
          </div>

          <button className="p-4 w-full bg-black text-white py-2 rounded-sm hover:bg-blue-800 transition duration-300">
            Sign up
          </button>

          <div className="flex items-center gap-4 ">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="text-gray-500">Already have an account?</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>

          <div className="flex cursor-pointer text-blue-900 font-medium justify-center">
            <a className="block" onClick={() => navigate("/login")}>
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
