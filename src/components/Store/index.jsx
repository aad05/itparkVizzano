import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import axios from "axios";
import AddStoreProduct from "./AddStoreProduct";
import { useEffect } from "react";
import TableLoading from "../Generic/TableLoading";
import { useSelector } from "react-redux";

const Store = ({ disableFunction }) => {
  let { storeSelectedData } = useSelector((state) => state.countWork);
  const [data, setData] = useState([]);
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
      setData(res.data.data);
      setLoading(false);
    });
  }, []);
  let onAdd = (value) => {
    setData([...data, value]);
  };
  let updateHandler = () => {
    setData(
      data.map((value) =>
        value._id === storeSelectedData._id ? storeSelectedData : value
      )
    );
  };

  let deleteStorePr = (_id) => {
    setData(data.filter((value) => value._id !== _id));
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store/delete`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: { _id },
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
        <Table
          disableFunction={disableFunction}
          data={data}
          updateHandler={updateHandler}
          deleteStorePr={deleteStorePr}
        />
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
