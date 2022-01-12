import React from "react";
import "../styles/contentwrite.css";

const ContentWrite = ({ title, content }) => {
	return (
		<div className='main__body__right__text'>
			<div className='vl'></div>
			<div className='main__body__right__text__text'>
				<h3>{title}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default ContentWrite;
