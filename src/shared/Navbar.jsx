import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./nav.css";
import { useContext } from "react";
import { authContext } from "../Authentication/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  // const user = 'hi'

  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/queries"}>Queries</NavLink>
      </li>
      <li className={!user ? "hidden" : ""}>
        <NavLink to={"/home"}>Recommendations For Me</NavLink>
      </li>
      <li className={!user ? "hidden" : ""}>
        <NavLink to={"/myQueries"}>My Queries</NavLink>
      </li>
      <li className={!user ? "hidden" : ""}>
        <NavLink to={"/myRecommendations"}>My Recommendations</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-darkBlue min-w-[425px]">
      <div
        id="navbar"
        className="navbar max-w-[1280px] mx-auto  text-lightBlue justify-between"
      >
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow  rounded-box bg-darkBlue w-[250px] font-bold "
            >
              {links}
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn px-2 btn-ghost text-lg "
          >
            <img src={logo} className="w-10" /> AlterChoice{" "}
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-1 w-auto">
          {user ? (
            <button
              onClick={() => {
                logout();
              }}
              className="btn button"
            >
              Log out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn button">Log in</button>
            </Link>
          )}
          {/* <a className="btn button">Log out</a> */}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
