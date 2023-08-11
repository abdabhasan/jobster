import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Outlet />
    </>
  );
};

export default HomeLayout;
