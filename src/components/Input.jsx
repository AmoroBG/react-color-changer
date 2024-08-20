import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <input
      type="text"
      placeholder="Enter color value..."
      value={colorValue}
      onChange={(e) => setColorValue(e.target.value)}
    />
  );
};

export default Input;
