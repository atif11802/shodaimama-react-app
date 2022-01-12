import React from "react";
import "../styles/categories.css";
import fastfoood from "../images/fast-food.png";
import cooking from "../images/cooking.png";
import meat from "../images/meat.png";
import vegetable from "../images/vegetable.png";
import dairy from "../images/dairy.png";
import canned from "../images/frozen-food.png";
import beverages from "../images/drinks.png";
import play from "../images/playtime.png";
import makeover from "../images/makeover.png";
import kitchen from "../images/kitchen.png";
import stationery from "../images/stationery.png";

const Categries = () => {
	return (
		<div className='main__body__right__category'>
			<h2>Shodaimama Categories</h2>
			<div className='main__body__right__category__container'>
				<div className='main__body__right__categories'>
					<div className='main__body__right__category__single'>
						<img src={fastfoood} alt='food' />
						<p>Breakfast & Snacks</p>
					</div>

					<div className='main__body__right__category__single'>
						<img src={cooking} alt='food' />
						<p>Cooking</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={meat} alt='food' />
						<p>Meat & Fishes</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={vegetable} alt='food' />
						<p>Fruits & Vegetables</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={dairy} alt='food' />
						<p>Dairy</p>
					</div>
				</div>
				<div className='main__body__right__categories'>
					<div className='main__body__right__category__single'>
						<img src={canned} alt='food' />
						<p>Frozen & Canned</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={beverages} alt='food' />
						<p>Beverages</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={play} alt='food' />
						<p>Kids & Care</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={makeover} alt='food' />
						<p>Personal Care</p>
					</div>
					<div className='main__body__right__category__single'>
						<img src={kitchen} alt='food' />
						<p>Home & Kitchen</p>
					</div>
				</div>
				<div className='main__body__right__categories'>
					<div className='main__body__right__category__single'>
						<img src={stationery} alt='food' />
						<p>Stationery</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categries;
