import styled from "styled-components";
import { Input } from "antd";
import tailorman from "../../assets/images/tailorman.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

Wrapper.LeftContainer = styled.div`
  flex: 1;
  background-color: #2f67cc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1300px) {
    display: none;
  }
`;
Wrapper.LeftBackgroundImage = styled.div`
  z-index: 2;
  background-image: url(${tailorman});
  height: 70%;
  width: 70%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
`;

// Leftside styling is over

Wrapper.RightContainer = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Wrapper.RightItemsContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
Wrapper.RightLogo = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px solid #f5f5f5;
  border-radius: 50%;
`;
Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: rgb(57, 56, 77);
`;
Wrapper.Description = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
`;
Wrapper.Input = styled(Input)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.PasswordInput = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.LoginButton = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: rgb(48, 104, 204);
  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
