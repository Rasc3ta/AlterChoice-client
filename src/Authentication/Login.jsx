import PropTypes from "prop-types";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, login, gmailLogin } = useContext(authContext);
  const navigate = useNavigate();
  const { state } = useLocation();

  const googleLogin = (e) => {
    e.preventDefault();
    gmailLogin()
      .then((res) => {
        toast(`Logged in as ${res.user.displayName}`, {
          position: "top-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate(state || "/");
        }, 1250);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => res.user)
      .then((user) => {
        toast(`Logged in as ${user.displayName}`, {
          position: "top-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate(state || "/");
        }, 1250);
      })
      .catch((e) => {
        toast.error(`Incorrect user credentials !`, {
          position: "top-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  // console.log(state)

  if (user) {
    return <Navigate to={state || "/"}></Navigate>;
  }

  return (
    <div className=" flex justify-center">
      {/* {console.log(user?.email)} */}
      <form
        onSubmit={handleLogin}
        className="flex-1 p-4 border-4 rounded-xl border-darkBlue my-40 mx-10 flex flex-col gap-3 max-w-[500px] "
      >
        <h1 className="text-2xl font-bold text-darkBlue">Login : </h1>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          <FaRegEnvelope />
          <input
            required
            type="email"
            className="placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          <MdKey />
          <input
            required
            type="password"
            className="placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="password"
            name="password"
          />
        </label>
        <div className="p-2 pl-0">
          <h3 className="text-lg font-bold mb-3">Login with :</h3>
          <button onClick={googleLogin} className="button btn">
            {" "}
            <FaGoogle />
            Google
          </button>
        </div>
        <button type="submit" className="btn button">
          Log in
        </button>
        <Link to={"/register"}>
          <p className="text-xl">
            Don&apos;t have an accout ?{" "}
            <span className="font-bold">Register</span>
          </p>
        </Link>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

Login.propTypes = {};

export default Login;
