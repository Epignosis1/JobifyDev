import Footer from "@/components/GeneralComponents/Footer";
import Nav from "@/components/GeneralComponents/Nav";

import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Rootlayout;
