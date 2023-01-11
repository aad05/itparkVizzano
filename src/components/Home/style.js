import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

Wrapper.CardContainer = styled.div`
  width: 33%;
  margin: 30px auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1100px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
