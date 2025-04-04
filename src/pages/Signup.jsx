import { useJobifyContext } from "@/components/context/JobifyProvider";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from "@/components/GeneralComponents/Spinner";
import { useState } from "react";
import { useSignup } from "@/authentication/useSignup";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending } = useSignup();

  const isFormValid = firstName && lastName && email && password;
  console.log(isFormValid);

  const { passwordVisibilty, handlePasswordVisibility } = useJobifyContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup({ email, password, firstName, lastName });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl text-center font-semibold">
        Create your Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-[90vw] md:w-[500px] m-auto bg-white text-sm rounded-xl p-5 border-[1px] my-[30px] "
      >
        <div className="grid gap-4 grid-cols-1   ">
          <div>
            <label className="block mb-2">
              First name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full  rounded-sm border   border-gray-300 px-3 py-2"
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className="block mb-2">
              Last name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              disabled={isPending}
              className="w-full border-gray-300  rounded-sm border   py-2 px-3 "
            />
          </div>
          <div>
            <label className="mb-2 block">
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border-gray-300 input-field  rounded-sm border  px-3 py-2"
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className="block mb-2">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={passwordVisibilty ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isPending}
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

          <button
            disabled={!isFormValid}
            className={`${
              isFormValid ? "bg-black" : "bg-gray-900 "
            }  item-center flex justify-center mt-[10px] text-sm text-white rounded-sm py-[8px]`}
          >
            {isPending ? <Spinner /> : "Sign up"}
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
};

export default Signup;
