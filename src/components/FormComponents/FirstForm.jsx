import { useJobifyContext } from "@/components/context/JobifyProvider";

function FirstForm() {
  const { handleNext, signupMode, formData, handleChange } = useJobifyContext();
  return (
    <>
      <form className="w-full bg-white text-sm rounded-xl p-5 border-[1px] border-purple-300 ">
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 ">
          <input
            type="text"
            name="firstName"
            value={formData[signupMode].firstName}
            onChange={(e) => handleChange(e, signupMode)}
            className="shadow-md rounded-sm border  mb-6 border-purple-900 px-3 py-2"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData[signupMode].lastName}
            onChange={(e) => handleChange(e, signupMode)}
            placeholder="Last Name"
            required
            className="shadow-md rounded-sm border mb-6 border-purple-900 py-2 px-3 "
          />
        </div>

        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
          <input
            type="phone"
            name="phone"
            value={formData[signupMode].phone}
            onChange={(e) => handleChange(e, signupMode)}
            required
            className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder="Phone number"
          />
          <input
            type="email"
            name="email"
            value={formData[signupMode].email}
            onChange={(e) => handleChange(e, signupMode)}
            className=" w-full input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
            placeholder={
              signupMode === "seeker" ? `Email address` : `Work Email`
            }
            required
          />
        </div>

        {signupMode === "seeker" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="country"
                value={formData.seeker.country}
                onChange={(e) => handleChange(e, "seeker")}
                placeholder="Country"
                required
                className="shadow-md rounded-sm border border-purple-900 px-3 py-2"
              />
              <input
                type="text"
                name="state"
                value={formData.seeker.state}
                onChange={(e) => handleChange(e, "seeker")}
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
                  value={formData.seeker.dob}
                  required
                  onChange={(e) => handleChange(e, "seeker")}
                  className="w-full shadow-md rounded-sm border border-purple-900 py-2 mb-4 px-3"
                />
              </div>
              <select
                name="gender"
                value={formData.seeker.gender}
                onChange={(e) => handleChange(e, "seeker")}
                className="w-full shadow-md rounded-sm self-center border border-purple-900 py-2 mb-4 px-3"
              >
                <option>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 item-center justify-center">
          {signupMode === "employer" && (
            <div className="self-start">
              <label>Position in the Company</label>
              <select
                name="position"
                value={formData.employer.position}
                onChange={(e) => handleChange(e, "employer")}
                className="w-full shadow-md rounded-sm self-center border border-purple-900 py-2 mb-4 px-3"
              >
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
              name="password"
              value={formData[signupMode].password}
              onChange={(e) => handleChange(e, signupMode)}
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
