import React from "react";
import "../styles/whyshodaimama.css";
import deliver from "../images/delivery.png";
import fresh from "../images/fresh-air.png";
import fastDelivery from "../images/fast-delivery.png";
import payment from "../images/credit-card.png";
import shopping from "../images/shopping.png";
import salary from "../images/salary.png";
import free from "../images/free.png";
import query from "../images/customer-service.png";

const WhyShodaimama = () => {
	return (
		<div className='main__body__right__why__shodaimama'>
			<h2>Why Shodaimama?</h2>
			<div className='main__body__right__why__shodaimama__container'>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={deliver} alt='' />
					<h1>Hassle Free Grocery Shopping</h1>
					<p>Avoid the crowds and long queues to get your daily needs.</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={fresh} alt='' />
					<h1>Freshness Redefined</h1>
					<p>
						Fresh groceries from trusted and hygienic sources to your doorstep.
					</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={fastDelivery} alt='' />
					<h1>On-Time Doorstep Delivery</h1>
					<p>Solution to your needs just on time.</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={payment} alt='' />
					<h1>Fast & Flawless Payment System</h1>
					<p>
						All secured payment gateways to ensure stress free fast payment.
					</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={shopping} alt='' />
					<h1>Customer Centric Approach</h1>
					<p>
						For us, our customer needs comes first. Our Aim is to offer the very
						Best quality, at the best price and deals.
					</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={salary} alt='' />
					<h1>Value For Money</h1>
					<p>
						Commited to ensure that your hard-earned money are spent wisely.
					</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={free} alt='' />
					<h1>Stress Free Refund/Return Policy</h1>
					<p>
						With proper validation your return and refund will be as smooth as
						your shopping experience with us.
					</p>
				</div>
				<div className='main__body__right__why__shodaimama__single'>
					<img src={query} alt='' />
					<h1>Prompt Query Resolve</h1>
					<p>
						Not just answering your calls, rather a substantial solution to all
						your queries.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyShodaimama;
