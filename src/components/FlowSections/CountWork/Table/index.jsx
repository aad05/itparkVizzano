import React from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
const Table = ({ data }) => {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>

            <TableContainer.Th>Full Name</TableContainer.Th>
            <TableContainer.Th defect={true}>Defect</TableContainer.Th>
            <TableContainer.Th isEnd>Total</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value.id}>
                <TableContainer.Td defect={true}>{index + 1}</TableContainer.Td>
                <TableContainer.Td defect={true}>
                  {value.fullName}
                </TableContainer.Td>
                <TableContainer.Td isAvailable defect={true}>
                  {value.defect}
                </TableContainer.Td>
                <TableContainer.Td defect={true}>
                  {" "}
                  {value.total}{" "}
                </TableContainer.Td>
              </TableContainer.Tr>
            );
          })}
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
};

export default Table;
