import React from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";

const CountWork = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));

  return (
    <Wrapper>
      <Title>Count Work:</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default CountWork;
