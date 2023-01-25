import Banner from "@/components/Banner";
import Navbar from "@/components/header/Navbar";
import HouseList from "@/components/HouseList";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function DashBoard({ property_data }) {
  console.log(property_data);
  return (
    <div className="max-w-[1440px] min-h-[1800px] mx-auto bg-white">
      <Navbar />
      <Banner />
      <HouseList property_value={property_data} />
    </div>
  );
}

export async function getStaticProps() {
  const properties = await prisma.properties.findMany();
  const propertyJSON = JSON.parse(JSON.stringify(properties));
  return {
    props: {
      property_data: propertyJSON,
    },
    revalidate: 3600,
  };
}
