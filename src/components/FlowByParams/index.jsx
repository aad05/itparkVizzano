import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Wrapper } from "./style";
import Card from "../Generic/Card";
import { Title } from "../Generic/Styles";

const Flow = () => {
  const navigate = useNavigate();
  const { flowID } = useParams();
  const date = new Date();
  return (
    <Wrapper>
      <Title>Flow {flowID}</Title>
      <Wrapper.CardContainer>
        <Card
          isFlowCard={true}
          title={"Attandance"}
          img="https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          onClick={() =>
            navigate(`/flow/${flowID}/attandances/${date.getTime()}`)
          }
        />
        <Card
          isFlowCard={true}
          title={"Count work"}
          img="https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          onClick={() =>
            navigate(`/flow/${flowID}/count-work/${date.getTime()}`)
          }
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          isFlowCard={true}
          title={"OTK"}
          img="https://st2.depositphotos.com/1007989/5894/i/950/depositphotos_58949951-stock-photo-girl-making-a-dress.jpg"
          onClick={() => navigate(`/flow/${flowID}/otk/${date.getTime()}`)}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Flow;
