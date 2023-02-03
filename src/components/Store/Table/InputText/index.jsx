import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreSelectedData } from "../../../../redux/countWorkSlice";
import { Wrapper } from "./style";

const InputText = ({ _id, updateHandler, clearType }) => {
  let { storeSelectedData } = useSelector((state) => state.countWork);
  let dispatch = useDispatch();

  let onChange = (e) => {
    dispatch(
      setStoreSelectedData({
        ...storeSelectedData,
        productName: e.target.value,
      })
    );
  };

  let onCancel = () => {
    dispatch(setStoreSelectedData({}));
    clearType();
  };

  let onSave = () => {
    updateHandler();
    onCancel();
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
    });
  };

  return (
    <Wrapper>
      <Input
        value={storeSelectedData.productName}
        onChange={onChange}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && onSave()}
      />
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

export default InputText;
