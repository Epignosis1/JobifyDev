import { useLogout } from "@/authentication/useLogout";
import Spinner from "@/components/GeneralComponents/Spinner";

function Dashboard() {
  const { logout, isPending } = useLogout();
  return (
    <div className="text-4xl">
      <p>DashBoard</p>
      <button
        disabled={isPending}
        onClick={logout}
        className="border border-gray-400 text-base bg-black text-white rounded-lg ml-[20px] p-3"
      >
        {isPending ? <Spinner /> : "logout"}
      </button>
    </div>
  );
}

export default Dashboard;
