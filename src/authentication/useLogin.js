import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "./appAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return { login, isPending };
};
