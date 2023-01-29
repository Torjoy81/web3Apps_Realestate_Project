import React, { useState, useEffect } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function UpdateFormInput({
  label,
  type,
  value,
  handleChange,
  id,
  handleEdit,
  name,
  tag,
  hnBlur,
}) {
  const [professionArray, setProfession] = useState([]);

  useEffect(() => {
    if (tag === "select") {
      import("@prisma/client").then(({ Profession }) => {
        console.log("Tareul");
        setProfession([...Object.values(Profession)]);
      });
    }
  }, []);

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      {tag === "input" && (
        <input
          className="bg-white border border-gray-400 p-2 rounded-lg w-full"
          type={type}
          value={value[name[0]]}
          id={id}
          disabled={value[name[1]]}
          onChange={(e) => handleChange(e, id, name)}
          onBlur={(e) =>
            hnBlur(
              e,
              {
                ...value,
                [name[1]]: !value[name[1]],
              },
              name
            )
          }
        />
      )}
      {tag === "select" && (
        <select
          className={
            value[name[1]] === true
              ? "bg-white border border-gray-400 p-2 rounded-lg w-full appearance-none"
              : "bg-white border border-gray-400 p-2 rounded-lg w-full"
          }
          aria-label=""
          onChange={(e) => handleChange(e, id, name)}
          disabled={value[name[1]]}
          value={value[name[0]]}
          id={id}
          onBlur={(e) =>
            hnBlur(
              e,
              {
                ...value,
                [name[1]]: !value[name[1]],
              },
              name
            )
          }
        >
          {professionArray &&
            professionArray.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
        </select>
      )}
      {value[name[1]] !== false ? (
        <PencilSquareIcon
          className="w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-4"
          id={id}
          onClick={(e) =>
            handleEdit(e, {
              ...value,
              [name[1]]: !value[name[1]],
            })
          }
        />
      ) : null}
    </div>
  );
}
