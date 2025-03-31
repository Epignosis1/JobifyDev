import { useState } from "react";
import { CloudUpload } from "lucide-react";
import { FiX } from "react-icons/fi";
import Modal from "react-modal";

const Postcv = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex   flex-col text-center max-w-[450px] mx-auto items-center mt-[50px] gap-4">
      <div className="mb-10">
        <h2 className="text-3xl mb-3 font-medium">Post your CV</h2>
        <p className="text-gray-400 text-sm">
          Adding your CV allows you to apply very quickly to many jobs from any
          device
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <div className="text-center flex items-center justify-center">
          <img src="upload.png" alt="upload" className="w-[100px]" />
        </div>
        <h3 className="font-semibold text-lg">Upload your CV</h3>
        <p className="text-gray-500 text-sm">
          Upload your CV and you`ll be able to apply to jobs in just one click
        </p>
        <div className="flex  mb-[100px]  justify-center">
          <button
            onClick={() => setIsOpenModal(true)}
            className="bg-blue-800 p-3 rounded-3xl text-white text-center w-[400px]"
          >
            Upload
          </button>
        </div>

        {isOpenModal && <UploadModal setIsOpenModal={setIsOpenModal} />}
      </div>
    </div>
  );
};

const UploadModal = ({ setIsOpenModal }) => {
  Modal.setAppElement("#root");

  return (
    <div className="absolute overflow-y-auto  inset-0 bg-black/30  backdrop-blur-sm">
      <div className="bg-white gap-8 fixed   flex flex-col  items-center justify-center transform -translate-x-1/2  top-4 p-4  left-1/2  w-[94%]  mb-[100px] lg:w-[800px]  rounded-3xl shadow-md">
        <div
          onClick={() => setIsOpenModal(false)}
          className="absolute top-2 cursor-pointer text-2xl right-2"
        >
          <FiX />
        </div>
        <img src="upload.png" className="w-[80px] mt-8" />
        <div>
          <h2 className="text-lg font-medium">Upload your CV</h2>
          <p className="text-[13px] text-gray-800">
            Adding your CV allows you to apply very quickly to many jobs from
            any device
          </p>
        </div>
        <div className="border w-[95%] py-8 border-dashed border-blue-800 flex flex-col justify-center items-center gap-4 text-blue-800">
          <CloudUpload size={44} />
          <p>Upload file</p>
          <p className="text-gray-500 text-[13px]">
            (.doc, .docx, .pdf, .rtf, .text, Max sizsse 2MB)
          </p>
        </div>

        <form className="flex   flex-col w-full self-start items-start">
          <label className="mb-2 text-sm">
            Your job title or qualification
          </label>
          <input
            className="border placeholder:text-[13px] p-3 rounded-sm mb-6 w-full border-gray-600"
            type="text"
            placeholder="Type here..."
          />
          <label className="mb-2 text-sm">Your location</label>
          <input
            className="border p-3 placeholder:text-[13px] w-full rounded-sm border-gray-500"
            type="text"
            placeholder="Town, region or country"
          />
          <button className="bg-blue-800 w-full rounded-xl text-white mt-6 p-2">
            Upload
          </button>
          <button className="bg-blue-800 w-full mb-4 text-white rounded-xl mt-6 p-2">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
export default Postcv;
