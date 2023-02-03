import { Input, Modal } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Wrapper } from "../style";

const AddStoreProduct = ({ open, onOk, onCancel, currentDate, onAdd }) => {
  let [productInfo, setProductInfo] = useState({ title: "" });
  let [addLoading, setAddLoading] = useState(false);

  let addProduct = async () => {
    setAddLoading(true);
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
      setAddLoading(false);
      onOk();
      let addData = res.data.data;
      onAdd(addData[addData.length - 1]);
      setProductInfo({ title: "" });
    });
  };

  return (
    <Modal
      title="Add product"
      open={open}
      okText={addLoading ? "Loading..." : "Ok"}
      onOk={() => {
        addProduct();
      }}
      onCancel={onCancel}
    >
      <Wrapper.Label>Product name</Wrapper.Label>
      <Input
        value={productInfo.title}
        onChange={(e) => setProductInfo({ title: e.target.value })}
        onKeyDown={(e) => (e.key === "Enter" || e.key === 13) && addProduct()}
      />
    </Modal>
  );
};

export default AddStoreProduct;
