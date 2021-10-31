import React, { useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	// const [color, setColor] = useState(props.color);
	// const [on, setOn] = useState(props.light);

	return (
		<div
			className={"bulb ".concat(props.color)}
			onClick={() => {
				props.switchBulb(props.color), console.log(props.color);
			}}></div>
		// <div
		// 	className={`bulb ${color}`}
		// 	onClick={() => {
		// 		if (color == "") {
		// 			props.switchBulb(props.color);

		// 		} else {
		// 			setColor("");
		// 		}
		// 	}}></div>
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchBulb: PropTypes.func
	// light: PropTypes.bool
};

export default Bulb;
