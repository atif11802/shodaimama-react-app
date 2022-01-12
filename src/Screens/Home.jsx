import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
	let navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/main");
		}
	}, []);

	return (
		<div className='home'>
			<Navbar />
			<div className='home__body'>
				<Sidebar />

				<Outlet />
			</div>
		</div>
	);
};

export default Home;
