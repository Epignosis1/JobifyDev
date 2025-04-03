import { useUser } from "@/authentication/useUser";
import { Info } from "@/components/ui/Info";
import { useLogout } from "@/authentication/useLogout";

export function Account() {
  const { user } = useUser();
  const { logout } = useLogout();

  console.log(user);
  return (
    <div className=" min-w-[350px] md:w-[800px] px-4 mx-auto flex flex-col gap-12 mt-[80px]">
      <h2 className="text-lg font-semibold">My account</h2>
      <Info
        keys="Personal information"
        values={`${user.user_metadata.firstName} ${user.user_metadata.lastName}`}
      />
      <Info keys="Email" values={`${user.email}`} />
      <Info keys="Password" values="******" />
      <button
        onClick={() => logout()}
        className="w-full text-center bg-gray-200 rounded-3xl p-3"
      >
        Sign Out
      </button>
    </div>
  );
}
