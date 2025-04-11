// src/components/Header.jsx
import styled from "styled-components";
import logo from "/icon.png"; // Make sure icon.png is in public or imported correctly
import namelogo from "/Name-Logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: #0e0e0e;
  color: white;
  font-family: 'Inter', sans-serif;
  margin: 0;
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
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    text-transform: lowercase;
    transition: 0.2s ease;

    &:hover {
      color: #f0b90b;
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
        <img src={logo} alt="LightPass Logo" width="55" height="95.25" />
        <img src={namelogo} alt="LightPass Logo" width="206" height="58" />
      </Logo>

      <Nav>
        <a id="cat" href="#">home</a>
        <a id="cat" href="#">categories</a>
        <a id="cat" href="#">contact</a>
        <a id="cat" href="#">courses</a>
      </Nav>

      <Buttons>
        <button className="login">log in</button>
        <button className="signup">sign up</button>
      </Buttons>
    </HeaderContainer>
  );
}
