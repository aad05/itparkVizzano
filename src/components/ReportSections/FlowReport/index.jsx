import React, { useState } from "react";
import { Title } from "../../Generic/Styles";
import Table from "./Table";

const FlowReport = ({ date }) => {
  const [data, setData] = useState([
    { id: 0, name: "Flow 1", data: { price: 0, fake: 0, things: 0 } },
    { id: 1, name: "Flow 2", data: { price: 0, fake: 0, things: 0 } },
    { id: 2, name: "Flow 3", data: { price: 0, fake: 0, things: 0 } },
    { id: 3, name: "Flow 4", data: { price: 0, fake: 0, things: 0 } },
    { id: 4, name: "Flow 5", data: { price: 0, fake: 0, things: 0 } },
  ]);
  console.log(date, "flowReport");
  return (
    <div>
      <Title>Flow report</Title>
      <Table date={date} data={data} />
    </div>
  );
};

export default FlowReport;
