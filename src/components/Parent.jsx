import React, { useState } from "react";
import styled from "styled-components";
import { Child1 } from "./Child1";

export const Parent = () => {
  const [state1, setState1] = useState("useState: value1");
  const [state2, setState2] = useState("value2");

  return (
    <ParentContainer>
      <p>Parent</p>
      <Child1 state1={state1} />
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  padding: 1rem;
  width: 30rem;
  height: 30rem;
  background-color: #1791e2;
  display: flex;
  flex-direction: column;
`;
