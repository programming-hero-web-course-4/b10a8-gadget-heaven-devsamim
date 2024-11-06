import ProductDetail from "./components/ProductDetail/ProductDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("allProducts.json"),

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products/:product_id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("allProducts.json"),
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("allProducts.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center"></ToastContainer>
  </StrictMode>
);
