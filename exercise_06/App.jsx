/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const defaultTemperature = 25;
  const [temperature, setTemperature] = useState(25); // Initial temperature value
  const [isOn, setIsOn] = useState(true); // Initial visibility state

  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
  const toggleIsOn = () => {
    if (isOn) {
      setTemperature(defaultTemperature);
      setIsOn(!isOn);
    } else {
      setTemperature(defaultTemperature);
      setIsOn(!isOn);
    }
  };

  return (
    <>
      <Header isOn={isOn} toggleIsOn={toggleIsOn} temperature={temperature} />
      <Content temperature={temperature} />
      <Footer
        decreaseTemperature={decreaseTemperature}
        increaseTemperature={increaseTemperature}
      />
    </>
  );
};

/* const Headers = ({ isOn, toggleIsOn, temperature }) => {
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

const Content = ({ temperature }) => {
  return (
    <content>
      <div className="text-9xl p-80 flex justify-center">
        <div>{temperature}&#8451;</div>
      </div>
    </content>
  );
};

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
 */
export default App;
