import Appfooter from "@/components/ui/Appfooter";
import AppNav from "@/components/ui/AppNav";
import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Appfooter />
    </div>
  );
}

export default Applayout;
