import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
  return (
    <div style={{ background: "#eff2f1" , display:"flex"}}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
