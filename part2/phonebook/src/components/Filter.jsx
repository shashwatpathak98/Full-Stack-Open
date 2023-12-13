import React from "react";

const Filter = ({ onChange, value }) => {
  return (
    <span>
      filter shown with <input onChange={onChange} value={value} type="text" />
    </span>
  );
};

export default Filter;
