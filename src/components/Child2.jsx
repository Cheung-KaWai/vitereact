import React from "react";
import styled from "styled-components";
import { useGlobaleStore } from "../store";

export const Child2 = ({ state1 }) => {
  const globalState1 = useGlobaleStore((store) => store.state1);

  return (
    <Child2Container>
      <p>Child2</p>
      <p>{state1}</p>
      <p>{globalState1}</p>
    </Child2Container>
  );
};

const Child2Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;
