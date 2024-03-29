import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<div className="header-wrapper">
				<div className="container-headerLogo">
					<a href="/" className="btnLogo">
						<img src="/logo.png" alt="logo icon" />
					</a>
				</div>

				<Link to="/" className="weather-nav">
					<div>Weather online</div>
				</Link>
			</div>
		</header>
	);
}
