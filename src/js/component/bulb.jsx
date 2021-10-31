import React, { useState } from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	return (
		<div
			className={"bulb ".concat(props.color)}
			onClick={() => {
				props.switchBulb(props.color);
			}}></div>
	);
};

Bulb.propTypes = {
	color: PropTypes.string,
	switchBulb: PropTypes.func
};

export default Bulb;
