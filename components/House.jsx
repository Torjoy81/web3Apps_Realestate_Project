import React from "react";
import { BiArea, BiBed, BiBath } from "react-icons/bi";

const House = ({ houseData }) => {
  const {
    ImageSM: houseImage,
    bathroom,
    bedroom,
    price,
    property_title,
    sqft,
  } = houseData;

  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={houseImage} alt="There is no image" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-700 rounded-full text-white px-3">House</div>
        <div className="bg-violet-700 rounded-full text-white px-3">
          Germany
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">
        {property_title}
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed />
          </div>
          <div>{bedroom}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBath />
          </div>
          <div>{bathroom}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiArea />
          </div>
          <div>{sqft}sq ft</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600">{price} €</div>
    </div>
  );
};

export default House;
