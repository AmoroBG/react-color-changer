import React from "react";

const Button = ({ isDarkText, setIsDarkText }) => {
  return (
    <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
      Togge Text Color
    </button>
  );
};

export default Button;
