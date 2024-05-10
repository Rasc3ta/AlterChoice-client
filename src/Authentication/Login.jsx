import PropTypes from "prop-types";
import { FaRegEnvelope } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const googleLogin = (e) => {
    e.preventDefault();
    console.log("goole login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("form ogin");
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="p-4 flex flex-col gap-3 max-w-[500px] mx-auto"
      >
        <h1 className="text-2xl font-bold text-darkBlue">Login : </h1>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          <FaRegEnvelope />
          <input
            required
            type="email"
            className="placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Email"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          <MdKey />
          <input
            required
            type="password"
            className="placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="password"
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
          <p>
            Don&apos;t have an accout ?{" "}
            <span className="font-bold">Register</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
