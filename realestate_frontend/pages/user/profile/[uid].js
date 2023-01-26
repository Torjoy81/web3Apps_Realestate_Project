import React, { useState, useRef } from "react";
import { GrEdit } from "react-icons/gr";
import { PrismaClient } from "@prisma/client";
import moment from "moment/moment";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const prisma = new PrismaClient();
export default function User_info({ loadedUser }) {
  const [user_profile_info, setProfile] = useState({
    name1: {
      firstName: loadedUser ? loadedUser.first_name : "",
      isEditable: true,
    },
    name2: {
      lastName: loadedUser ? loadedUser.last_name : "",
      isEditable: true,
    },
    Email: { email: loadedUser ? loadedUser.email : "", isEditable: true },
    Phone: {
      phone_no: loadedUser ? loadedUser.phone_no : "",
      isEditable: true,
    },
    Job: {
      profession: loadedUser ? loadedUser.profession : "",
      isEditable: true,
    },
    About: { about: "", isEditable: true },
    Country: {
      nationality: loadedUser ? loadedUser.country : "",
      isEditable: true,
    },
    Age: {
      dateofbirth: loadedUser ? loadedUser.dateOfbirth : "",
      isEditable: true,
    },
  });
  const inputRef = useRef(null);

  const handleEdit = (e, value) => {
    if (e.target.id) {
      console.log(e.target.id);
      setProfile({ ...user_profile_info, [e.target.id]: value });

      setTimeout(() => {
        inputRef.current.focus();
        console.log(user_profile_info);
      }, 500);
    }
    //
    //
  };

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
              name="name2"
              value={user_profile_info["name2"].lastName}
              readOnly={false}
              onChange={({ target }) =>
                setProfile({
                  ...user_profile_info,
                  name2: { lastName: target.value, isEditable: false },
                })
              }
            />
            <GrEdit className=" w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="email"
              ref={inputRef}
              value={user_profile_info["Email"].email}
              readOnly={user_profile_info["Email"].isEditable}
              onChange={({ target }) =>
                setProfile({
                  ...user_profile_info,
                  Email: { email: target.value, isEditable: false },
                })
              }
              onBlur={() => console.log("Tarek")}
            />

            <PencilSquareIcon
              className="w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3"
              id="Email"
              onClick={(e) =>
                handleEdit(e, {
                  ...user_profile_info["Email"],
                  isEditable: !user_profile_info["Email"].isEditable,
                })
              }
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="tel"
              id="phone"
              value={user_profile_info["Phone"].phone_no}
              readOnly
            />
            <GrEdit className="pointer-events-auto w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="job-title">
              Job Title
            </label>
            <input
              className="bg-white border border-gray-400 p-2 rounded-lg w-full"
              type="text"
              value={user_profile_info["Job"].profession}
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
              value={user_profile_info["About"].about}
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
              value={user_profile_info["Country"].nationality}
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
              value={moment(user_profile_info["Age"].dateofbirth).format(
                "DD-MM-YYYY"
              )}
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
