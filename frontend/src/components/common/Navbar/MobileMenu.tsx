import React from "react";
import { NavLink, MobileMenuContainer } from "../../../assets/style/NavbarStyle";
import CreateSongButton from "./CreateSongButton";

interface SidebarProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      
        <CreateSongButton />
     
      <NavLink to="/">Songs</NavLink>
      <NavLink to="/song-stats">Song Statistics</NavLink>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
