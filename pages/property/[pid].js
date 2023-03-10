import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Navbar from "@/components/header/Navbar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PropertiesDetail = ({ loadedProperty }) => {
  console.log(loadedProperty);

  return (
    <div className="max-w-[1440px] min-h-[1800px] mx-auto bg-white">
      <Navbar />
      <section>
        <div className="container mx-auto min-h-[800px] mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold ">
                {loadedProperty.property_title}
              </h2>
              <h3 className="text-lg mb-4">
                {loadedProperty.property_address}
              </h3>
            </div>
            <div>
              <div className="bg-green-500 text-white px-3 rounded-full">
                House for Sell
              </div>
              <div className="text-3xl font-semibold text-violet-600">
                {loadedProperty.price} €
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row ">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <img src={loadedProperty.ImageLG} alt="" />
              </div>
              <div className="flex gap-x-6 text-violet-700 mb-6 ">
                <div className="flex gap-x-2 items-center">
                  <BiBed className="text-2xl " />
                  <div>{loadedProperty.bedroom}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiBath className="text-2xl " />
                  <div>{loadedProperty.bathroom}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiArea className="text-2xl " />
                  <div>{loadedProperty.sqft}sq ft</div>
                </div>
              </div>
              <div>{loadedProperty.description}</div>
            </div>
            {/* <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
              <div className="flex items-center gap-x-4 mb-8">
                <div className="border border-gray-300 p-1 rounded-full w-25 h-25">
                  <img src={property_info.agent_image} alt="No agent Image" />
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {property_info.agent_name}
                  </div>
                  <div className="text-violet-700 text-sm font-semibold">
                    {property_info.agent_email}
                  </div>
                  <div className="text-violet-700 text-sm font-semibold">
                    {property_info.agent_phone}
                  </div>
                </div>
              </div>
              <div>
                <form action="" className="flex flex-col gap-y-4">
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                    type="text"
                    placeholder="Your Email"
                  />
                  <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm "
                    type="text"
                    placeholder="Your Phone"
                  />
                  <div className="flex gap-x-2">
                    <button className="bg-blue-600 hover:bg-red-600 transition p-2 text-white w-full text-sm rounded">
                      Send Mail
                    </button>
                    <button className="border border-violet-800 text-violet-800 hover:text-violet-500 hover:border-violet-500 rounded p-4 w-full text-sm transition">
                      Call
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesDetail;

export async function getStaticProps(context) {
  const { params } = context;
  const propertyID = params.pid;
  const propertyByID = await prisma.properties.findUnique({
    where: {
      id: parseInt(propertyID),
    },
    include: {
      agent: true,
    },
  });
  return {
    props: {
      loadedProperty: JSON.parse(JSON.stringify(propertyByID)),
    },
  };
}
export async function getStaticPaths() {
  const propertiesID = await prisma.properties.findMany({
    select: {
      id: true,
    },
  });
  const obtoarr = Object.values(propertiesID);
  return {
    paths: obtoarr.map((item) => {
      return { params: { pid: item.id.toString() } };
    }),
    fallback: false,
  };
}
