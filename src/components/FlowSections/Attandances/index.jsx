import React from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";

const Attandances = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));

  return (
    <Wrapper>
      <Title>Attandances</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default Attandances;
