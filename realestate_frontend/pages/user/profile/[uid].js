import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import moment from "moment/moment";
import UpdateFormInput from "@/components/updateFormInput";
import { prisma } from "@/pages/api/lib/db";
import { updateUser } from "@/pages/api/lib/api_function";

export default function User_info({ loadedUser, user_update }) {
  const [user_profile_info, setProfile] = useState({
    name1: {
      first_name: loadedUser ? loadedUser.first_name : "",
      isEditablename1: true,
    },
    name2: {
      last_name: loadedUser ? loadedUser.last_name : "",
      isEditablename2: true,
    },
    Email: { email: loadedUser ? loadedUser.email : "", isEditableEmail: true },
    Phone: {
      phone_no: loadedUser ? loadedUser.phone_no : "",
      isEditablePhone: true,
    },
    Job: {
      profession: loadedUser ? loadedUser.profession : "",
      isEditableJob: true,
    },
    About: { about: "", isEditableAbout: true },
    Country: {
      country: loadedUser ? loadedUser.country : "",
      isEditableCountry: true,
    },
    Age: {
      dateOfbirth: loadedUser
        ? moment(loadedUser.dateOfbirth).format("YYYY-MM-DD")
        : "",
      isEditableAge: true,
    },
  });
  const [isSubmit, setSubmit] = useState(false);
  const hanndleBlur = (e, value, key) => {
    if (e.target.id) {
      console.log(e.target.id);
      setProfile({ ...user_profile_info, [e.target.id]: value });
    }

    if (user_profile_info[e.target.id][key[0]] !== loadedUser[key[0]]) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };

  const handleEditable = (e, value) => {
    if (e.target.id) {
      setProfile({ ...user_profile_info, [e.target.id]: value });
    }
  };

  const handleChangeIn = (e, objKey, valueofkey) => {
    setProfile({
      ...user_profile_info,
      [objKey]: { [valueofkey[0]]: e.target.value, [valueofkey[1]]: false },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user_info = { user_id: loadedUser.id };
    Object.values(user_profile_info).forEach((value) => {
      const keysArray = Object.keys(value);
      user_info = { ...user_info, [keysArray[0]]: value[keysArray[0]] };
    });

    const result = await updateUser(user_info);
    if (result.ok) {
      setSubmit(false);
    }
  };

  return (
    <div className="flex lg:justify-center">
      <div className=" bg-white lg:w-[700px] lg:mt-7 rounded-lg p-6 shadow-md">
        <img
          className="h-32 w-32 rounded-full mx-auto mb-6"
          src="profile-image.jpg"
          alt="Profile Image"
        />
        <form onSubmit={handleSubmit}>
          <div className="ml-10 mr-10">
            <div className="grid grid-cols-2 gap-5">
              <UpdateFormInput
                label="First Name"
                value={{ ...user_profile_info["name1"] }}
                type="text"
                id="name1"
                handleChange={handleChangeIn}
                handleEdit={handleEditable}
                name={["first_name", "isEditablename1"]}
                tag="input"
                hnBlur={hanndleBlur}
              />
              <UpdateFormInput
                label="SurName"
                value={{ ...user_profile_info["name2"] }}
                type="text"
                id="name2"
                handleChange={handleChangeIn}
                handleEdit={handleEditable}
                name={["last_name", "isEditablename2"]}
                tag="input"
                hnBlur={hanndleBlur}
              />
            </div>
            <UpdateFormInput
              label="Email"
              value={{ ...user_profile_info["Email"] }}
              type="email"
              id="Email"
              handleChange={handleChangeIn}
              handleEdit={handleEditable}
              name={["email", "isEditableEmail"]}
              tag="input"
              hnBlur={hanndleBlur}
            />
            <UpdateFormInput
              label="Contact"
              value={{ ...user_profile_info["Phone"] }}
              type="text"
              id="Phone"
              handleChange={handleChangeIn}
              handleEdit={handleEditable}
              name={["phone_no", "isEditablePhone"]}
              tag="input"
              hnBlur={hanndleBlur}
            />
            <UpdateFormInput
              label="Job Title"
              value={{ ...user_profile_info["Job"] }}
              type="text"
              id="Job"
              handleChange={handleChangeIn}
              handleEdit={handleEditable}
              name={["profession", "isEditableJob"]}
              tag="select"
              hnBlur={hanndleBlur}
            />
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
            <UpdateFormInput
              label="Nationality"
              value={{ ...user_profile_info["Country"] }}
              type="text"
              id="Country"
              name={["country", "isEditableCountry"]}
              handleChange={handleChangeIn}
              handleEdit={handleEditable}
              tag="input"
              hnBlur={hanndleBlur}
            />
            <UpdateFormInput
              label="Date of Birth"
              value={{ ...user_profile_info["Age"] }}
              type="date"
              id="Age"
              handleChange={handleChangeIn}
              handleEdit={handleEditable}
              name={["dateOfbirth", "isEditableAge"]}
              tag="input"
              hnBlur={hanndleBlur}
            />
            <div className="mb-4 float-right">
              <button
                type="submit"
                className={
                  isSubmit
                    ? "px-8 py-3 text-white bg-lime-600 rounded focus:outline-none"
                    : "px-8 py-3 text-white bg-green-300 rounded focus:outline-none"
                }
                disabled={!isSubmit}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
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
