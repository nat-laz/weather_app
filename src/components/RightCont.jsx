import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const RightCont = () => {
  const { inputValue, setInputValue, weatherDetails, getCityCoord, newCity } =
    useContext(AppContext);
  const [nextHours, setNextHours] = useState([]);

  const nextFourHours = (arr) => {
    const ind = arr?.find(
      (el) => el.time === weatherDetails.current_weather?.time
    );
    let resultArr = arr.slice(arr?.indexOf(ind) + 1, arr?.indexOf(ind) + 5);
    setNextHours(resultArr);
  };

  const hourForecast = (dataObj) => {
    const forecastArr = [];
    dataObj?.apparent_temperature.slice(0, 24).forEach((el, i) =>
      forecastArr.push({
        id: i,
        feelsLike: el,
        pressure: dataObj.pressure_msl[i],
        humidity: dataObj.relativehumidity_2m[i],
        temperature: dataObj.temperature_2m[i],
        time: dataObj.time[i],
        weathercode: dataObj.weathercode[i],
      })
    );
    nextFourHours(forecastArr);
  };

  useEffect(() => {
    hourForecast(weatherDetails.hourly);
  }, [weatherDetails]);

  return (
    <div className="right">
      <div className="info_box">
        <input
          type="text"
          placeholder="Enter a city"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>
          Feels like{" "}
          <span>
            {nextHours.length > 1 && Math.ceil(nextHours[0].feelsLike)}°
          </span>{" "}
        </p>
        <p>
          Humidity <span>{nextHours.length > 1 && nextHours[0].humidity}%</span>
        </p>
        <p>
          Pressure{" "}
          <span>{nextHours.length > 1 && nextHours[0].pressure} hPa</span>
        </p>
        <p>
          Wind{" "}
          <span>
            {weatherDetails.current_weather &&
              Math.round(weatherDetails.current_weather.windspeed)}{" "}
            km/h
          </span>
        </p>
        <p id="next-hours">Next Hours</p>
        {nextHours &&
          nextHours.map((el) => (
            <p key={el.id}>
              {el.time.split("T")[1]} <span>{el.temperature.toFixed()}°</span>
            </p>
          ))}
      </div>
      <div className="search-btn">
        <MdSearch
          onClick={() => {
            getCityCoord(inputValue);
            newCity();
            setInputValue("");
          }}
        />
      </div>
    </div>
  );
};

export default RightCont;
