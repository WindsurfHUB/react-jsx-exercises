/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const Footer = ({ decreaseTemperature, increaseTemperature }) => (
    <footer className="text-xl flex justify-center">
      <button
        onClick={decreaseTemperature}
        className="bg-blue-400 border border-blue-400 rounded-xl px-5 "
      >
        Down
      </button>
      <button
        onClick={increaseTemperature}
        className="bg-blue-400 border border-blu4-400 rounded-xl px-8 "
      >
        Up
      </button>
    </footer>
  );

export default Footer;