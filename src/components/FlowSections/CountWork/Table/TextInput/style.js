import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
Wrapper.ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
