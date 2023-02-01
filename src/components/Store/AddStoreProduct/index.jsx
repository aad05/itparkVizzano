import { Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Wrapper } from "../style";

const AddStoreProduct = ({ open, onOk, onCancel, currentDate, onAdd }) => {
  let [productInfo, setProductInfo] = useState({ title: "" });

  let addProduct = async () => {
    onOk();
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/create`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        productName: productInfo.title,
      },
    }).then((res) => {
      let addData = res.data.data;
      onAdd(addData[addData.length - 1]);
    });
  };

  return (
    <Modal
      title="Add product"
      open={open}
      onOk={() => {
        addProduct();
      }}
      onCancel={onCancel}
    >
      <Wrapper.Label>Product name</Wrapper.Label>
      <Input
        value={productInfo.name}
        onChange={(e) => setProductInfo({ title: e.target.value })}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && addProduct()}
      />
    </Modal>
  );
};

export default AddStoreProduct;
