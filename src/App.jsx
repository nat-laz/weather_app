import { useContext } from "react";
import { useEffect, useState } from "react";

import LeftCont from "./components/LeftCont";
import RightCont from "./components/RightCont";
import { AppContext } from "./context/AppContext";

function App() {
  const { getCityCoord, weatherDetails } = useContext(AppContext);
  // const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("Berlin");
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [nextHours, setNextHours] = useState([]);
  // const [weather, setWeather] = useState({
  //   feels_like: 21.17,
  //   icon: "01d",
  //   pressure: 1002,
  //   humidity: 55,
  //   temp: 24,
  //   min_temp: 27,
  //   max_temp: 27,
  //   city: "Berlin",
  //   cnt: 7,
  // });
  // const [weatherDetails, setWeatherDetails] = useState({});

  // const key = process.env.REACT_APP_API_KEY_COORD;

  // const getCityCoord = () => {
  //   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       getCurrentWeatherInfo(result.results[0].geometry);
  //     });
  // };

  // const getCityCoord2 = async () => {
  //   console.log("1-Get city coordinates");
  //   try {
  //     const result = await fetch(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${key}`
  //     );
  //     const resJSON = await result.json();
  //     getCurrentWeatherInfo(resJSON.results[0].geometry);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getCurrentWeatherInfo = ({ lat, lng }) => {
  //   // console.log("2-Get weather details");
  //   fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=${lat?.toFixed(
  //       2
  //     )}&longitude=${lng?.toFixed(
  //       2
  //     )}&hourly=weathercode,pressure_msl,temperature_2m,relativehumidity_2m,apparent_temperature&current_weather=true&daily=temperature_2m_max&timezone=auto`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setWeatherDetails(result);
  //       // hourForecast(result.hourly);
  //       // nextFourHours();
  //     });
  // };

  // console.log(weatherDetails);

  const getWeatherInfo = (newCity) => {
    setCity(newCity);
  };

  // useEffect(() => {
  //   getCityCoord();
  // }, [city]);

  // const hourForecast = (dataObj) => {
  //   // console.log("3-Hour forecast");
  //   const forecastArr = [];
  //   dataObj.apparent_temperature.slice(0, 24).forEach((el, i) =>
  //     forecastArr.push({
  //       id: i,
  //       feelsLike: el,
  //       pressure: dataObj.pressure_msl[i],
  //       humidity: dataObj.relativehumidity_2m[i],
  //       temperature: dataObj.temperature_2m[i],
  //       time: dataObj.time[i],
  //       weathercode: dataObj.weathercode[i],
  //     })
  //   );
  //   setHourlyForecast(forecastArr);
  // };

  // console.log(hourlyForecast);

  // const nextFourHours = () => {
  //   console.log("Next Four Hours");
  //   const ind =
  //     weatherDetails.current_weather &&
  //     hourlyForecast.find(
  //       (el) => el.time === weatherDetails.current_weather?.time
  //     );
  //   let resultArr = hourlyForecast.slice(
  //     hourlyForecast?.indexOf(ind) + 1,
  //     hourlyForecast?.indexOf(ind) + 5
  //   );

  //   // console.log(resultArr);
  //   setNextHours(resultArr);
  //   // console.log(nextHours);
  // };
  // console.log(nextHours);
  console.log(weatherDetails);
  return (
    <div className="main-container">
      <LeftCont weatherDetails={weatherDetails} city={city} />
      <RightCont getWeatherInfo={getWeatherInfo} />
    </div>
  );
}

export default App;
