import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
	return (
		<div className='sidebar scrollbar' id='style-2'>
			<div className='sidebar__container'>
				<ul>
					<li>
						<i className='fas fa-home'></i>
						Home
					</li>
					<li>
						<i className='fas fa-seedling'></i>
						Fresh
					</li>
					<li>
						<i className='fas fa-lemon'></i>
						Regular
					</li>
					<li>
						<i className='fas fa-lemon'></i>
						Pre-Order
					</li>
				</ul>
				<p>
					Explore <span className='shodai'>Shodai</span>
					<span className='mama'>Mama</span>
				</p>
				<ul>
					<li>
						<i className='fas fa-hands-wash'></i>
						Hygiene
					</li>
					<li>
						<i className='fas fa-cloud-meatball'></i>
						Breakfast & Fish
					</li>
					<li>
						<i className='fad fa-cauldron'></i>
						Cooking
					</li>
					<li>
						<i className='fal fa-salad'></i>
						Meat & Vegetables
					</li>
					<li>
						<i className='fas fa-cow'></i>
						Dairy
					</li>
					<li>
						<i className='fal fa-wheat'></i>
						Fruits & Vegetables
					</li>
					<li>
						<i className='fal fa-salad'></i>
						Meat & Fish
					</li>
					<li>
						<i className='fal fa-ice-cream'></i>
						Frozen & Canned
					</li>
					<li>
						<i className='fad fa-jug'></i>
						Beverages
					</li>
					<li>
						<i className='fas fa-child'></i>
						Kids & Care
					</li>
					<li>
						<i className='fas fa-person-carry'></i>
						Personal Care
					</li>
					<li>
						<i className='fas fa-igloo'></i>
						Home & Kitchen
					</li>
					<li>
						<i className='fas fa-pencil-ruler'></i>
						Stationary
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
