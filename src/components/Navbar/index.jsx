import React, { useState } from "react";
import { Wrapper } from "./style";
import mianlogo from "../../assets/images/mainlogo.jpg";
import { Avatar, Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSignOut } from "react-auth-kit";
import UserModal from "./UserModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const signOut = useSignOut();
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Wrapper.MenuItem onClick={() => setOpen(true)}>
          <IoMdSettings />
          <Wrapper.MenuItemText>Settings</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem
          onClick={() => {
            signOut();
            navigate("/login");
          }}
        >
          <RiLogoutBoxFill style={{ color: "red" }} />
          <Wrapper.MenuItemText isLogout={true}>Log out</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];

  return (
    <Wrapper>
      <UserModal open={open} onCancel={() => setOpen(false)} />
      <Wrapper.NavbarWrap>
        <Wrapper.Container>
          <Wrapper.MainLogo onClick={() => navigate("/")} src={mianlogo} />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Avatar
              style={{
                backgroundColor: "#f56a00",
                verticalAlign: "middle",
                cursor: "pointer",
              }}
              size="large"
            >
              A
            </Avatar>
          </Dropdown>
        </Wrapper.Container>
      </Wrapper.NavbarWrap>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
