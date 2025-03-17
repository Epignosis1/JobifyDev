import { useUser } from "@/authentication/useUser";
import Spinner from "../GeneralComponents/Spinner";

function ProtectedRoute({ children }) {
  // 1. load authenticated user

  const { user, isLoading } = useUser();
  // 2. While loading show a spinner

  if (isLoading)
    return (
      <div className="h-[100vh] bg-black text-lg flex items-center justify-center">
        <Spinner />
      </div>
    );
  //3.  if there is no authenticated user, redirect to login page

  // 4. if there is a user, render the app

  return children;
}

export default ProtectedRoute;
