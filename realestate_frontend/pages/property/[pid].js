import React, { useContext } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useRouter } from "next/router";
import PropertiesContex from "@/components/context/PropertiyContext";
import Navbar from "@/components/header/Navbar";
import Link from "next/link";

const PropertiesDetail = () => {
  const { properties } = useContext(PropertiesContex);
  const router = useRouter();
  const property_info = properties.find(
    (house) => house.property_id === parseInt(router.query.pid)
  );
  console.log(property_info);

  return (
    <div className="max-w-[1440px] min-h-[1800px] mx-auto bg-white">
      <Navbar />
      <section>
        <div className="container mx-auto min-h-[800px] mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold ">
                {property_info.property_name}
              </h2>
              <h3 className="text-lg mb-4">{property_info.address}</h3>
            </div>
            <div>
              <div className="bg-green-500 text-white px-3 rounded-full">
                House for Sell
              </div>
              <div className="text-3xl font-semibold text-violet-600">
                {property_info.price} €
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row ">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <img src={property_info.ImageLg} alt="" />
              </div>
              <div className="flex gap-x-6 text-violet-700 mb-6 ">
                <div className="flex gap-x-2 items-center">
                  <BiBed className="text-2xl " />
                  <div>{property_info.bedrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiBath className="text-2xl " />
                  <div>{property_info.bathrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiArea className="text-2xl " />
                  <div>{property_info.sqft}sq ft</div>
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                dolore officiis perferendis incidunt unde id, culpa aspernatur
                odit itaque? Natus eos possimus maxime facilis optio iure
                reprehenderit consequatur similique nam. Illo vero voluptatem
                qui iure harum dolor cum, incidunt nisi ut nemo, id illum itaque
                sed ipsam? Sit est nobis, quia amet alias non eum veritatis
                incidunt placeat iste corporis ab! Animi delectus in ut ex
                optio, recusandae illo accusantium laborum alias minima, quis,
                molestiae corporis totam. Tempora voluptatibus id quo tenetur
                aliquid magnam suscipit autem alias voluptate ratione
                repellendus, dolorum facilis distinctio, cumque, commodi amet
                esse dignissimos aut enim.
              </div>
            </div>
            <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesDetail;
