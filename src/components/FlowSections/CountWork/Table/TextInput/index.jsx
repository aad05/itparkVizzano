import { Button, Input } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountWorkSelectedData } from "../../../../../redux/countWorkSlice";
import { Wrapper } from "./style";

const TextInput = ({ currentDate, _id, updateHandler }) => {
  const { flowID } = useParams();
  const dispatch = useDispatch();
  const { selectedData } = useSelector((state) => state.countWork);

  const cancelHandler = () => {
    dispatch(setCountWorkSelectedData({}));
  };
  const onChange = (e) => {
    dispatch(
      setCountWorkSelectedData({ ...selectedData, fullName: e.target.value })
    );
  };
  const onSave = () => {
    updateHandler();
    cancelHandler();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/merchants/update`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: flowID,
        createDate: currentDate,
        shoudUpdateData: selectedData,
        _id,
      },
    });
  };

  return (
    <Wrapper>
      <Input
        value={selectedData.fullName}
        onChange={onChange}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && onSave()}
      />
      <Wrapper.ButtonContainer>
        <Button type="primary" onClick={onSave}>
          {" "}
          Save
        </Button>
        <Button danger type="primary" onClick={cancelHandler}>
          Cancel
        </Button>
      </Wrapper.ButtonContainer>
    </Wrapper>
  );
};

export default TextInput;
