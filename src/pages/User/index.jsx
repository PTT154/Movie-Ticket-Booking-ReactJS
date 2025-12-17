import React from "react";
import Navbar from "./_components/Navbar";

import { Outlet } from "react-router-dom";

export default function User() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
