import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-darkBlue relative pb-[75px] text-lightBlue">
      <aside>
        <img src={logo} className="h-[75px]" />
        <p className="text-xl">
          AlterChoice
          <br />
          Find the Best Alternatives
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-3xl">Social</h6>
        <div className="grid grid-flow-col text-4xl gap-5">
          <a>
            <FaSquareFacebook />
          </a>
          <a>
            <FaXTwitter />
          </a>
          <a>
            <FaInstagram />
          </a>
        </div>
      </nav>
      <h1></h1>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
