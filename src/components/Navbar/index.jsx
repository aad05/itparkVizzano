import React from "react";
import { Wrapper } from "./style";
import mianlogo from "../../assets/images/mainlogo.jpg";
import { Avatar } from "antd";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.NavbarWrap>
        <Wrapper.Container>
          <Wrapper.MainLogo src={mianlogo} />
          <Avatar
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
            }}
            size="large"
          >
            M
          </Avatar>
        </Wrapper.Container>
      </Wrapper.NavbarWrap>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
