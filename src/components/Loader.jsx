import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
	return (
		<div
			style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
		>
			{" "}
			<Triangle arialLabel='loading-indicator' />
		</div>
	);
};

export default Loader;
