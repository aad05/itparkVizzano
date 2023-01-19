import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;

TableContainer.Table = styled.table`
  background-color: rgba(255, 255, 255);
  border-radius: 12px;
`;
TableContainer.Thead = styled.thead``;
TableContainer.Tbody = styled.tbody``;
TableContainer.Tr = styled.tr`
  background-color: ${({ defect, count }) =>
    defect ? "#fff1e8" : count ? "#f5feeb" : "#fff"};
`;
TableContainer.Td = styled.td`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ defect, count }) =>
    defect ? "#fff1e8" : count ? "#f5feeb" : "#fff"};
  color: ${({ defect, count }) =>
    defect ? "#e57252" : count ? "#429723" : ""};
`;
TableContainer.Th = styled.th`
  margin: 5px 10px;
  padding: 7px 15px;
  font-weight: bold;
  border-right: ${({ isEnd }) => !isEnd && "1px solid rgb(240,240,240)"};
  background-color: ${({ defect, count }) =>
    defect ? "#fff1e8" : count ? "#f5feeb" : "#fff"};
  color: ${({ defect, count }) =>
    defect ? "#e57252" : count ? "#429723" : ""};
`;
