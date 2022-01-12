import {
	CART_ADD_ITEM,
	CART_REMOVE_BY_ID,
	CART_REMOVE_ITEM,
	CART_RESET_ITEM,
} from "../constants/cartConstant";
import axios from "axios";

export const addToCart = (product) => async (dispatch, getState) => {
	// const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product,
		},
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// export const addToCart = (product) => {
// 	console.log(product);
// };

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeById = (id) => (dispatch, getState) => {
	// console.log(id);
	dispatch({
		type: CART_REMOVE_BY_ID,
		payload: id,
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const cartReset = () => (dispatch, getState) => {
	console.log("hello");
	dispatch({
		type: CART_RESET_ITEM,
	});
	localStorage.removeItem("cartItems");
};
