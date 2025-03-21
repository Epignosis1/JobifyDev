// import Spinner from "../GeneralComponents/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/supabaseClient";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export default function Reset() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  const resetPassword = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) {
      throw new Error(
        "Session expired or invalid. Please request a new reset link."
      );
    }
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) throw new Error(error.message);
  };

  const { mutate: reset, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      setNewPassword("");
      toast.success("Password reset successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleReset = (e) => {
    console.log(newPassword);
    e.preventDefault();
    reset();
  };

  return (
    <div className="mt-[20px]">
      <h2 className="text-2xl text-center font-semibold">
        Create a your Account
      </h2>
      <form
        onSubmit={handleReset}
        className="w-[90vw] md:w-[500px] m-auto bg-white text-sm rounded-xl p-5 border-[1px] my-[30px] "
      >
        <div className="grid gap-4 grid-cols-1   ">
          <div>
            <label className="block mb-2">New Password</label>
            <div className="relative">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full border-gray-300 grid input-field  rounded-sm border  px-3 py-2"
              />
            </div>
          </div>

          <button
            className="bg-black item-center flex justify-center mt-[20px] text-sm text-white rounded-sm py-[8px] "
            type="submit"
          >
            {isPending ? "Reseting..." : "Reset password"}
          </button>
          <div className="flex items-center gap-4 ">
            <div className="border-t border-gray-400 flex-grow"></div>
            <p className="text-gray-500">Already have an account?</p>
            <div className="border-t border-gray-400 flex-grow"></div>
          </div>

          <div className="flex cursor-pointer text-blue-900 font-medium justify-center">
            <a className="block" onClick={() => navigate("/login")}>
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
