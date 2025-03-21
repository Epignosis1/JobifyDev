import { useUser } from "@/authentication/useUser";
import Spinner from "../GeneralComponents/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load authenticated user

  const { isLoading, isAuthenticated } = useUser();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);
  // 2. While loading show a spinner

  if (isLoading)
    return (
      <div className="h-[100vh] bg-gray-50 text-lg flex items-center justify-center">
        <Spinner />
      </div>
    );
  //3.  if there is no authenticated user, redirect to login page

  // 4. if there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
