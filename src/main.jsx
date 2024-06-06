import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home.jsx";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import ErrorPage from "./shared/ErrorPage.jsx";
import MyQueries from "./privateRoutes/MyQueries.jsx";
import PrivateRoute from "./shared/PrivateRoute.jsx";
import AddQueries from "./privateRoutes/AddQueries.jsx";
import AllQueries from "./Queries/AllQueries.jsx";
import UpdateQuery from "./privateRoutes/UpdateQuery.jsx";
import QueryDetails from "./Queries/QueryDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/addQueries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:title",
        element: (
          <PrivateRoute>
            <UpdateQuery></UpdateQuery>
          </PrivateRoute>
        ),
      },
      {
        path: "/queries",
        element: <AllQueries></AllQueries>,
      },
      {
        path: "/queryDetails/:id",
        element: <QueryDetails></QueryDetails>
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
