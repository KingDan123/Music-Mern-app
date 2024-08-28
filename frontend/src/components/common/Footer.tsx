import React from "react";
import styled from "@emotion/styled";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #9290c3;
  color: #070f2b;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.875rem; /* Adjust font size */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
`;

const NavLink = styled.a`
  color: #070f2b;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #535c91;
  }
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  a {
    color: #070f2b;
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #535c91;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} MySong app. Built by{" "}
      <NavLink href="https://nigusdan.netlify.app/" target="_blank" rel="noopener noreferrer">
        Nigusu Daniel
      </NavLink>
      <SocialLinks>
        <NavLink href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </NavLink>
        <NavLink href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </NavLink>
        <NavLink href="https://github.com/kingdan123" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </NavLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
