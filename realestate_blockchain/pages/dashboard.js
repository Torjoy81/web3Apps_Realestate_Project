import Banner from "@/components/Banner";
import Navbar from "@/components/header/Navbar";
import HouseList from "@/components/HouseList";
import React from "react";

export default function DashBoard() {
  return (
    <div className="max-w-[1440px] min-h-[1800px] mx-auto bg-white">
      <Navbar />
      <Banner />
      <HouseList />
    </div>
  );
}
