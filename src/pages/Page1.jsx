import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Parent } from "../components/Parent";
import { useGlobaleStore } from "../store";

export const Page1 = () => {
  const state1 = useGlobaleStore((store) => store.state1);
  const update = useGlobaleStore((store) => store.update);

  const handleStateChange = (ev) => {
    update("state1", ev.target.value);
  };

  return (
    <>
      <input value={state1} onChange={handleStateChange} />
      <Parent />
    </>
  );
};

// <div>
//   Page1
//   <a href="/page2">page2 a-tag</a>
//   <Link to={"/page2"}>page2</Link>
// </div>
