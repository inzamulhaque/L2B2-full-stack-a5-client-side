import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import App from "../App";
import routeGenerator from "../utils/routesGenerator";
import bikePath from "./bike.routes";
import Bikes from "../pages/bike/Bikes";
import Sales from "../pages/sale/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Bikes />,
      },
    ],
  },
  {
    path: "/bikes",
    element: <App />,
    children: routeGenerator(bikePath),
  },
  {
    path: "/sales",
    element: <App />,
    children: [
      {
        index: true,
        element: <Sales />,
      },
    ],
  },
  {
    path: "/user/signin",
    element: <Login />,
  },
  {
    path: "/user/signup",
    element: <SignUp />,
  },
]);

export default router;
