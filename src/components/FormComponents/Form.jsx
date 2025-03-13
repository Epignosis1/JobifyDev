import { useJobifyContext } from "@/components/context/JobifyProvider";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [passwordVisibilty, setPasswordVisibilty] = useState(false);
  const { formData, handleChange } = useJobifyContext();
  const { password, firstName } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/email");
  };

 

  return (
    <div className="mt-[70px]">
      <h2 className="text-2xl text-center font-semibold">
        Create a your Account
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-[90vw] md:w-[500px] m-auto bg-white text-sm rounded-xl p-5 border-[1px] my-[30px] "
      >
        <div className="grid gap-4 grid-cols-1   ">
          <div>
            <label className="block mb-2">FirstName</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full  rounded-sm border   border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border-gray-300  rounded-sm border   py-2 px-3 "
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisibilty ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-gray-300 grid input-field  rounded-sm border  px-3 py-2"
              />
              <button
                className="absolute top-3 right-2"
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibilty(!passwordVisibilty);
                }}
              >
                {passwordVisibilty ? <FaEye /> : <FaEyeSlash />}
              </button>

              <div className="text-red-600">
                {password.lenght < 4 ? "Password must br greater than 4":""}
                <div>
              
            </div>
          </div>

          <div>
            <label className="mb-2 block">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" w-full border-gray-300 input-field  rounded-sm border  px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-sm self-center border py-2  px-3"
            >
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Highest Qualification</label>
            <select
              name="qualification"
              onChange={handleChange}
              value={formData.qualification}
              className="w-full border-gray-300 rounded-sm border  py-2 px-3"
            >
              <option disabled selected>
                Select...
              </option>
              <option value="degree">Degree</option>
              <option value="diploma">Diploma</option>
              <option value="highSchool">Hig School (S.S.C.E)</option>
              <option value="mba">MBA/Ms</option>
              <option value="mbbs">MBBS</option>
              <option value="phd">PhD</option>
              <option value="nce">N.C.E</option>
              <option value="ond">OND</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Years of Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-sm border  py-2  px-3"
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
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
