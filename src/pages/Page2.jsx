import React from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      Page2
      <Link to={"/page3"}>page3</Link>
    </div>
  );
};
