import React from "react";
import Bulb from "./bulb.jsx";

const Home = () => {
	const [lightFirst, setLightFirst] = useState(false);
	const [lightSecond, setLightSecond] = useState(false);
	const [lightThird, setLightThird] = useState(false);

	const switchBulb = (color) => {
		if (color == "stop") {
			setLightFirst(true);
			setLightSecond(false);
			setLightThird(false);
		} else if (color == "slow") {
			setLightFirst(false);
			setLightSecond(true);
			setLightThird(false);
		} else if (color == "go") {
			setLightFirst(false);
			setLightSecond(false);
			setLightThird(false);
		}
	};

	return (
		<div className="traffic-light">
			<Bulb
				key="stop"
				color="stop"
				light={lightFirst}
				switchLight={switchBulb}
			/>
			<Bulb
				key="slow"
				color="slow"
				light={lightSecond}
				switchLight={switchBulb}
			/>
			<Bulb
				key="go"
				color="go"
				light={lightThird}
				switchLight={switchBulb}
			/>
		</div>
	);
};

export default Home;
