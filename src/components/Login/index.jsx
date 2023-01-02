import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import logo from "../../assets/images/logo.png";
import ShapeSvg from "../Generic/ShapeSVG";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ fullName: "", password: "" });
  const [isLoading, setLoading] = useState(false);

  const openNotification = (
    type,
    title,
    description,
    placement = "topRight"
  ) => {
    notification[type]({
      message: title || "No title",
      description: description,
      placement,
      duration: 5,
    });
  };

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const authUser = () => {
    if (!loginData.password || !loginData.fullName) {
      openNotification(
        "error",
        "Name or password is not filled.",
        "Password length must be at least 8 characters. Please make sure these rules."
      );
      return;
    }
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_MAIN_URL}/user/login`, {
        ...loginData,
      })
      .then((responseData) => {
        const { data } = responseData.data;
        localStorage.setItem("token", data.token);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        openNotification(
          "error",
          error.response.data.message.toUpperCase(),
          error.response.data.extraMessage
        );
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <Wrapper.LeftContainer>
        <ShapeSvg
          top={0}
          right={0}
          firstColor={"#376dd2"}
          secondColor={"#39acea"}
        />
        <Wrapper.LeftBackgroundImage />
        <ShapeSvg
          bottom={0}
          left={0}
          firstColor={"#376dd2"}
          secondColor={"#39acea"}
        />
      </Wrapper.LeftContainer>
      <Wrapper.RightContainer>
        <Wrapper.RightItemsContainer>
          <Wrapper.RightLogo src={logo} />
          <Wrapper.Title>Hello again!</Wrapper.Title>
          <Wrapper.Description>
            Каждый день мы стараемся шить с лучшими для вас 😊. Vizzano с вами
            более 10 лет. 😎 🙃
          </Wrapper.Description>
          <Wrapper.Input
            name="fullName"
            onChange={onChange}
            valaue={loginData.fullName}
            placeholder="Name"
          />
          <Wrapper.PasswordInput
            name="password"
            onChange={onChange}
            valaue={loginData.password}
            placeholder="Password"
          />
          <Wrapper.LoginButton onClick={authUser}>
            {isLoading ? <LoadingOutlined /> : "Login"}
          </Wrapper.LoginButton>
        </Wrapper.RightItemsContainer>
      </Wrapper.RightContainer>
    </Wrapper>
  );
};

export default Login;
