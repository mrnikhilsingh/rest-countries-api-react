import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import CountryDetails from "../components/CountryDetails";
import { Contact } from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
