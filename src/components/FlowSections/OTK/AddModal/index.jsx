import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../Generic/Styles";

const AddModal = ({ open, onCancel, onAdd, onOpen, createDate, isLoading }) => {
  const { flowID } = useParams();
  const [productName, setProductName] = useState("");

  const addUser = async () => {
    const { data } = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_MAIN_URL}/otk/add_otk_product`,
      data: {
        productName,
        flowType: flowID,
        createDate,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const addData = data.data[0].data;
    onAdd(addData[addData.length - 1]);
    onCancel();
  };

  const changeHandler = (e) => {
    setProductName(e.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={onCancel}
        title="Add Product"
        okText="Add"
        onOk={addUser}>
        <Wrapper.InputWrapper>
          <Wrapper.Label>Product Name:</Wrapper.Label>
          <Wrapper.Input
            name="productName"
            onChange={changeHandler}
            value={productName}
          />
        </Wrapper.InputWrapper>
      </Modal>
      <Wrapper>
        {isLoading ? (
          <Button disabled>+ Add Product</Button>
        ) : (
          <Button type="primary" style={{ margin: "80px 0" }} onClick={onOpen}>
            + Add Product
          </Button>
        )}
      </Wrapper>
    </>
  );
};

export default AddModal;
