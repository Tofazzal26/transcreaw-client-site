import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Routes/Root";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default Router;
