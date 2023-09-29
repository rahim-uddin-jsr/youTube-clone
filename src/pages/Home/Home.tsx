import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/Sidebar/SideBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <>
        <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
        <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
      </>
    </div>
  );
}
