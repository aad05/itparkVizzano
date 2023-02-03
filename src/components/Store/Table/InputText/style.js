import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 15px;
`;
Wrapper.ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
Wrapper.InputWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;
