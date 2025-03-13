import React from "react";

const LanguageOptions = ({ onChange }) => {
  return (
    <select
      onChange={onChange}
      className="bg-pink-700 cursor-pointer text-white border border-white rounded-md p-1"
    >
      <option value="en">ENG</option>
      <option value="ma">मराठी</option>
      <option value="hi">हिन्दी</option>
    </select>
  );
};

export default LanguageOptions;
