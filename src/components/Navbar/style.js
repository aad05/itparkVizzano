import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
Wrapper.NavbarWrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
`;

Wrapper.Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Wrapper.MainLogo = styled.img`
  width: 150px;
  height: 50px;
  cursor: pointer;
`;

Wrapper.MenuItem = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  grid-gap: 20px;
`;
Wrapper.MenuItemText = styled.div`
  color: ${({ isLogout }) => (isLogout ? "red" : "#000")};
`;
