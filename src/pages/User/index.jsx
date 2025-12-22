import React from "react";
import Navbar from "./_components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function User() {
  return (
    <div>
      <Navbar />
      <div className="mt-[112px]"></div>
      <Outlet />
    </div>
  );
}
