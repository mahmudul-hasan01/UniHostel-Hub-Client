
import { createBrowserRouter, } from "react-router-dom";
import Home from "./Page/Home/Home";
import MainLayout from "./MainLayout";
import JoinUS from "./Page/Join-Us/JoinUS";

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
      ]
    },
  ]);