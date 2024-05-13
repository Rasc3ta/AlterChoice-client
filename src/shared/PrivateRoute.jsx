import React, { useContext } from "react";
import PropTypes from "prop-types";
import { authContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);

  if (user) {
    return {children};
  }
  else {
    return <Navigate to={'/login'}></Navigate>
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
