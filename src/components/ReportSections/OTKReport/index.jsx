import React, { useState } from "react";
import { Title } from "../../Generic/Styles";
import Table from "./Table";

const OTKReport = ({ date }) => {
  const [data, setData] = useState([
    { id: 0, name: "OTK 1", data: { fake: 0, things: 0 } },
    { id: 1, name: "OTK 2", data: { fake: 0, things: 0 } },
    { id: 2, name: "OTK 3", data: { fake: 0, things: 0 } },
    { id: 3, name: "OTK 4", data: { fake: 0, things: 0 } },
    { id: 4, name: "OTK 5", data: { fake: 0, things: 0 } },
  ]);

  return (
    <div>
      <Title>OTK report</Title>
      <Table date={date} data={data} />
    </div>
  );
};

export default OTKReport;
