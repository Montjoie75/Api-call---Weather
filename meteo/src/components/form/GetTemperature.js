import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GetTemperature.css";

export default function GetTemperature({ cityTemperatureRequest }) {
	const [city, setCity] = useState("");

	return (
		<>
			<form>
				<div className="container">
					<div className="form-wrapper">
						<label className="title">WEATHER ONLINE</label>
						<label className="sub-title">
							What is the current temperature of:
						</label>
						<div className="form-input-wrapper">
							<input
								onChange={(e) => setCity(e.target.value)}
								className="input"
								placeholder="City name..."
							></input>
							<Link to="/temperature" className="button-link">
								<button
									className="button-save"
									value={city}
									onClick={(e) => {
										cityTemperatureRequest(e.target.value, e);
										setCity("");
									}}
								>
									Send
								</button>
							</Link>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
