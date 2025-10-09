import React from "react";
import { createBrowserRouter, Route } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from "../pages/AllApps/AllApps";
import MyInstallations from "../pages/MyInstallations/MyInstallations";
import AppDetails from "../pages/AppDetails/AppDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
           element: <Home />
        },
        { path: "apps" , element: <AllApps />},
        { path: "app/:id", element: <AppDetails/>},
        {path:  "my-installations", element: <MyInstallations />}

    ]
  }
]);
export default router;
