import React, { useRef } from "react";

export default function UpdateFormInput({
  label,
  type,
  value,
  readOnly,
  handleChange,
  id,
  name,
  handleEdit,
}) {
  const inputRef = useRef(null);
  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 mb-2" htmlFor="email">
        {label}
      </label>
      <input
        className="bg-white border border-gray-400 p-2 rounded-lg w-full"
        type={type}
        ref={inputRef}
        value={value[name]}
        readOnly={readOnly}
        onChange={(e) => handleChange(e)}
        onBlur={() => console.log("Tarek")}
      />

      <PencilSquareIcon
        className="w-6 h-6 absolute top-[50px] transform -translate-y-1/2 right-3"
        id={id}
        onClick={(e) =>
          handleEdit(e, {
            ...value,
            isEditable: !readOnly,
          })
        }
      />
    </div>
  );
}
//   setProfile({
//     ...user_profile_info,
//     Email: { email: target.value, isEditable: false },
//   })
