import Form from "@/components/FormComponents/Form";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen bg-gray-100">
      <div className="flex ">
        <button
          onClick={() => navigate("/")}
          className="bg-white  shadow-md fixed m-3 p-2 rounded-lg"
        >
          <ChevronLeft className="h-4 inline w-4 shrink-0 text-muted-foreground transition-transform duration-200" />{" "}
          Back
        </button>
      </div>
      <Form />
    </div>
  );
};

export default Signup;
