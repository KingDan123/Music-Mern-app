import React, { useState } from "react";
import { NavLink, NavbarContainer, Nav, StyledButton, Logo } from "../../../assets/style/NavbarStyle";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import CreateSongButton from "./CreateSongButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <img 
        src="../../assets/sound-icon11.png" 
        alt="Logo" 
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        /><Logo>MySongs</Logo>
      </NavLink>
      
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </StyledButton>
      <Nav>
        <CreateSongButton/>
        <NavLink to="/">
          Songs
        </NavLink>
        <NavLink to="/song-stats">
          Song Statistics
        </NavLink>
      </Nav>
      <MobileMenu isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
