import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CityTemperature from "./components/temperature/CityTemperature";
import GetTemperature from "./components/form/GetTemperature";

function App() {
	const [weatherData, setWeatherData] = useState({});

	const appKey = "";

	const cityTemperatureRequest = async (townName) => {
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${townName}&&units=metric&appid=${appKey}`
		)
			.then((response) => response.json())
			.then((data) => {
				setWeatherData(data);
			});
	};


	return (
		<>
		
			<div
				className={
					weatherData.main
						? weatherData.main.temp > 15
							? "warm"
							: "cold"
						: "home"
				}
			>
				
				<Router>
								<Header />
					<Route
						exact
						path="/"
						render={() => {
							return (
								<GetTemperature
									
									weatherData={weatherData}
									cityTemperatureRequest={cityTemperatureRequest}
								/>
							);
						}}
					/>
					
					<Route
					
						exact path="/temperature"
						render={() => (
							<CityTemperature weatherData={weatherData} />
						)}
					/>
				
				</Router>
				
			
			</div>
			
		</>
	);
}

export default App;
