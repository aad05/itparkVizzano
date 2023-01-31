import React, { useState } from "react";
import { Wrapper } from "./style";
import { Title } from "../Generic/Styles";
import Table from "./Table";
import { Button } from "antd";
import { useEffect } from "react";
import axios from "axios";
const Store = ({ disableFunction }) => {
  const [data, setData] = useState([
    { id: 0, productName: "Kastyum", things: 145, sendedThings: 0 },
    { id: 1, productName: "Kambinezon", things: 205, sendedThings: 0 },
    { id: 2, productName: "Kurtka", things: 100, sendedThings: 0 },
  ]);

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/store`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <Wrapper>
      <Title>Store</Title>
      <Table disableFunction={disableFunction} data={data} />
      {!disableFunction && (
        <Button type="primary" style={{ margin: "30px 0" }}>
          + Add Product{" "}
        </Button>
      )}
    </Wrapper>
  );
};

export default Store;
