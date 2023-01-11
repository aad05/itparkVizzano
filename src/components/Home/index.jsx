import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import { flowData } from "../../utils/flowDate";
import { Title } from "../Generic/Styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>Flows</Title>
      <Wrapper.CardContainer>
        {flowData.map(({ img, id, navigateUlr, name }) => (
          <Card
            key={id}
            title={name}
            img={img}
            onClick={() => navigate(navigateUlr)}
          />
        ))}
      </Wrapper.CardContainer>
      <Title>Store and Report</Title>
      <Wrapper.CardContainer>
        <Card
          title={"Store"}
          img="https://previews.123rf.com/images/grgroup/grgroup1310/grgroup131000166/22769908-store-design-over-white-background-vector-illustration.jpg"
        />
        <Card
          title={"Report"}
          img="https://previews.123rf.com/images/vectorplus/vectorplus1711/vectorplus171100236/90549766-business-report-vector-icon-black-illustration-isolated-on-white-background-for-graphic-and-web-desi.jpg"
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
