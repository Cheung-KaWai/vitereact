import React from "react";
import { Link } from "react-router-dom";
import { Parent } from "../components/Parent";

export const Page1 = () => {
  return (
    // <div>
    //   Page1
    //   <a href="/page2">page2 a-tag</a>
    //   <Link to={"/page2"}>page2</Link>
    // </div>
    <Parent />
  );
};
