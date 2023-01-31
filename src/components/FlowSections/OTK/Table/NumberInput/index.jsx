import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setOTKSelectedData } from "../../../../../redux/otkSlice";
import { Wrapper } from "./style";

const NumberInput = ({ type, _id, currentDate, updateHandler }) => {
  const { flowID } = useParams();

  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.otk);

  const changeHandler = (data) => {
    dispatch(setOTKSelectedData(data));
  };
  const cancelHandler = () => {
    dispatch(setOTKSelectedData({}));
  };
  const onChange = (e) => {
    if (type === "things")
      changeHandler({ ...selectedData, things: +e.target.value });
    else changeHandler({ ...selectedData, fake: +e.target.value });
  };
  const changeByBtn = (funcType) => {
    if (funcType === "inc")
      dispatch(
        setOTKSelectedData({
          ...selectedData,
          [type]: +selectedData[type] + 1,
        })
      );
    else
      dispatch(
        setOTKSelectedData({
          ...selectedData,
          [type]: +selectedData[type] - 1,
        })
      );
  };

  const onSave = () => {
    updateHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/otk/update`,
      method: "POST",
      data: {
        createDate: currentDate,
        flowType: flowID,
        shoudUpdateData: selectedData,
        _id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  return (
    <Wrapper>
      <Wrapper.ButtonContainer isInput={true}>
        <Button
          type="default"
          danger
          style={{ width: "40px" }}
          onClick={() => changeByBtn("dic")}>
          -
        </Button>
        <Input value={selectedData[type]} type="number" onChange={onChange} />
        <Button
          type="default"
          style={{ width: "40px" }}
          onClick={() => changeByBtn("inc")}>
          +
        </Button>
      </Wrapper.ButtonContainer>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={onSave}>
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
