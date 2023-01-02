import React, { useState } from "react";
import { Wrapper } from "./style";
// import logo from "../../assets/images/logo.png";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";

const Login = () => {
  //   const [api, contextHolder] = notification.useNotification();
  const [loginData, setLoginData] = useState({ name: "", password: "" });
  const [isLoading, setLoading] = useState(false);

  const openNotification = (type, placement, title, description) => {
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
    if (!loginData.password || !loginData.name) {
      openNotification(
        "error",
        "topRight",
        "Name or password is not filled.",
        "Password length must be at least 8 characters. Please make sure these rules."
      );
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      openNotification(
        "success",
        "topRight",
        "You've authorized successfully."
      );
    }, 3000);
  };

  //   must show warning if there is some empty inputs

  return (
    <Wrapper>
      <Wrapper.LeftContainer>
        <Wrapper.LeftBackgroundImage />
      </Wrapper.LeftContainer>
      <Wrapper.RightContainer>
        <Wrapper.RightItemsContainer>
          {/* <Wrapper.RightLogo src={logo} /> */}
          <Wrapper.Title>Hello again!</Wrapper.Title>
          <Wrapper.Description>
            Каждый день мы стараемся шить с лучшими для вас 😊. Vizzano с вами
            более 10 лет. 😎 🙃
          </Wrapper.Description>
          <Wrapper.Input
            name="name"
            onChange={onChange}
            valaue={loginData.name}
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
