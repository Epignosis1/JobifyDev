import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "./appAuth";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, firstName, lastName }) =>
      signupApi({ email, password, firstName, lastName }),
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Check your email to verify your account"
      );
    },
  });
  return { signup, isPending };
}
