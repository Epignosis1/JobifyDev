import { Outlet, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Authlayout() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className="flex ">
        <button
          onClick={() => navigate("/")}
          className="bg-white shadow-md m-3 p-2 rounded-lg"
        >
          <ChevronLeft className="h-4 inline w-4 shrink-0 text-muted-foreground transition-transform duration-200" />{" "}
          Back
        </button>
      </div>

      <Outlet />
    </div>
  );
}
