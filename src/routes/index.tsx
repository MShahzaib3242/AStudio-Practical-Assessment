import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//COMPONENTS
import Loader from "../components/UI/Loader";
import Layout from "../pages/Layout";
//PAGES
import Error from "../pages/Error";
import Home from "../pages/index";
import Users from "../pages/Users";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<Loader />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: (
      <React.Suspense>
        <Error />
      </React.Suspense>
    ),
  },
]);
