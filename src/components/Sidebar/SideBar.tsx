import React from "react";
import { SideBarProps } from "../../Types";

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="flex">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black-1 opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <aside
        className={`w-[30%] fixed inset-y-0 left-0 z-50 bg-gray-900 text-white lg:block transition-all duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-[1000px]"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl mb-4">Menu</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
