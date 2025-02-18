import { useState } from "react";
import { useJobifyContext } from "@/components/context/JobifyProvider";
function SecondForm({ signType }) {
  const [fileName, setFileName] = useState("Choose file");
  const [fileUrl, setFileUrl] = useState(null);
  const { workRef, isInactive } = useJobifyContext();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const fileBlobUrl = URL.createObjectURL(file);
      setFileUrl(fileBlobUrl);
    }
  };
  return (
    <>
      {signType === "seeker" ? (
        <form
          ref={workRef}
          className={`w-full border-[1px] border-purple-200  ${
            isInactive ? "opacity-50 pointer-events-none" : ""
          } bg-white text-sm rounded-xl p-5 `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div>
              <label>Highest Qualification</label>
              <select className="w-full shadow-md rounded-sm border border-purple-900 py-2 mb-4 px-3">
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
              <label>Years of Experience</label>
              <select className="w-full shadow-md rounded-sm border border-purple-900 py-2 mb-4 px-3">
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>
          <label
            htmlFor="cvUpload"
            className="block bg-gray-100 mt-2 cursor-pointer border border-[2px] w-[120px] p-2 rounded-lg text-center "
          >
            Choose File
          </label>
          <input
            className="hidden"
            type="file"
            id="cvUpload"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          {fileUrl && (
            <div>
              <a
                href={fileUrl}
                download={fileName}
                className="text-blue-500 underline"
              >
                Download {fileName}
              </a>
            </div>
          )}
          <p className="mb-4 mt-4">
            Optionally upload a CV no larger than 10MB for file types .pdf .doc
            .docx .rtf
            <br />
            Please note: You will need to upload a CV to apply for jobs, however
            you can skip the CV upload on sign up.
          </p>

          <button className="p-4 w-full md:w-fit bg-purple-950 text-white py-2 rounded-sm hover:bg-purple-800 transition duration-300">
            Create your Account
          </button>
        </form>
      ) : (
        <form
          ref={workRef}
          className={`w-full border-[1px] border-purple-200  ${
            isInactive ? "opacity-50 pointer-events-none" : ""
          } bg-white text-sm rounded-xl  p-5 `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div>
              <label>Company Name</label>
              <input
                className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
                type="text"
                required
              />
            </div>

            <div>
              <label>Industry</label>
              <select className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2">
                <option disabled selected>
                  Select
                </option>
                <option>Banking, Finance, insurance</option>
                <option>Education</option>
                <option>Government</option>
                <option>Healthcare</option>
                <option>IT</option>
                <option>Law and Compliance</option>
                <option>Advertising, Media and Communications</option>
              </select>
            </div>

            <div>
              <label>Number of Employees</label>
              <select className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2">
                <option disabled selected>
                  Select
                </option>
                <option>1-4</option>
                <option>5-11</option>
                <option>11-25</option>
                <option>26-50</option>
                <option>51-100</option>
                <option>101-200</option>
                <option>201-500</option>
              </select>
            </div>
            <div>
              <label>Type of Employer</label>
              <select className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2">
                <option disabled selected>
                  Select
                </option>
                <option>Direct Employer</option>
                <option>Recruitmeant Agency</option>
              </select>
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                required
                className="w-full grid input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="phone"
                className=" w-full input-field mb-6 shadow-md rounded-sm border border-purple-900 px-3 py-2"
              />
            </div>
          </div>

          <label>Address</label>
          <textarea
            rows={5}
            cols={30}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          />

          <button className="p-4 w-full mt-4 md:w-fit bg-purple-950 text-white py-2 rounded-sm hover:bg-purple-800 transition duration-300">
            Create your Account
          </button>
        </form>
      )}
    </>
  );
}
export default SecondForm;
