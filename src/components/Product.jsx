import React from "react";
import "../styles/product.css";
import delivery from "../images/fast-delivery.png";
import card from "../images/credit-card.png";
import money from "../images/money.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeById } from "../actions/cartActions";

const Product = ({ product }) => {
	const dispatch = useDispatch();
	function truncateString(str, num) {
		if (str.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	}

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	const cartItems = useSelector((state) => state.cart);
	const { cartItems: cart } = cartItems;

	const itemsCheck = cart.filter((item) => item.id === product.id);
	// console.log(cart);

	const handleRemoveByID = (id) => {
		dispatch(removeById(id));
	};

	const handleAddoneToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<div className='product'>
			<div className='product__tags'>Fresh</div>
			<img src={product.image} alt='' />
			<h3>{truncateString(product.title, 15)}</h3>
			<small>each</small>
			<p>${product.price}</p>
			<a href='/'>details</a>
			<div className='product__details'>
				<div className='product__details_left'>
					<img src={delivery} alt='' />
					<p>Next morning</p>
				</div>
				<div className='product__details_right'>
					<img src={card} alt='' />
					<img src={money} alt='' />
				</div>
			</div>

			{itemsCheck[0]?.id === product.id && itemsCheck[0]?.qty > 0 ? (
				<div className='products__buttons'>
					<button onClick={() => handleRemoveByID(product.id)}>-</button>
					<p onClick={() => handleAddToCart(product)}>
						{itemsCheck[0]?.qty} in cart
					</p>
					<button onClick={() => handleAddToCart(product)}>+</button>
				</div>
			) : (
				<button onClick={() => handleAddToCart(product)}>Add to cart</button>
			)}
		</div>
	);
};

export default Product;
