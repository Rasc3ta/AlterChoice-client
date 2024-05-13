import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterCompo = () => {
  return (
    <div className="App">
      <Typewriter
        words={[
          "Find Your Ideal Fit, Explore Alternatives Today",
          "Discover Your Perfect Alternative",
          "Your Guide to Better Product Options",
        ]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={30}
        deleteSpeed={30}
        delaySpeed={750}
      />
    </div>
  );
};

TypeWriterCompo.propTypes = {};

export default TypeWriterCompo;
