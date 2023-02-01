import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../../redux/countWorkSlice";
import { Wrapper } from "./style";

const InputNumber = ({ type, updateHandler }) => {
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let dispatch = useDispatch();

  let onChange = (e) => {
    dispatch(
      setStoreSelectedData({
        ...storeSelectedData,
        [type]: +e.target.value,
      })
    );
  };

  let onCancel = () => {
    dispatch(setStoreSelectedData({}));
  };

  let onSave = () => {
    onCancel();
    updateHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: storeSelectedData.productName,
        things: storeSelectedData.things,
        sendedThings: storeSelectedData.sendedThings,
        _id: storeSelectedData._id,
      },
    }).then((res) => console.log(res));
  };

  let changeNumberInput = (funcType) => {
    if (funcType === "inc") {
      dispatch(
        setStoreSelectedData({
          ...storeSelectedData,
          [type]: +storeSelectedData[type] + 1,
        })
      );
    } else if (storeSelectedData[type] > 0) {
      dispatch(
        setStoreSelectedData({
          ...storeSelectedData,
          [type]: +storeSelectedData[type] - 1,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Wrapper.InputWrapper>
        <Button onClick={() => changeNumberInput("dec")} danger>
          -
        </Button>
        <Input
          type="number"
          min="0"
          value={storeSelectedData[type]}
          onChange={onChange}
          onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && onSave()}
        />
        <Button onClick={() => changeNumberInput("inc")}>+</Button>
      </Wrapper.InputWrapper>
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Button type="primary" danger onClick={onCancel}>
          Cancel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export default InputNumber;
