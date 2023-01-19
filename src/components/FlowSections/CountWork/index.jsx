import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Generic/Calendar";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import Table from "./Table";

const Count_Work = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));
  const [data] = useState([
    { id: 0, fullName: "Mamajonov Xayotbek", defect: 0, total: 0 },
    { id: 1, fullName: "Alisherov Hamidilloh", defect: 0, total: 0 },
    { id: 2, fullName: "Ortiqjanov Abdullahad", defect: 0, total: 0 },
  ]);
  return (
    <Wrapper>
      <Title>Count Work</Title>
      <Calendar date={date} />
      <Table data={data} />
    </Wrapper>
  );
};

export default Count_Work;
