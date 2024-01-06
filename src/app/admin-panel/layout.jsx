import SideNav from "@/components/admin-panel/SideNav";
import Navbar from "@/components/admin-panel/Navbar";
import "./globals.css";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-4 ">
      <SideNav />
      <div className="container flex flex-col gap-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
