import React from "react";
import "./CityTemperature.css";

export default function CityTemperature({ weatherData }) {
	return (
		<>
			<div className="container2">
				<div className="form-wrapper2">
					<label className="title2">WEATHER ONLINE</label>
					<div className="sub-title-city-wrapper">
						<span className="sub-title2">Current temperature of </span>
						<span className="city-name">{weatherData.name}:</span>
					</div>
					<div className="temperature-wrapper">
						<span className="temperature">
							{weatherData.main?.temp ? Math.round(weatherData.main.temp) : ""}
							°C
						</span>

						{weatherData.main ? (
							weatherData.main?.temp > 15 ? (
								<span className="feel-warm">It is warm !</span>
							) : (
								<span className="feel-cold">It is cold !</span>
							)
						) : (
							<span className="retry">Please retry</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
