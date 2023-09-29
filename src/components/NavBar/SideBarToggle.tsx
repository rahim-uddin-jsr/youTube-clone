import React from "react";
import { SideBarProps } from "../../Types";

const SideBarToggle: React.FC<SideBarProps> = ({ toggleMenu }) => {
  return (
    <div>
      <span onClick={toggleMenu}>
        <svg
          className="text-2xl w-7 h-7 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="1"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </span>
    </div>
  );
};

export default SideBarToggle;
