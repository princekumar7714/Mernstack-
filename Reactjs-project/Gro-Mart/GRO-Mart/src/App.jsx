import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/fruits/Fruits";
import Seafood from "./components/seafood/Seafood";
import Dairy from "./components/dairy/Dairy";
import Allproducts from "./components/Allproducts/Allproducts";
import Layout from "./components/Layout/Layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
         {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/Seafood",
          element: <Seafood />,
        },
        {
          path: "/allproducts",
          element: <Allproducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
