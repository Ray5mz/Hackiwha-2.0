// src/components/Header.jsx
import styled from "styled-components";
import logo from "/icon.png";
import namelogo from "/Name-Logo.png";

const HeaderContainer = styled.header`
  position: absolute; /* or fixed if you want it always visible on scroll */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #0e0e0e;
  color: white;
  font-family: 'Inter', sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.76);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    text-transform: lowercase;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      color:rgb(221, 195, 111);
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;

  button {
    padding: 0.4rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
  }

  .login {
    background: #fff;
    color: #000;
  }

  .signup {
    background: transparent;
    border: 1px solid white;
    color: white;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="LightPass Icon" width="55" height="95.25" />
        <img src={namelogo} alt="LightPass Name Logo" width="206" height="58" />
      </Logo>

      <Nav>
        <a className="nav-link" href="#">home</a>
        <a className="nav-link" href="#">categories</a>
        <a className="nav-link" href="#">contact</a>
        <a className="nav-link" href="#">courses</a>
      </Nav>

      <Buttons>
        <button className="login">log in</button>
        <button className="signup">sign up</button>
      </Buttons>
    </HeaderContainer>
  );
}
