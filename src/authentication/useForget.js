import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { forget as forgetApi } from "./appAuth";

export const useForget = () => {
  const { mutate: forget, isPending } = useMutation({
    mutationFn: ({ email }) => forgetApi({ email }),
    onSuccess: () => {
      toast.success("Password reset email sent succesfully");
    },
    onError: (error) => {
      toast.error("Error sending reset email:", error.message);
    },
  });
  return { forget, isPending };
};
