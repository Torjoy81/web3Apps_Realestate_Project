import React, { useState } from "react";

export default function Drop_Down({ countries, setCountry }) {
  return (
    <select
      className="border border-gray-400 py-1 px-2"
      aria-label=""
      onChange={(e) => setCountry(e)}
      name="country"
      defaultValue={countries[0]}
    >
      {countries.map((country, index) => (
        <option value={country} key={index}>
          {country}
        </option>
      ))}
    </select>
  );
}
