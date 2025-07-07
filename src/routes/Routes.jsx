import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
    ]
  },
]);