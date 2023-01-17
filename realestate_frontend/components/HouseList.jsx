import Link from "next/link";
import React, { useContext } from "react";
import PropertiesContex from "./context/PropertiyContext";
import House from "./House";

const HouseList = () => {
  const { properties } = useContext(PropertiesContex);
  console.log(properties);
  return (
    <section className="mb-20 lg:ml-[150px]">
      <div className="container auto-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {properties.map((house, index) => {
            return (
              <Link key={index} href={`/property/${house.property_id}`}>
                <House houseData={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
