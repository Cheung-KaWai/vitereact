import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
