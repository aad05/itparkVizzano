import React from "react";
import { TableContainer } from "../Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { Button, Checkbox, Skeleton } from "antd";

const TableLoading = ({ count }) => {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>

            <TableContainer.Th>Full Name</TableContainer.Th>
            <TableContainer.Th isEnd>Action</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {Array.from({ length: count }).map((_, index) => (
            <TableContainer.Tr key={index}>
              <TableContainer.Td>
                <Checkbox disabled={true} />
              </TableContainer.Td>
              <TableContainer.Td>
                <Skeleton.Input active={true} />
              </TableContainer.Td>
              <TableContainer.Td>
                <Button disabled={true}>Delete</Button>
              </TableContainer.Td>
            </TableContainer.Tr>
          ))}
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
};

export default TableLoading;
/* 
   

*/
