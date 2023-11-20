import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo from './../Images/logoC.jpg'
import './header.css'
const Header = () => {
  return (

    <div className="header">
    <MainHeader>
      <NavLink to="/">
        <h2 id="logo">AQUALINC</h2>
        {/* <img src={logo} height={80} width={250}/> */}
      </NavLink>
      <Nav />
    </MainHeader>

    </div>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
