import React, { useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	const [color, setColor] = useState(props.color);
	const [on, setOn] = useState(props.light);

	return (
		<div
			className={`bulb ${color}`}
			onClick={() => {
				if (color == "") {
					setColor(props.color);
                    // setOn(on)
				} else {
					setColor("");
                    // setOn(false)
				}
			}}></div>
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchLight: PropTypes.func,
	light: PropTypes.bool
};

export default Bulb;
