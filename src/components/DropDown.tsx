"use client";
import React from "react";

function DropDown({ handleDropDownChange }) {
  return (
    <select
      onChange={handleDropDownChange}
      className="border border-white bg-black text-white px-10 py-4 rounded-md flex justify-center items-center mb-4"
    >
      <option value={"createdAtAsc"}>sort by created at ascendent</option>
      <option value={"fileNameAsc"}>sort by filename ascendent</option>
      <option value={"fileNameDesc"}>sort by filename descendent</option>
    </select>
  );
}

export default DropDown;
