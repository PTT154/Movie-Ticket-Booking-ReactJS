import React from "react";
import Navbar from "./_components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "./_components/Footer/Footer";

export default function User() {
  return (
    <div>
      <Navbar />
      <div className="mt-[92px]"></div>
      <Outlet />
      <Footer />
    </div>
  );
}