import {
	CART_ADD_ITEM,
	CART_REMOVE_BY_ID,
	CART_REMOVE_ITEM,
	CART_RESET_ITEM,
} from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;

			const existItem = state.cartItems.find((x) => x.id === item.product.id);

			if (existItem) {
				return {
					...state,

					cartItems: state.cartItems.map((x) =>
						x.id === item.product.id
							? {
									...existItem,
									qty: existItem.qty + 1,
							  }
							: x
					),
				};
			} else {
				return {
					...state,

					cartItems: [...state.cartItems, { ...item.product, qty: 1 }],
				};
			}

		case CART_REMOVE_BY_ID:
			let itemId = action.payload;

			const exist = state.cartItems.find((x) => x.id === itemId);

			if (exist.qty === 1) {
				return {
					...state,

					cartItems: state.cartItems.filter((x) => x.id !== action.payload),
				};
			}
			if (exist) {
				return {
					...state,

					cartItems: state.cartItems.map((x) =>
						x.id === itemId
							? {
									...exist,
									qty: exist.qty - 1,
							  }
							: x
					),
				};
			} else {
				return {
					...state,

					cartItems: state.cartItems.filter((x) => x.id !== action.payload),
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.id !== action.payload),
			};

		case CART_RESET_ITEM:
			return {
				cartItems: [],
			};

		default:
			return state;
	}
};
