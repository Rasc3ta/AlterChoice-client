import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Register = (props) => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="p-4 flex flex-col gap-3 max-w-[500px] mx-auto"
      >
        <h1 className="text-2xl font-bold text-darkBlue">Register : </h1>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="text"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Name"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="text"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Photo URL"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <FaRegEnvelope /> */}
          <input
            required
            type="email"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="Email"
          />
        </label>
        <label className=" p-3 rounded-xl  flex items-center bg-veryLightBlue border-darkBlue border-4 focus:border-darkBlue gap-2">
          {/* <MdKey /> */}
          <input
            required
            type="password"
            className=" placeholder:text-darkBlue grow rounded-lg p-2 bg-veryLightBlue focus:outline-none text-lg text-superDarkBlue"
            placeholder="password"
          />
        </label>

        <button type="submit" className="btn button">
          Register
        </button>
        <Link to={"/login"}>
          <p>
            Have an accout ? <span className="font-bold">Login</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
