import React, { useState, useEffect } from "react";
import { GrEdit } from "react-icons/gr";
import { PrismaClient } from "@prisma/client";
import moment from "moment/moment";

const prisma = new PrismaClient();
export default function User_info({ loadedUser }) {
  const [user_profile_info, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_no: "",
    profession: "",
    about: "",
    nationality: "",
    dateofbirth: "",
  });
  useEffect(() => {
    setProfile({
      ...user_profile_info,
      firstName: loadedUser.first_name,
      lastName: loadedUser.last_name,
      phone_no: loadedUser.phone_no,
      dateofbirth: loadedUser.dateOfbirth,
      email: loadedUser.email,
      profession: loadedUser.profession,
    });
  }, [loadedUser]);

  return (
    <div className="flex lg:justify-center">
      <div className=" bg-white lg:w-[700px] lg:mt-7 rounded-lg p-6 shadow-md">
        <img
          className="h-32 w-32 rounded-full mx-auto mb-6"
          src="profile-image.jpg"
          alt="Profile Image"
        />
        <div className="ml-10 mr-10">
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              name="name"
              value={user_profile_info.lastName}
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="email"
              id="email"
              value={user_profile_info.email}
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="tel"
              id="phone"
              value={user_profile_info.phone_no}
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="job-title">
              Job Title
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              value={user_profile_info.profession}
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              About
            </label>
            <textarea
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              rows="3"
              readOnly
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. */}
            </textarea>
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="nationality">
              Nationality
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              id="nationality"
              value="Country"
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="dateofbirth">
              Birth Date
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              value={moment(user_profile_info.dateofbirth).format("DD-MM-YYYY")}
              readOnly
            />
            <GrEdit className="pointer-events-none w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const userID = params.uid;
  const userByID = await prisma.user.findUnique({
    where: {
      id: userID,
    },
  });
  return {
    props: {
      loadedUser: JSON.parse(JSON.stringify(userByID)),
    },
  };
}
export async function getStaticPaths() {
  const usersID = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
  const obtoarr = Object.values(usersID);
  return {
    paths: obtoarr.map((item) => {
      return { params: { uid: item.id } };
    }),
    fallback: false,
  };
}
