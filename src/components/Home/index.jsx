import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Generic/Card";
import { Wrapper } from "./style";
import { flowData } from "../../utils/flowDate";
import { Title } from "../Generic/Styles";
import store from "../../assets/images/store.jpg";
import report from "../../assets/images/report.jpg";

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
        <Card title={"Store"} img={store} onClick={() => navigate("/store")} />
        <Card
          title={"Report"}
          img={report}
          onClick={() => navigate("/report")}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
