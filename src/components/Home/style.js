import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  margin: 30px auto;
  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 60%;
    gap: 60px;
  }
  @media (max-width: 700px) {
    width: 70%;
    gap: 30px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
