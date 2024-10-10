import { Suspense, useEffect } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import ToasterMes from "../ToasterMes/ToasterMes";
import { useDispatch } from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsThunk());
  }, [dispatch]);

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
