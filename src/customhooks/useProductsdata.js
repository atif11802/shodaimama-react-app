import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchdata = async () => {
	return await axios.get("https://fakestoreapi.com/products");
};

const useProductsdata = () => {
	return useQuery("products", fetchdata);
};

export default useProductsdata;
