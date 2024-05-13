import PropTypes from "prop-types";
import "./home.css";
import Slides from "./Slides";
import TypeWriterCompo from "./TypeWriterCompo";
import logo from "../assets/logo.png";


const Home = (props) => {
  return (
    <div>
      <div className="my-5 sm:my-10 relative" id="slides">
        <Slides></Slides>
        <div className="typeWriterText absolute top-[40%] left-[calc(50%-200px)] z-[5] text-center w-[400px] ">
            <img src={logo} className="h-[100px] mx-auto" />
          <h1 className="text-veryLightBlue  text-5xl font-bold">
            AlterChoice
          </h1>
          <span className="text-lightBlue ">
            <TypeWriterCompo></TypeWriterCompo>
          </span>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
