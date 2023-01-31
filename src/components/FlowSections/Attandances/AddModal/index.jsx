import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../Generic/Styles";

const AddModal = ({ open, onCancel, onAdd }) => {
  const { flowID } = useParams();
  const [userInfo, setUserInfo] = useState({ name: "", surname: "" });

  const addUser = async () => {
    const { data } = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/user/create`,
      data: {
        fullName: `${userInfo.name} ${userInfo.surname}`,
        flowType: flowID,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // data.data

    // console.log(data);
    onAdd(data.data);
  };

  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title="Add Worker"
      okText="Add"
      onOk={addUser}
    >
      <Wrapper.InputWrapper>
        <Wrapper.Label>Name:</Wrapper.Label>
        <Wrapper.Input
          name="name"
          onChange={changeHandler}
          value={userInfo.name}
        />
      </Wrapper.InputWrapper>
      <Wrapper.InputWrapper>
        <Wrapper.Label>Surname:</Wrapper.Label>
        <Wrapper.Input
          name="surname"
          onChange={changeHandler}
          value={userInfo.surname}
        />
      </Wrapper.InputWrapper>
    </Modal>
  );
};

export default AddModal;
