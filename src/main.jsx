import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home.jsx";
import Login from "./Authentication/Login.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
     children: [
      {
        path: '/',
        element: <Home></Home>
      },
      { 
        path:'/login',
        element: <Login></Login>
      }
     ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
