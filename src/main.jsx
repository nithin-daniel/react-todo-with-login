import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Todo from "./pages/Todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home Page</h1>
      </div>
    ),
  },
  {
    path: "signup",
    element:<Signup/>,
  },
  {
    path: "login",
    element:<Login/>,
  },
  {
    path: "todo",
    element:<Todo/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
