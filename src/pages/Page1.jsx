import React from "react";
import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      Page1
      <Link to={"/page2"}>page2</Link>
    </div>
  );
};
