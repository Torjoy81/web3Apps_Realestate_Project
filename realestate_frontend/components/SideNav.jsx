import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaFileUpload } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="p-6 w-1/2 h-screen bg-gray-300 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <div className="flex flex-col justify-start item-center">
        <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
          User Account
        </h1>
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Profile
            </h3>
          </div>

          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Change Email and Password
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FaFileUpload className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Upload Document
            </h3>
          </div>
        </div>
        {/* setting  */}
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Settings
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              More
            </h3>
          </div>
        </div>
        {/* logout */}
        <div className=" my-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Logout
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
