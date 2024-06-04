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
import Statistics from "../Dashboard/Statistics/Statistics";
import AllParcels from "../Dashboard/AllParcels/AllParcels";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AllDeliveryMen from "../Dashboard/AllDeliveryMen/AllDeliveryMen";
import MyDeliveryList from "../Dashboard/MyDeliveryList/MyDeliveryList";
import MyReviews from "../Dashboard/MyReviews/MyReviews";
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
        path: "/dashboard/myDeliveryList",
        element: <MyDeliveryList />,
      },
      {
        path: "/dashboard/myReviews",
        element: <MyReviews />,
      },
      {
        path: "/dashboard/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard/allParcels",
        element: <AllParcels />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/allDeliveryMen",
        element: <AllDeliveryMen />,
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
