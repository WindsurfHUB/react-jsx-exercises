/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Headeer from "./com";


const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return (
	<>
		<Headers temperature={temperature} />
		<Content temperature={temperature}/>
		<Footer
			decreaseTemperature={decreaseTemperature}
			increaseTemperature={increaseTemperature}/>
	</>
	);
};

const Headers = ({temperature}) => {
	return (
		<header>
			<div className="bg-blue-200 flex justify-between">
				<button className="mx-2 bg-blue-400 border border-blue-400 rounded-xl px-4">ON/OFF</button>
				<h3 className="m-2">Current Temperature: {temperature}&#8451;</h3>
			</div>
		</header>
	)
}

const Content = ({temperature}) => {
	return (
		<content>
			<div className="text-9xl p-80 flex justify-center">
				<div>{temperature}&#8451;</div>
			</div>
		</content>
	)
}

const Footer = ({decreaseTemperature,increaseTemperature}) => (
	<footer className="text-xl flex justify-center">
		<button onClick={decreaseTemperature} className="bg-blue-400 border border-blue-400 rounded-xl px-5 ">Down</button>
		<button onClick={increaseTemperature} className="bg-blue-400 border border-blu4-400 rounded-xl px-8 ">Up</button>
	</footer>
)

export default App;
