import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useSignIn } from "react-auth-kit";
import logo from "../../assets/images/logo.png";
import ShapeSvg from "../Generic/ShapeSVG";
import axios from "axios";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ fullName: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const [playWarningAnim, setPlayWarningAnim] = useState(false);

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

  const warningAnimHandler = () => {
    setPlayWarningAnim(true);
    setTimeout(() => {
      setPlayWarningAnim(false);
    }, 1000);
  };

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const keyHandler = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      authUser();
    }
  };

  const authUser = () => {
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_MAIN_URL}/user/login`, {
        ...loginData,
      })
      .then((responseData) => {
        const { data } = responseData.data;
        localStorage.setItem("token", data.token);
        signIn({
          token: data.token,
          tokenType: "Bearer",
          authState: { fullName: data.user.fullName, _id: data.user._id },
          expiresIn: 3600,
        });

        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        warningAnimHandler();
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
            более 15 лет. 😎 🙃. Those all of them are false. Trust me!
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
            onKeyDown={keyHandler}
          />
          <Wrapper.LoginButton
            warningAnimation={playWarningAnim}
            onClick={keyHandler}
          >
            {isLoading ? <LoadingOutlined /> : "Login"}
          </Wrapper.LoginButton>
        </Wrapper.RightItemsContainer>
      </Wrapper.RightContainer>
    </Wrapper>
  );
};

export default Login;
