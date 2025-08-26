import { Button } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: ":id", element: <ProductDetails /> },
        ],
      },
      { path: "cart", element: <Cart /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
