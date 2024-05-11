import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "./AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, user, updateUser } = useContext(authContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then((res) => res.user)
      .then((userData) => {
        updateUser(name, photoURL)
          .then(() => console.log("updated"))
          .then(() => {
            toast("Registered successfully!", {
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
              navigate("/");
            }, 1250);
          });
      })
      .catch((e) => {
        e.message.includes("email-already-in-use")
          ? toast.error("Email already in use!", {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : "";
      });
  };

  return (
    <div className=" flex justify-center">
      {/* {console.log(user)} */}
      <form
        onSubmit={handleRegister}
        className="flex-1 p-4 border-4 rounded-xl border-darkBlue my-40 mx-10 flex flex-col gap-3 max-w-[500px] "
      >
        <h1 className="text-2xl font-bold text-darkBlue">Register : </h1>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="text"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Name"
            name="name"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="text"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Photo URL"
            name="photoURL"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="email"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <MdKey /> */}
          <input
            required
            type="password"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="password"
            name="password"
          />
        </label>

        <button type="submit" className="btn button">
          Register
        </button>
        <Link to={"/login"}>
          <p className="text-xl">
            Have an accout ? <span className="font-bold">Login</span>
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

Register.propTypes = {};

export default Register;
