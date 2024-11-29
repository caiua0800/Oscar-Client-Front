
import styled from "styled-components";

export const LoginContent = styled.div`
  // background-color: #202020;
  background-image: url("fundo-escuro.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackBlack = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "block" : "none")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
`;

export const LoginBox = styled.div`
  position: relative;
  background: linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0.4));
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
  box-shadow: 8px 8px 20px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  min-width: 350px;
  transition: .3s;
  box-sizing: border-box;
  &:hover{
    background: linear-gradient(45deg, rgba(0,0,0,1), rgba(0,0,0,0.5))
  }

  @media (max-width: 1000px){
    min-width: 90%;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
  transition: .5s;
  opacity: 0.8;
  &:hover{
    transform: translate(-10px, -10px);
    filter: drop-shadow(10px 10px 1px black);
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #444444;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const InputPass = styled.div`
  background-color: #444444;
  display: flex;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  position:relative;

  button{
    height: 20px;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: pointer;
    position: absolute;
    right: 10px;

    img{
      width: 20px;
    }
  }

  input{
    background-color: #444444;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: #ffffff;
    font-size: 16px;
    width: 100%;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: rgba(0, 220, 0, 1);
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b4bff;
  }
`;


export const SignUpText = styled.span`
  text-decoration: none;
`;

export const ErrorPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #202020;
  padding: 20px;
  display: flex;
  width: 500px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;

  @media (max-width: 800px){
    width: 300px;
  }
`;

export const ErrorMessage = styled.p`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ErrorBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #2382EF;
  animation: errorBarAnimation 2s linear forwards;
  border-radius: 5px;
  margin-top: 10px;

  @keyframes errorBarAnimation {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;

export const singUpLink = styled.span`
  margin-top: 3px;
  color: rgba(255, 255, 25, 0.6);
  font-size: 12px;
  width: 100%;
  text-align: center;

  a{
    color: rgba(100,100,255, 1);
    transition: .3s;
    cursor: pointer;
    &:hover{
      color: aliceblue;
    }
  }
`;

export const forgotPassLinky = styled.a`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  text-align: end;
  transition: .3s;
  cursor: pointer;
  &:hover{
    color: white;
  }
`;

