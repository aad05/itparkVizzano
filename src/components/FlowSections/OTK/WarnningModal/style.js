import { Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Wrapper.Input = styled(Input)`
  background-color: #fdf2f0;
`;
Wrapper.Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;
export { Wrapper };
