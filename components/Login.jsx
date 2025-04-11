import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="login wrap">
        <div className="h1">Login</div>
        <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" id="email" name="email" type="text" />
        <input placeholder="Password" id="password" name="password" type="password" />
        <input defaultValue="Login" className="btn" type="submit" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
@font-face {
  font-family: 'Syne', 'Tajawal';
  src: url('/assets/Syne.ttf') format('truetype');
  src: url('/assets/Tajawal.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
  .login {
    width: 340px;
    height: 400px;
    background: linear-gradient(230deg, #A98136, #FFFFFF 240%);
    padding: 47px;
    padding-bottom: 57px;
    color: #fff;
    border-radius: 17px;
    padding-bottom: 50px;
    font-size: 1.3em;
    font-family: 'Syne',  ;
  }

  .login input[type="text"],
  .login input[type="password"] {
    opacity: 1;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    padding: 13px 18px;
    margin: 20px 0 0 0;
    font-size: 0.8em;
    border-radius: 100px;
    background: #3c3c3c;
    color: #fff;
  }

  .login input:focus {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=submit],
  .login input[type=button],
  .h1 {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 13px;
    margin: 40px 0 0 0;
    border-radius: 500px;
    font-weight: 600;
    animation: bounce2 1.6s;
  }

  .h1 {
    padding: 0;
    position: relative;
    top: -35px;
    display: block;
    margin-bottom: -0px;
    font-size: 1.3em;
    margin-left=50%;
    margin-right=50%;
  }

  .btn {
    background: linear-gradient(144deg,rgb(46, 45, 47),rgb(125, 123, 136) 50%,rgb(193, 206, 207));
    color: #fff;
    padding: 16px !important;
  }

  .btn:hover {
    background: linear-gradient(144deg,rgb(200, 162, 82) , 20%,#1e1e1e 50%,#1e1e1e );
    color: rgb(255, 255, 255);
    padding: 16px !important;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .login input[type=text] {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=password] {
    animation: bounce1 1.3s;
  }

  .ui {
    font-weight: bolder;
    background: -webkit-linear-gradient(#B563FF,rgb(116, 118, 137), #0EC8EE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
    border-image-slice: 1;
    display: inline;
  }

  @media only screen and (max-width: 600px) {
    .login {
      width: 70%;
      padding: 3em;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-250px);
      opacity: 0;
    }
  }

  @keyframes bounce1 {
    0% {
      opacity: 0;
    }

    40% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  @keyframes bounce2 {
    0% {
      opacity: 0;
    }

    70% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }`;

export default Form;
