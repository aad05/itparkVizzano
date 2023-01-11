import styled from "styled-components";

export const Wrapper = styled.div``;

Wrapper.CardContainer = styled.div`
  margin: 30px auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
