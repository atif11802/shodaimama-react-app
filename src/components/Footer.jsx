import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";
import cards from "../images/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca (1).png";

const Footer = () => {
	return (
		<div className='main__body__right__footer'>
			<div className='main__body__right__footer__contacts'>
				<div className='main__body__right__footer__main__contacts'>
					<img src={logo} alt='logo' />
					<div className='main__body__right__footer__main__contacts__socialmedia'>
						<a href='www.facebook.com'>
							<i className='fab fa-facebook-square'></i>
						</a>
						<a href='www.linkedin.com'>
							<i className='fab fa-linkedin'></i>
						</a>
						<a href='www.instagram.com'>
							<i className='fab fa-instagram'></i>
						</a>
						<a href='www.youtube.com'>
							<i className='fab fa-youtube'></i>
						</a>
					</div>
					<a href='www.youtube.com'>SHODAIMAMA APP</a>
					<p>
						<i>Shodaimama &copy; 2021</i>
					</p>
				</div>
				<div className='main__body__right__footer__main__usefulLinks'>
					<ul>
						<li>
							<h2>
								<strong>Useful Links</strong>
							</h2>
						</li>
						<li>About Shodaimama</li>
						<li>FAQ</li>
						<li>Contact Us</li>
						<li>Career</li>
					</ul>
				</div>
				<div className='main__body__right__footer__main__usefulLinks'>
					<ul>
						<li>
							<h2>
								<strong>Helpful Links</strong>
							</h2>
						</li>
						<li>Why Choose Shodaimama</li>
						<li>Privacy Policy</li>
						<li>Terms & Conditions</li>
						<li>Delivery, Returns & Refunds</li>
					</ul>
				</div>
				<div className='main__body__right__footer__main__usefulLinks'>
					<ul>
						<li>
							<h2>
								<strong>Contact Us</strong>
							</h2>
						</li>
						<li>
							<i className='fas fa-map-marker-alt'></i>
							House 18, Road 1, Block B, Banani, Dhaka-1213
						</li>
						<li>
							<i className='far fa-envelope'></i>
							info@shodaimama.com
						</li>
						<li>
							<i className='fas fa-headset'></i>Support@shodaimama.com
						</li>
						<li>
							<button>
								<i className='fas fa-phone'></i>+8801-716-988-988
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className='main__body__right__footer__payments'>
				<hr />
				<img src={cards} alt='' />
			</div>
		</div>
	);
};

export default Footer;
