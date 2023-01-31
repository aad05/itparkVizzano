import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Wrapper.ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ isInput }) => (isInput ? "3" : "2")},
    auto
  );
  grid-gap: 10px;
`;
export { Wrapper };
