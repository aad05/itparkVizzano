import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import axios from "axios";
import AddStoreProduct from "./AddStoreProduct";
import { useEffect } from "react";
import TableLoading from "../Generic/TableLoading";

const Store = ({ disableFunction }) => {
  const [resData, setResData] = useState();
  let [isOpen, setOpen] = useState(false);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setResData(res.data);
      setLoading(false);
    });
  }, []);
  let onAdd = (value) => {
    setResData({
      // ...resData,
      data: [...resData.data, value],
    });
  };

  return (
    <Wrapper>
      <AddStoreProduct
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onAdd={onAdd}
      />
      <Title>Store</Title>
      {loading ? (
        <TableLoading count={10} />
      ) : (
        <Table disableFunction={disableFunction} data={resData} />
      )}
      {!disableFunction && (
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          style={{ margin: "30px 0" }}
          disabled={loading ? true : false}
        >
          + Add Product
        </Button>
      )}
    </Wrapper>
  );
};

export default Store;
