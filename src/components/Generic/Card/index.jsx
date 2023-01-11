import React from "react";
import { Wrapper } from "./style";

const Card = ({ title, img, onClick, isFlowCard }) => {
  return (
    <Wrapper isFlowCard={isFlowCard} onClick={onClick}>
      <Wrapper.Title isFlowCard={isFlowCard}> {title}</Wrapper.Title>
      <Wrapper.Img isFlowCard={isFlowCard} src={img} />
    </Wrapper>
  );
};

export default Card;
