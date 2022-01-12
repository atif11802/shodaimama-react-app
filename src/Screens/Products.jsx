import React from "react";
import "../styles/products.css";
import Product from "../components/Product";
import Loader from "../components/Loader";
import useProductsdata from "../customhooks/useProductsdata";

const Products = () => {
	const { data, isLoading, isError, error } = useProductsdata();
	// console.log(data?.data);

	return (
		<div className='products'>
			{isLoading && <Loader />}
			{isError && <p>Error: {error.message}</p>}
			<div className='products__container'>
				{data?.data?.map((product, i) => (
					<Product key={i} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
