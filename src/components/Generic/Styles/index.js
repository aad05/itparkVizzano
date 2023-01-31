import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: rgb(0, 0, 0);
  margin: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

Wrapper.InputWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;
Wrapper.Label = styled.div``;
Wrapper.Input = styled(Input)``;
