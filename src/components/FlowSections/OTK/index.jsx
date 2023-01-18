import { Button } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";
const OTK = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));
  const [data] = useState([{ id: 0, product: "Suit", count: 0, defect: 0 }]);

  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} />
      <Table data={data} />
      <Button type="primary" style={{ margin: "80px 0" }}>
        + Add Product
      </Button>
    </Wrapper>
  );
};

export default OTK;
