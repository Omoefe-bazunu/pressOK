import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export const RootLayout = () => {
  return (
    <div className="Wrapper w-screen h-screen flex flex-col justify-between items-center ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
