import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Routes/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import BookParcel from "../Dashboard/BookParcel/BookParcel";
import MyParcels from "../Dashboard/MyParcels/MyParcels";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import ParcelUpdate from "../Dashboard/MyParcels/ParcelUpdate";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/bookParcel",
        element: <BookParcel />,
      },
      {
        path: "/dashboard/myParcel",
        element: <MyParcels />,
      },
      {
        path: "/dashboard/parcelUpdate/:id",
        element: <ParcelUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/bookDetails/${params.id}`),
      },
      {
        path: "/dashboard/myProfile",
        element: <MyProfile />,
      },
    ],
  },
]);

export default Router;
