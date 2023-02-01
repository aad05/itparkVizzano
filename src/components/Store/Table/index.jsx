import { Button } from "antd";
import React, { useState } from "react";
import { TableContainer } from "../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../redux/countWorkSlice";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import axios from "axios";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const Table = ({ data, disableFunction }) => {
  let [stateData, setStateData] = useState(data);
  let [selectType, setSelectType] = useState("");
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let dispatch = useDispatch();

  let onDoubleClick = (value, doubleType) => {
    if (selectType === doubleType) return;
    dispatch(setStoreSelectedData(value));
    setSelectType(doubleType);
  };

  let updateHandler = () => {
    setStateData({
      ...stateData,
      data: stateData.data.map((value) =>
        value._id === storeSelectedData._id ? storeSelectedData : value
      ),
    });
  };

  const { confirm } = Modal;
  const showConfirm = (_id) => {
    confirm({
      title: "Do you Want to delete this product?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        setStateData({
          ...stateData,
          data: stateData.data.filter((value) => value._id !== _id),
        });
        axios({
          url: `${process.env.REACT_APP_MAIN_URL}/store/delete`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: { _id },
        });
      },
      onCancel() {},
      okText: "Delete",
      okType: "danger",
    });
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
          {stateData?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() => onDoubleClick(value, "productName")}
                >
                  {storeSelectedData._id === value._id &&
                  selectType === "productName" ? (
                    <InputText updateHandler={updateHandler} />
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
                    <InputNumber updateHandler={updateHandler} type="things" />
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
