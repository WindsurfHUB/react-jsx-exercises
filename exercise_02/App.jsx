/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header";
import Content from "./components/contents";

const App = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Header />
      </div>
      <Content/>
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <button>ON/OFF</button>Current Temperature: 25&#8451;
      </div>
    </header>
  )
}

const Content = () => (
  <>
    <content>
      <temperature>25&#8451;</temperature>
    </content>
  </>
);

const Footer = () => (
  <>
  <footer>
        <button>Down</button>
        <button>Up</button>
      </footer>
  </>
)

export default App;
