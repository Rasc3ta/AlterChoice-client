import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Authentication/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user, loading } = useContext(authContext);
  // console.log(pathname);

  if (loading) {
    return (
      <div className=" flex items-center justify-center mt-14">
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate state={pathname} to={"/login"}></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
