import React from "react";
import Link from "next/link";
import House from "./House";

const HouseList = ({ property_value }) => {
  return (
    <section className="mb-20 lg:ml-[150px]">
      <div className="container auto-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {property_value.map((house, index) => {
            return (
              <Link key={index} href={`/property/${house.id}`}>
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
