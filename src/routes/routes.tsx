import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
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
