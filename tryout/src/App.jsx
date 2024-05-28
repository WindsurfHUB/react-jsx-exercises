/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const temperature = 25;

const App = () => {


  return (
    <div>
      <Header temperature = {temperature} />
      <Content temperature = {temperature} />
      <Footer />
    </div>
  );
};



const Header = ( {temperature} ) => {
  return (
    <header>
      <div className="flex justify-between">
        <button>ON/OFF</button>
        <h3>Current Temperature: {temperature}&#8451;</h3>
      </div>
    </header>
  );
};

const Content = ( {temperature} ) => (
  <content>
    <div>
      <div>{temperature}&#8451;</div>
    </div>
  </content>
);

const Footer = () => (
    <footer>
      <button>Down</button>
      <button>Up</button>
    </footer>
);

export default App;
