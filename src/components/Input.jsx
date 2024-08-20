import React from "react";
import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <input
      autoFocus
      type="text"
      placeholder="Enter color value..."
      value={colorValue}
      onChange={(e) => {
        setColorValue(e.target.value);
        setHexValue(colorNames(e.target.value));
      }}
    />
  );
};

export default Input;
