import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[250px_1fr] gap-4 flex-1">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
