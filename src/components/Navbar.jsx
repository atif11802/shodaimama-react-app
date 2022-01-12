import React from "react";
import "../styles/navbar.css";
import Logo from "../images/logo.png";
import { BiCart, BiSearch, BiDollar } from "react-icons/bi";
import { FaListUl, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Link,
	Outlet,
	useParams,
	NavLink,
	useNavigate,
	useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cartItems = useSelector((state) => state.cart);
	const { cartItems: cart } = cartItems;

	const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

	const totalqty = cart.reduce((a, c) => a + c.qty, 0);
	console.log(totalqty);

	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__container__logo'>
					<Link to='/main'>
						<img src={Logo} alt='Shodaimama-logo' />
					</Link>
				</div>
				<div className='navbar__container__rightside'>
					<div className='navbar__container__rightside__search'>
						<BiSearch color='#006A4E' size={40} />
					</div>
					<div className='navbar__container__rightside__locationMark'>
						<FaMapMarkerAlt color='#006A4E' size={20} />
						<p>select Delivery Location</p>
					</div>
					<div className='navbar__container__rightside__signin'>
						<FaUserAlt color='#006A4E' size={20} />
						<p>Sign In</p>
					</div>
					<div className='navbar__container__rightside__cart'>
						<BiCart color='#006A4E' size={40} />
					</div>
					<div className='navbar__container__rightside__arrow'></div>
					<div className='arrowed'>
						<div className='arrow-4'></div>
						<div className='arrow-4'></div>
						<div className='arrow-4'></div>
					</div>
					<Link to='/cart'>
						<div className='navbar__container__rightside__cartDetails'>
							<div className='navbar__container__rightside__cartDetails__cart'>
								<FaListUl color='white' size={10} />
								<p>{totalqty}</p>
							</div>
							<hr />
							<div className='navbar__container__rightside__cartDetails__cart'>
								<BiDollar color='white' size={20} />
								<p>{itemsPrice.toFixed(2)}</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
