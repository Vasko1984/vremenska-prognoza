import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { Weather_api_url, Key } from "./data/Data";
import { useState } from "react";
import ForecastDay from "./components/ForecastDay";

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${Weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${Key}&units=metric`
    );

    const currentForecastFetch = fetch(
      `${Weather_api_url}/forecast?lat=${lat}&lon=${lon}&appid=${Key}&units=metric`
    );
    Promise.all([currentWeatherFetch, currentForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const weatherForecast = await response[1].json();
        console.log("vasko1", response);
        console.log("vasko", weatherResponse, weatherForecast);
        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...weatherForecast });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <ForecastDay data={forecast} />}
    </div>
  );
}

export default App;
