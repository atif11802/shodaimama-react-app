import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";
import NumberFormat from "react-number-format";
import { addToCart, removeById, removeFromCart } from "../actions/cartActions";

const Cart = () => {
	const dispatch = useDispatch();
	const [isChecked, setIsChecked] = useState(true);

	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};
	const cartItems = useSelector((state) => state.cart);
	const { cartItems: cart } = cartItems;

	const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);

	function truncateString(str, num) {
		if (str.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	}

	const handleRemoveFromCart = (id) => {
		dispatch(removeFromCart(id));
	};

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	const handleRemoveByID = (id) => {
		dispatch(removeById(id));
	};

	const navigate = useNavigate();

	const moveToHome = () => {
		navigate("/main");
	};
	const totalqty = cart.reduce((a, c) => a + c.qty, 0);

	return (
		<div className='cart'>
			{cart.length === 0 ? (
				<div className='cart__empty'>
					<div className='cart__empty__container'>
						<i className='far fa-shopping-cart'></i>
						<h3>No Products Found</h3>
						<Link to='/main'>Start Shopping Now</Link>
					</div>
				</div>
			) : (
				<div className='cart__details'>
					<div className='cart__details__fresh'>
						<div className='cart__details__fresh__left'>
							<input
								type='checkbox'
								id='topping'
								name='topping'
								value='Paneer'
								checked={isChecked}
								onChange={handleOnChange}
							/>
							<p>Fresh</p>
						</div>
						<div className='cart__details__fresh__middle'>
							<p>Products ({cart.length})</p>
						</div>
						<div className='cart__details__fresh__right'>
							<p>
								subtotal :{" "}
								<NumberFormat
									value={itemsPrice.toFixed(2)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"৳"}
								/>
							</p>
						</div>
					</div>
					<div className='cart__details__items'>
						<div className='cart__details__items__left'>
							<p>
								<strong> Delivery Time </strong>: Everyday Delivery 08:00 AM -
								11:00 AM.
							</p>
							<p>
								<strong> Delivery Charges </strong>: ৳ 0
							</p>
							<p>
								{" "}
								<strong>Items</strong> : {cart.length}
							</p>
							<p>
								<strong>Total</strong> :{" "}
								<NumberFormat
									value={itemsPrice.toFixed(2)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"৳"}
								/>
							</p>
							<p>Cash & Digital Payment Accepted.</p>
						</div>
						<div className='cart__details__items__right_items' id='style-2'>
							{cart.map((item) => (
								<div className='cart__details__items__right' key={item.id}>
									<div className='cart__details__items__right__buttons'>
										<button onClick={() => handleAddToCart(item)}>+</button>
										{item.qty}
										<button onClick={() => handleRemoveByID(item.id)}>-</button>
									</div>
									<img src={item.image} alt='' />
									<div className='cart__details__items__right__titles'>
										<p>{truncateString(item.title, 10)}</p>
										<p>
											{" "}
											<span>৳</span> {item.price} / each
										</p>
									</div>
									<p>
										<span>৳</span> {item.qty * item.price}
									</p>
									<button onClick={() => handleRemoveFromCart(item.id)}>
										x
									</button>
								</div>
							))}
						</div>
					</div>
					<div className='cart__details__checkout'>
						<div className='cart__details__checkout__left'>
							<i className='far fa-shopping-cart'></i>
							<p>{totalqty} Items</p>
						</div>
						<div className='cart__details__checkout__middle'>
							<strong>Total : {isChecked ? itemsPrice.toFixed(2) : 0}</strong>
						</div>
						<div className='cart__details__checkout__right'>
							{isChecked && <Link to='/main'>PlaceOrder</Link>}

							<button onClick={moveToHome}> x</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
