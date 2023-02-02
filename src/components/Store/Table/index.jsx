import { Button } from "antd";
import React, { useState } from "react";
import { TableContainer } from "../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../redux/countWorkSlice";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const Table = ({ data, disableFunction, updateHandler, deleteStorePr }) => {
  let [selectType, setSelectType] = useState("");
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let dispatch = useDispatch();

  let onDoubleClick = (value, doubleType) => {
    if (selectType === doubleType) return;
    dispatch(setStoreSelectedData(value));
    setSelectType(doubleType);
  };

  const { confirm } = Modal;
  const showConfirm = (_id) => {
    confirm({
      title: "Do you Want to delete this product?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        deleteStorePr(_id);
      },
      onCancel() {},
      okText: "Delete",
      okType: "danger",
    });
  };

  let clearType = () => {
    setSelectType("");
  };

  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>
            <TableContainer.Th>Products</TableContainer.Th>
            <TableContainer.Th count>Count</TableContainer.Th>
            <TableContainer.Th defect>Sent products</TableContainer.Th>
            {!disableFunction && (
              <TableContainer.Th isEnd>Action</TableContainer.Th>
            )}
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() => onDoubleClick(value, "productName")}
                >
                  {storeSelectedData._id === value._id &&
                  selectType === "productName" ? (
                    <InputText
                      updateHandler={updateHandler}
                      clearType={clearType}
                    />
                  ) : (
                    value.productName
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  count
                  onDoubleClick={() => onDoubleClick(value, "things")}
                >
                  {storeSelectedData._id === value._id &&
                  selectType === "things" ? (
                    <InputNumber
                      clearType={clearType}
                      updateHandler={updateHandler}
                      type="things"
                    />
                  ) : (
                    value.things
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  defect
                  onDoubleClick={() => onDoubleClick(value, "sendedThings")}
                >
                  {storeSelectedData._id === value._id &&
                  selectType === "sendedThings" ? (
                    <InputNumber
                      clearType={clearType}
                      updateHandler={updateHandler}
                      type="sendedThings"
                    />
                  ) : (
                    value.sendedThings
                  )}
                </TableContainer.Td>
                {!disableFunction && (
                  <TableContainer.Td isEnd>
                    <Button onClick={() => showConfirm(value._id)} danger>
                      Delete
                    </Button>
                  </TableContainer.Td>
                )}
              </TableContainer.Tr>
            );
          })}
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
};

export default Table;
