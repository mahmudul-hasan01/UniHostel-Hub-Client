
import { createBrowserRouter, } from "react-router-dom";
import Home from "./Page/Home/Home";
import MainLayout from "./MainLayout";
import JoinUS from "./Page/Join-Us/JoinUS";
import Register from "./Page/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/Join-US',
            element: <JoinUS></JoinUS>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);