import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";
const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Wrapper.BG />
      <Wrapper.TextSection>
        <Wrapper.Title>404</Wrapper.Title>
        <Wrapper.Text bold={true}>Oops, you’ve lost in space</Wrapper.Text>
        <Wrapper.Text>
          We can’t find the page that you’re looking for
        </Wrapper.Text>
        <Wrapper.Btn onClick={backHome}>Go Home</Wrapper.Btn>
      </Wrapper.TextSection>
      <Wrapper.Blob />
    </Wrapper>
  );
};

export default NotFound;
