import React from "react";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";
import Calendar from "../../Generic/Calendar";
import { useParams } from "react-router-dom";

const OTK = () => {
  const { flowDate } = useParams();
  const date = new Date(Number(flowDate));

  return (
    <Wrapper>
      <Title>OTK</Title>
      <Calendar date={date} />
    </Wrapper>
  );
};

export default OTK;
