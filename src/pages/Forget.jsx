import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useForget } from "@/authentication/useForget";

export default function Forget() {
  const [email, setEmail] = useState("");
  const { forget, isPending } = useForget();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    forget({ email });
    setEmail("");
  };
  return (
    <>
      <h2 className="text-center text-2xl mt-10 mb-2 font-semibold ">
        Forgot your password?
      </h2>
      <p className=" text-gray-700 px-14 text-center text-sm mb-6">
        Enter your email address and we`ll send you a password reset OTP
      </p>
      <div className="flex border bg-white border-gray-200 border-opacity-70  shadow-lg  flex-col py-6  rounded-xl md:w-[500px] w-[90%]  mx-auto">
        <form className="grid gap-y-2  mx-5 grid-cols-1 ">
          <>
            <label className="text-sm font-medium">Email address</label>
            <input
              disabled={isPending}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className=" border focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded"
            />
          </>

          <button
            onClick={handleSubmit}
            className="bg-black item-center mb-6 flex justify-center mt-[20px] text-sm text-white rounded-sm py-[8px] "
            type="submit"
          >
            {isPending ? "Sending..." : "Send reset link"}
          </button>

          <div className="flex items-center gap-4 ">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="text-gray-500 text-sm">Or go back to</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className=" text-sm my-4 text-[var(--light-purple)] cursor-pointer font-semibold"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
