import { useState } from "react";
import { useJobifyContext } from "@/components/context/JobifyProvider";

function FirstForm({ signType }) {
  const [dob, setDob] = useState(" ");
  const { handleNext, firstName, setFirstName } = useJobifyContext();
  return (
    <>
      <form className="w-full bg-white text-sm rounded-xl p-5 border-[1px] border-purple-300 ">
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 ">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow-md rounded-sm border  mb-6 border-purple-900 px-3 py-2"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="shadow-md rounded-sm border mb-6 border-purple-900 py-2 px-3 "
          />
        </div>

        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
          <input
            type="phone"
            required
            className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Phone number"
          />
          <input
            type="email"
            className=" w-full input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder={signType === "seeker" ? `Email address` : `Work Email`}
            required
          />
        </div>

        {signType === "seeker" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Country"
                required
                className="shadow-md rounded-sm border border-purple-900 px-3 py-2"
              />
              <input
                type="text"
                required
                placeholder="State"
                className="shadow-md rounded-sm border border-purple-900 px-3"
              />
            </div>

            <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 ">
              <div className="mb-4">
                <label className="text-sm text-gray-500 ">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dob}
                  required
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full shadow-md rounded-sm border border-purple-900 py-2 mb-4 px-3"
                />
              </div>
              <select className="w-full shadow-md rounded-sm self-center border border-purple-900 py-2 mb-4 px-3">
                <option>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 item-center justify-center">
          {signType === "employer" && (
            <div className="self-start">
              <label>Position in the Company</label>
              <select className="w-full shadow-md rounded-sm self-center border border-purple-900 py-2 mb-4 px-3">
                <option disabled selected>
                  Select...
                </option>
                <option value="boss">C-level: CEO/COO/CIO/CFO/CTO/CPO</option>
                <option value="senior">
                  Senior Managemant: Head of Department /Team Lead
                </option>
                <option value="middle">
                  Middle Management: Supervisor/ Unit Head
                </option>
                <option value="junior">Junior Level: Associate /Officer</option>
              </select>
            </div>
          )}

          <div className="md:mt-5">
            <input
              type="password"
              className=" w-full input-field mb-2 shadow-md self-center rounded-sm border border-purple-900 px-3 py-2"
              placeholder=" Create Password"
            />
            <p className="text-xs text-gray-500 mb-4">
              Please be informed that your password should entail uppercase
              letters, lowercase letters, numbers, and symbols
            </p>
          </div>
        </div>
        <p className="mb-4">Already have an account? Log in</p>
        <button
          onClick={handleNext}
          className="p-4  bg-purple-950 text-white py-2 rounded-sm hover:bg-purple-800 transition duration-300"
        >
          Next
        </button>
      </form>
    </>
  );
}

export default FirstForm;
