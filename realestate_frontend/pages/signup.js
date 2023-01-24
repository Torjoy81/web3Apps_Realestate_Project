import Drop_Down from "@/components/dropDown";
import { sendUser } from "@/lib/api_function";
import React, { useState } from "react";

export default function SingUp() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    profession: "",
    dateOfbirth: "",
    password: "",
    cm_password: "",
  });
  const [professionArray, setProfession] = useState([
    "DOCTOR",
    "ENGENIEER",
    "BUSINESS",
    "PUBLIC SERVICE",
    "POLICE",
    "JOURNALIST",
    "MEDIA PERSON",
    "INVESTOR",
    "UNEMPLOYED",
    "DEFENSE_OFICIER",
    "OWN_SHOP",
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendUser({ ...form });
  };

  return (
    <div className="container mx-auto my-[250px]">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="w-full lg:w-1/3 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          <h1 className="text-black text-3xl mb-3">Welcome</h1>
          <div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              suspendisse aliquam varius rutrum purus maecenas ac{" "}
              <a href="#" className="text-purple-500 font-semibold">
                Learn more
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 py-16 px-12">
          <h2 className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It is free and only take a minute
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Firstname"
                className="border border-gray-400 py-1 px-2"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Surname"
                className="border border-gray-400 py-1 px-2"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-400 py-1 px-2 w-full"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <input
                type="date"
                placeholder="Date of Birth"
                className="border border-gray-400 py-1 px-2 w-full"
                name="dateOfbirth"
                value={form.dateOfbirth}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5">
              <Drop_Down
                profession={professionArray}
                setProfession={handleChange}
              />
              <input
                type="text"
                placeholder="PhoneNumber"
                className="border border-gray-400 py-1 px-2 col-span-2"
                name="phone_no"
                value={form.phone_no}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 py-1 px-2 w-full"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-400 py-1 px-2 w-full"
                name="cm_password"
                value={form.cm_password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                I accept the{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
