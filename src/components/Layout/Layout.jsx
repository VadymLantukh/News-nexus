import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Please wait</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
