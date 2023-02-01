import { Button } from "antd";
import React, { useState } from "react";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import { OrderedListOutlined } from "@ant-design/icons";
import { setOTKSelectedData } from "../../../../redux/otkSlice";
import { useDispatch, useSelector } from "react-redux";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import axios from "axios";
import { useParams } from "react-router-dom";
import WarningModal from "../WarnningModal";
const Table = ({ data, currentDate }) => {
  const [stateData, setStateData] = useState(data);
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteProductValue, setDeleteProductValue] = useState();
  const [selectType, setSelectType] = useState("");
  const { flowID } = useParams();
  const doubleClickHandler = (value, doubleType) => {
    if (selectType === doubleType) return;
    dispatch(setOTKSelectedData(value));
    setSelectType(doubleType);
  };
  const updateData = () => {
    setStateData({
      ...stateData,
      data: stateData.data.map((value) =>
        value._id === selectedData._id ? selectedData : value
      ),
    });
  };

  const deleteConfirm = (value) => {
    setDeleteProductValue(value);
    setDeleteModalOpen(true);
  };
  const deleteProduct = ({ _id }) => {
    setStateData({
      ...stateData,
      data: stateData.data.filter((value) => value._id !== _id),
    });
    setDeleteModalOpen(false);
    setDeleteProductValue({});
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/remove`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        idProducts: [_id],
        flowType: flowID,
      },
    });
  };
  const cancelHandler = () => {
    dispatch(setOTKSelectedData({}));
    setSelectType("");
  };
  return (
    <TableContainer>
      <WarningModal
        product={deleteProductValue?.productName}
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={() => deleteProduct(deleteProductValue)}
      />
      <TableContainer.Table>
        <TableContainer.Thead>
          <TableContainer.Tr>
            <TableContainer.Th>
              <OrderedListOutlined />
            </TableContainer.Th>
            <TableContainer.Th>Products</TableContainer.Th>
            <TableContainer.Th count>Count</TableContainer.Th>
            <TableContainer.Th defect>Fake</TableContainer.Th>
            <TableContainer.Th isEnd>Action</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {stateData?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td>{index + 1}</TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() =>
                    doubleClickHandler(value, "productName")
                  }>
                  {value._id === selectedData._id &&
                  selectType === "productName" ? (
                    <TextInput
                      cancelHandler={cancelHandler}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.productName
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  onDoubleClick={() => doubleClickHandler(value, "things")}
                  count>
                  {selectedData._id === value._id && selectType === "things" ? (
                    <NumberInput
                      cancelHandler={cancelHandler}
                      type={"things"}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.things
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  defect
                  onDoubleClick={() => doubleClickHandler(value, "fake")}>
                  {selectedData._id === value._id && selectType === "fake" ? (
                    <NumberInput
                      cancelHandler={cancelHandler}
                      type={"fake"}
                      updateHandler={updateData}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.fake
                  )}
                </TableContainer.Td>
                <TableContainer.Td isEnd>
                  <Button danger onClick={() => deleteConfirm(value)}>
                    Delete
                  </Button>
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
