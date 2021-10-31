import React, { useState } from "react";
import Bulb from "./bulb.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "red",
		slow: "yellow",
		go: "green"
	});

	// const [lightFirst, setLightFirst] = useState("");
	// const [lightSecond, setLightSecond] = useState("");
	// const [lightThird, setLightThird] = useState("");

	// const switchBulb = color => {
	// 	if (color == "stop") {
	// 		setLightFirst(true);
	// 		setLightSecond(false);
	// 		setLightThird(false);
	// 	} else if (color == "slow") {
	// 		setLightFirst(false);
	// 		setLightSecond(true);
	// 		setLightThird(false);
	// 	} else if (color == "go") {
	// 		setLightFirst(false);
	// 		setLightSecond(false);
	// 		setLightThird(false);
	// 	}
	// };

	return (
		<div className="traffic-light">
			<Bulb
				className="red glow"
				key="stop"
				color={color.stop}
				switchBulb={() => {
					setColor({
						stop: "red glow",
						slow: "",
						go: ""
					});
				}}
				// light={lightFirst}
				// switchLight={switchBulb}
			/>
			<Bulb
				className="yellow glow"
				key="slow"
				color={color.slow}
				switchBulb={() => {
					setColor({
						stop: "",
						slow: "yellow glow",
						go: ""
					});
				}}
				// light={lightSecond}
				// switchLight={switchBulb}
			/>
			<Bulb
				className="green glow"
				key="go"
				color={color.go}
				switchBulb={() => {
					setColor({
						stop: "",
						slow: "",
						go: "green glow"
					});
				}}
				// color="go"
				// light={lightThird}
				// switchLight={switchBulb}
			/>
		</div>
	);
};

export default Home;
