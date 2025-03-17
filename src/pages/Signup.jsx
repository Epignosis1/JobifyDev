import SignForm from "@/components/FormComponents/SignupForm";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className=" h-screen bg-gray-100">
      <div className="flex ">
        <button
          onClick={() => navigate("/")}
          className="bg-white  z-50 shadow-md  m-3 p-2 rounded-lg"
        >
          <ChevronLeft className="h-4 inline w-4 shrink-0 text-muted-foreground transition-transform duration-200" />{" "}
          Back
        </button>
      </div>
      <SignForm />
    </div>
  );
};

export default Signup;
