import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import ToasterMes from "../ToasterMes/ToasterMes";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Please wait</p>}>
        <Outlet />
      </Suspense>
      <ToasterMes />
    </div>
  );
};

export default Layout;
