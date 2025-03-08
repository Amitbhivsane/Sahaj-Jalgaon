import React from "react";

const LanguageOptions = (props) => {
  return (
    <select onChange={props.onChange} className="bg-pink-700">
      {/* <option value="" className="font-serif font-bold">
        Select Language
      </option> */}
      <option value={"en"}>English</option>
      <option value={"ma"}>Marathi</option>
      <option value={"hi"}>Hindi</option>
    </select>
  );
};

export default LanguageOptions;
