/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const Header = ({ isOn, toggleIsOn, temperature }) => {
  return (
    <header>
      <div className="bg-blue-200 flex justify-between">
        <button
          onClick={toggleIsOn}
          className="m-2 mx-10 bg-blue-400 border border-blue-400 rounded-xl px-4"
        >
          ON/OFF
        </button>
        {isOn && (
          <h3 className="m-2 mx-10">
            Current Temperature: {temperature}&#8451;
          </h3>
        )}
      </div>
    </header>
  );
};

export default Header;
