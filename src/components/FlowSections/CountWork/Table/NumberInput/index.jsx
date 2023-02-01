import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountWorkSelectedData } from "../../../../../redux/countWorkSlice";
import { Wrapper } from "./style";

const NumberInput = ({
  type,
  _id,
  currentDate,
  updateHandler,
  cancelHandler,
}) => {
  const { flowID } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.countWork);

  const changeHandler = (data) => {
    dispatch(setCountWorkSelectedData(data));
  };

  const saveHandler = () => {
    updateHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        createDate: currentDate,
        flowType: flowID,
        shoudUpdateData: selectedData,
        _id,
      },
    });
  };

  const changeByBtn = (funcType) => {
    if (funcType === "inc")
      changeHandler({
        ...selectedData,
        [type]: +selectedData[type] + 1,
      });
    else if (selectedData[type] > 0)
      cancelHandler({
        ...selectedData,
        [type]: +selectedData[type] - 1,
      });
  };

  const onChange = (e) => {
    if (e.target.value < 0) changeHandler({ ...selectedData, [type]: 0 });
    else changeHandler({ ...selectedData, [type]: +e.target.value });
  };

  return (
    <Wrapper>
      <Wrapper.ButtonContainer isInput={true}>
        <Button
          type="default"
          danger
          style={{ width: "40px" }}
          onClick={() => changeByBtn("dec")}>
          -
        </Button>
        <Input
          value={selectedData[type]}
          onChange={onChange}
          type="number"
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === 13) && saveHandler()
          }
        />
        <Button
          type="default"
          style={{ width: "40px" }}
          onClick={() => changeByBtn("inc")}>
          +
        </Button>
      </Wrapper.ButtonContainer>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={saveHandler}>
          Save
        </Button>
        <Button type="primary" danger onClick={cancelHandler}>
          Cancel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export default NumberInput;
