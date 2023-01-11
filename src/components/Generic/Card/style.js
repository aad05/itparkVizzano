import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  background: rgb(255, 255, 255);
  width: fit-content;
  height: fit-content;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 25%) 6px 6px 7px;
  padding: ${({ isFlowCard }) => (isFlowCard ? "10px 90px" : "10px 50px")};
  margin: ${({ isFlowCard }) => (isFlowCard ? "10px auto" : " 0 0 20px 0")};
  gap: 20px;
  @media (max-width: 900px) {
    padding: 10px 30px;
  }
`;

Wrapper.Title = styled.div`
  text-align: center;
  font-size: 26px;
  white-space: nowrap;
  @media (max-width: 1100px) {
    font-size: 23px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
Wrapper.Img = styled.img`
  width: 133px;
  height: 192px;
  @media (max-width: 1100px) {
    width: 113px;
    height: 152px;
  }
  @media (max-width: 900px) {
    width: 83px;
    height: 122px;
  }
`;
