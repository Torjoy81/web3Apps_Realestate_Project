import React from "react";

export default function Drop_Down({ profession, setProfession }) {
  return (
    <select
      className="border border-gray-400 py-1 px-2"
      aria-label=""
      onChange={(e) => setProfession(e)}
      name="profession"
      defaultValue={profession[0]}
    >
      {profession.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
}
