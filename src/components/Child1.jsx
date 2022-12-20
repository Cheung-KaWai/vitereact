import React from "react";
import styled from "styled-components";
import { Child2 } from "./Child2";

export const Child1 = ({ state1 }) => {
  return (
    <Child1Container>
      <p>Child1</p>
      <Child2 state1={state1} />
    </Child1Container>
  );
};

const Child1Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
