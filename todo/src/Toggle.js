import React from "react";
import "./Toggle.css";

const Toggle = ({ toggleMode, isDarkMode }) => {
  const handleToggle = () => {
    toggleMode();
  };

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
