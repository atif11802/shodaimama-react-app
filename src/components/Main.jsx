import React from "react";
import Products from "../Screens/Products";
import "../styles/main.css";
import Categries from "./Categries";
import ContentWrite from "./ContentWrite";
import Footer from "./Footer";
import ImageSlide from "./ImageSlide";
import Items from "./Items";
import WhyShodaimama from "./WhyShodaimama";

const Main = () => {
	return (
		<div className='main'>
			<Items />
			<ImageSlide />
			<ContentWrite
				content='বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের
					বাজার সরবরাহ করা হয় ২-৭ দিনে ।'
				title='Preorder'
			/>
			<div className='main__body__right__preorder'>
				<img
					src='https://bucket.shodaimama.com/files/sm/images/whXCzt1640081138967PO8UH7.jpeg'
					alt='bar-b-q-fest'
				/>
				<p>সদাই মামা বার বি কিউ ফেস্ট ...</p>
			</div>

			<ContentWrite
				content='গুনগত মান বজায় রাখার জন্য পচনশীল খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।'
				title='Fresh'
			/>
			<Products />
			<Categries />
			<WhyShodaimama />
			<Footer />
		</div>
	);
};

export default Main;
