import { useState } from "react";
import { HiCloudUpload } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { dataUpload, fileUpload } from "@/services/dataUpload";
import { useMutation } from "@tanstack/react-query";
import Spinner from "../components/GeneralComponents/Spinner";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setJobLocation] = useState("");

  const fileMutation = useMutation({ mutationFn: fileUpload });
  const dataMutation = useMutation({ mutationFn: dataUpload });

  const isPending = fileMutation.isPending || dataMutation.isPending;
  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile || !jobTitle || !location) {
      alert("Please fill all fields and select a file");
      return;
    }
    console.log(selectedFile);
    await fileMutation.mutateAsync(selectedFile);

    await dataMutation.mutateAsync({ jobTitle, location });

    setJobTitle("");
    setJobLocation("");
    setSelectedFile(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white gap-4 fixed pb-4 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[94%] max-h-[95vh] overflow-y-auto lg:w-[800px] rounded-3xl shadow-md p-6">
        {/* Close Button */}
        <div
          onClick={() => setIsOpenModal(false)}
          className="absolute top-3 right-3 cursor-pointer text-2xl"
        >
          <FiX />
        </div>

        {/* Upload Icon */}
        <img src="upload.png" className="w-[80px] mt-8" alt="Upload" />

        {/* Title & Description */}
        <div className="text-center">
          <h2 className="text-lg font-medium">Upload your CV</h2>
          <p className="text-[13px] text-gray-800">
            Adding your CV allows you to apply very quickly to many jobs from
            any device.
          </p>
        </div>

        {/* Upload Section */}
        <label
          htmlFor="fileInput"
          className="border w-[95%] py-8 border-dashed border-blue-800 flex flex-col justify-center items-center gap-4 text-blue-800 cursor-pointer"
        >
          <HiCloudUpload size={44} />
          <p>Upload file</p>
          {selectedFile ? (
            <p className="text-gray-600 text-[13px]">{selectedFile.name}</p>
          ) : (
            <p className="text-gray-500 text-[13px]">
              (.doc, .docx, .pdf, .rtf, .txt, Max size 2MB)
            </p>
          )}
          <input
            id="fileInput"
            type="file"
            accept=".doc,.docx,.pdf,.rtf,.txt"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Form Section */}
        <form className="flex flex-col w-full items-start">
          <label className="mb-2 text-sm">
            Your job title or qualification
          </label>
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="border placeholder:text-[13px] p-3 rounded-sm mb-6 w-full border-gray-600"
            type="text"
            placeholder="Type here..."
          />

          <label className="mb-2 text-sm">Your location</label>
          <input
            value={location}
            onChange={(e) => setJobLocation(e.target.value)}
            className="border p-3 placeholder:text-[13px] w-full rounded-sm border-gray-500"
            type="text"
            placeholder="Town, region or country"
          />

          {/* Buttons */}

          <button
            onClick={handleUpload}
            className="bg-blue-800 w-full rounded-xl text-white mt-6 p-2"
          >
            {isPending ? <Spinner /> : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postcv;
