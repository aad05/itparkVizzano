import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;
Wrapper.Table = styled.table`
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`;
Wrapper.Thead = styled.thead``;
Wrapper.TBody = styled.tbody``;
Wrapper.Tr = styled.tr``;
Wrapper.Td = styled.td`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240, 240, 240)"};
`;
Wrapper.Th = styled.th`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240, 240, 240)"};
`;
