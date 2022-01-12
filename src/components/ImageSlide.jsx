import React from "react";
import ImageGallery from "react-image-gallery";
import Image1 from "../images/rrJQWI163997863637200iQTQ.png";
import Image2 from "../images/r59HnY1639978584493djXc1w.png";
import Image3 from "../images/lfYjG51639978759343YtI18U.png";

const ImageSlide = () => {
	const images = [
		{
			original: Image1,
			thumbnail: Image1,
		},
		{
			original: Image2,
			thumbnail: Image2,
		},
		{
			original: Image3,
			thumbnail: Image3,
		},
	];

	return (
		<>
			<ImageGallery items={images} />
		</>
	);
};

export default ImageSlide;
