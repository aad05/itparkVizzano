import { useState } from "react";
import { OrderedListOutlined } from "@ant-design/icons";
import { TableContainer } from "../../../Generic/Styles/tableStyle";
import { useSelector, useDispatch } from "react-redux";
import { setCountWorkSelectedData } from "../../../../redux/countWorkSlice";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";

const Table = ({ data, currentDate }) => {
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.countWork);
  const [selectType, setSelectType] = useState("");
  const [stateData, setStateData] = useState(data);

  const doubleClickHandler = (value, doubleType) => {
    if (selectType === doubleType || !value.isCome) return;
    dispatch(setCountWorkSelectedData(value));
    setSelectType(doubleType);
  };

  const updateHandler = () => {
    setStateData({
      ...stateData,
      data: stateData.data.map((value) =>
        value._id === selectedData._id ? selectedData : value
      ),
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

            <TableContainer.Th>Full Name</TableContainer.Th>
            <TableContainer.Th defect={true}>Fake</TableContainer.Th>
            <TableContainer.Th isEnd>Total</TableContainer.Th>
          </TableContainer.Tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {stateData?.data?.map((value, index) => {
            return (
              <TableContainer.Tr key={value._id}>
                <TableContainer.Td defect={!value.isCome}>
                  {index + 1}
                </TableContainer.Td>
                <TableContainer.Td
                  defect={!value.isCome}
                  onDoubleClick={() => doubleClickHandler(value, "fullName")}
                >
                  {selectedData._id === value._id &&
                  selectType === "fullName" ? (
                    <TextInput
                      updateHandler={updateHandler}
                      _id={data._id}
                      currentDate={currentDate}
                    />
                  ) : (
                    value.fullName
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  isAvailable
                  defect={true}
                  onDoubleClick={() => doubleClickHandler(value, "fake")}
                >
                  {selectedData._id === value._id && selectType === "fake" ? (
                    <NumberInput
                      type="fake"
                      _id={data._id}
                      currentDate={currentDate}
                      updateHandler={updateHandler}
                    />
                  ) : (
                    value.fake
                  )}
                </TableContainer.Td>
                <TableContainer.Td
                  defect={!value.isCome}
                  onDoubleClick={() => doubleClickHandler(value, "price")}
                >
                  {" "}
                  {selectedData._id === value._id && selectType === "price" ? (
                    <NumberInput
                      type="price"
                      _id={data._id}
                      currentDate={currentDate}
                      updateHandler={updateHandler}
                    />
                  ) : (
                    value.price
                  )}{" "}
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
