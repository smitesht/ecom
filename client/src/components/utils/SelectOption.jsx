import React, { useState } from "react";
import "./SelectOption.css";

const SelectOption = ({ defaultval, onSelect, className }) => {
  const [current, setCurrent] = useState(defaultval);

  const OnChangeOption = (e) => {
    setCurrent(parseInt(e.target.value));
    onSelect(parseInt(e.target.value));
  };

  return (
    <select
      className={`select-option-wrapper ${className}`}
      value={current}
      onChange={(e) => OnChangeOption(e)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};

export default SelectOption;
