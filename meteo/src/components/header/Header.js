import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<div className="header-wrapper">
				<div className="container-headerLogo">
					<a href="https://beetrip.pro/" className="btnLogo">
						<img src="/cropped-Logo-BEETRIP-couleur-3.png" alt="logo icon" />
					</a>
				</div>

				<Link to="/" className="weather-nav">
					<div>Weather online</div>
				</Link>
			</div>
		</header>
	);
}
