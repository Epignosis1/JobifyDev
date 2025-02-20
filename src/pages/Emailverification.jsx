import Footer from "@/components/GeneralComponents/Footer";
import Logo from "@/components/GeneralComponents/Logo";
import Nav from "@/components/GeneralComponents/Nav";
import { useState, useRef } from "react";

const OTPInput = ({ length = 6, onVerify }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers & move to the next box automatically
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // Clear current box and move to the previous box
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        newOtp[index - 1] = "";
        inputRefs.current[index - 1].focus();
      }

      setOtp(newOtp);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (/^\d+$/.test(pasteData)) {
      setOtp(pasteData.split(""));
      inputRefs.current[length - 1].focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length === length) {
      onVerify(otpCode);
    } else {
      alert("Enter complete OTP");
    }
  };

  return (
    <>
      <div className="flex text-center items-center mt-20 justify-center">
        <Logo className="bg-gray-500 " />
      </div>
      <div className="flex  flex-col mt-[2rem] gap-8 justify-center items-center">
        <h2 className="bg-[var(--dark-purple)] rounded text-white p-2 text-lg ">
          Enter Verification Code
        </h2>
        <div onPaste={handlePaste} style={{ display: "flex", gap: "14px" }}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              className="w-[50px] border-purple-500 h-[50px] font-[20px] text-center border-[2px] rounded"
            />
          ))}
        </div>
        <p className="text-sm ml-10 text-purple-900  ">
          Please be informed a code has been sent to the registerd email to
          enable complete registration
        </p>
        <div className="flex gap-60 items-center justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[var(--dark-purple)] text-white p-2 rounded-lg "
          >
            Verify
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[var(--dark-purple)] text-white p-2 rounded-lg "
          >
            Reset Code
          </button>
        </div>
      </div>
    </>
  );
};

export default OTPInput;
