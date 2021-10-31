import React, { useState } from "react";
import Bulb from "./bulb.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "red",
		slow: "yellow",
		go: "green"
	});

	return (
		<div>
			<div className="traffic-light">
				<Bulb
					// className="red glow"
					key="stop"
					color={color.stop}
					switchBulb={() => {
						setColor({
							stop: "red glow",
							slow: "",
							go: ""
						});
					}}
				/>
				<Bulb
					// className="yellow glow"
					key="slow"
					color={color.slow}
					switchBulb={() => {
						setColor({
							stop: "",
							slow: "yellow glow",
							go: ""
						});
					}}
				/>
				<Bulb
					// className="green glow"
					key="go"
					color={color.go}
					switchBulb={() => {
						setColor({
							stop: "",
							slow: "",
							go: "green glow"
						});
					}}
				/>
			</div>
			<div className="base"></div>
		</div>
	);
};

export default Home;
