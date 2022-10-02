import React,{useState, useEffect} from 'react'
import { useContext } from 'react';
import { MdSearch } from "react-icons/md";
import { AppContext } from '../context/AppContext';

const RightCont = ({getWeatherInfo }) => {
    // const [inputValue, setInputValue] = useState("");
    const {inputValue, setInputValue, weatherDetails} = useContext(AppContext)
    const [nextHours, setNextHours] = useState([]);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [weather, setWeather] = useState({
        feels_like: 21.17,
        icon: "01d",
        pressure: 1002,
        humidity: 55,
        temp: 24,
        min_temp: 27,
        max_temp: 27,
        city: "Berlin",
        cnt: 7,
      });
// wheatherDetails.hourly

      const hourForecast = (dataObj) => {
        // console.log("3-Hour forecast");
        console.log(dataObj)
        const forecastArr = [];
        dataObj.apparent_temperature.slice(0, 24).forEach((el, i) =>
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
        setHourlyForecast(forecastArr);
      };

      const nextFourHours = () => {
        console.log("Next Four Hours");
        const ind =
          weatherDetails.current_weather &&
          hourlyForecast.find(
            (el) => el.time === weatherDetails.current_weather?.time
          );
        let resultArr = hourlyForecast.slice(
          hourlyForecast?.indexOf(ind) + 1,
          hourlyForecast?.indexOf(ind) + 5
        );
    
        // console.log(resultArr);
        setNextHours(resultArr);
        // console.log(nextHours);
      };
    //   if(weatherDetails != undefined){
    //     console.log("If statement")
    //     hourForecast(weatherDetails.hourly)
    //     nextFourHours()
    // }
    useEffect(()=>{
        console.log(`Weather details in RightCont`)
        console.log(weatherDetails)
        hourForecast(weatherDetails.hourly)
        nextFourHours()
    },[weatherDetails])

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
        Feels like <span>{Math.ceil(weather.feels_like)}°</span>{" "}
      </p>
      <p>
        Humidity <span>{weather.humidity}%</span>
      </p>
      <p>
        Pressure <span>{weather.pressure}</span>
      </p>
      <p>
        Wind <span>{Math.round(weather.wind)}km/h</span>
      </p>
      <p id="next-hours">Next Hours</p>
      {nextHours &&
        nextHours.map((el) => (
          <p key={el.id}>
            {el.time.split("T")[1]}{" "}
            <span>{el.temperature.toFixed()}°</span>
          </p>
        ))}
    </div>
    <div className="search-btn">
      <MdSearch onClick={()=>{getWeatherInfo(inputValue);setInputValue("")}} />
    </div>
  </div>
  )
}

export default RightCont