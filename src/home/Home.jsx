import PropTypes from "prop-types";
import "./home.css";
import Slides from "./Slides";
import TypeWriterCompo from "./TypeWriterCompo";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="my-5 sm:my-10 relative" id="slides">
        <Slides></Slides>
        <div className="typeWriterText absolute top-[calc(50%-70px)] sm:top-[calc(50%-90px)] left-[calc(50%-185px)] xl:left-[calc(50%-350px)] z-[5] text-center w-[370px] xl:w-[700px]">
          <img src={logo} className="h-[70px] sm:h-[100px] lg:h-[150px] xl:h-[200px] mx-auto" />
          <h1 className="text-veryLightBlue text-3xl  sm:text-5xl lg:text-6xl xl:text-[5rem] font-bold">
            AlterChoice
          </h1>
          <span className="text-lightBlue xl:text-3xl">
            <TypeWriterCompo></TypeWriterCompo>
          </span>
        </div>
      </div>

      <div
        id="banner"
        className="bg-[linear-gradient(rgb(0,0,0,.4),rgb(0,0,0,.4)),url('https://i.ibb.co/42FNzWD/banner.jpg')] bg-no-repeat bg-top bg-cover  mb-5 py-5 "
      >
        <h2 className="text-3xl font-bold text-lightBlue  text-center">
          Discover Alternatives for Every Need
        </h2>
        <p className="text-lg text-lightBlue text-center font-bold max-w-[600px] mx-auto">
          Explore queries to find alternative products that suit your
          preferences. Click below to start discovering!
        </p>
        <div className=" flex justify-center mt-3">
          <button
            onClick={() => {
              navigate("/queries");
            }}
            className="btn button  "
          >
            Explore All Queries
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
