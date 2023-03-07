import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayoute = () => {
  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto bg-slate-50 py-10 px-2">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayoute;
