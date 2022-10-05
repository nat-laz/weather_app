import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import mainlyClear from "../assests/icon/mainly-clear.png";
import partlyCloudly from "../assests/icon/partly-cloudly.png";
import overcast from "../assests/icon/overcast.png";
import fog from "../assests/icon/fog.png";
import drizzle from "../assests/icon/drizzle.png";
import freezingDrizzle from "../assests/icon/freezing-drizzle.png";
import rain from "../assests/icon/rain.png";
import freezingRain from "../assests/icon/freezing-rain.png";
import snow from "../assests/icon/snow.png";
import snowGrains from "../assests/icon/snow-grains.png";
import thunderstorm from "../assests/icon/thunderstorm.png";

const LeftCont = () => {
  const { weatherDetails, city } = useContext(AppContext);
  const [nextSevenDays, setNextSevenDays] = useState([]);
  // console.log(weatherDetails);

  const iconData = [
    { id: 0, icon: mainlyClear },
    { id: 1, icon: mainlyClear },
    { id: 2, icon: partlyCloudly },
    { id: 3, icon: overcast },
    { id: 45, icon: fog },
    { id: 48, icon: fog },
    { id: 51, icon: drizzle },
    { id: 53, icon: drizzle },
    { id: 55, icon: drizzle },
    { id: 56, icon: freezingDrizzle },
    { id: 57, icon: freezingDrizzle },
    { id: 61, icon: rain },
    { id: 63, icon: rain },
    { id: 65, icon: rain },
    { id: 66, icon: freezingRain },
    { id: 67, icon: freezingRain },
    { id: 71, icon: snow },
    { id: 73, icon: snow },
    { id: 75, icon: snow },
    { id: 77, icon: snowGrains },
    { id: 80, icon: rain },
    { id: 81, icon: rain },
    { id: 82, icon: rain },
    { id: 85, icon: snow },
    { id: 86, icon: snow },
    { id: 95, icon: thunderstorm },
    { id: 96, icon: thunderstorm },
    { id: 99, icon: thunderstorm },
  ];

const weatherIcon = weatherDetails.current_weather &&  iconData.find(icon=> icon.id === weatherDetails.current_weather.weathercode)
// console.log(weatherIcon.icon)

  const nextDaysTemp = () => {
    const arr = [];
    weatherDetails?.daily?.time.forEach((el, i) =>
      arr.push({
        date: el,
        temp: weatherDetails?.daily?.temperature_2m_max[i],
        id: i,
      })
    );
    setNextSevenDays(arr);
  };
  useEffect(() => {
    nextDaysTemp();
  }, [weatherDetails]);

  //============== ISO string to a Date ==========
  const isoCurentDate = weatherDetails.current_weather?.time;
  const curentDate = new Date(isoCurentDate);

  return (
    <div className="left">
      <h3>Weather App</h3>
      <div className="info_left">
        <div className="city_data">
          <div id="temp">
            {weatherDetails.current_weather &&
              Math.floor(weatherDetails.current_weather.temperature)}
            °
          </div>
          <div>
            <div className="city_icon">
              <h2 id="city_name">
                {city?.charAt(0).toUpperCase() + city?.slice(1)}
              </h2>
              <div className="wether-icon">
                <img src={ weatherDetails.current_weather && weatherIcon.icon} alt="" />
              </div>
            </div>

            <div className="actual_date_clouds">
              <h5>
                {weatherDetails.current_weather &&
                  curentDate.toString().slice(0, 15)}
              </h5>
            </div>
          </div>
        </div>
        <div className="next_days_wrapper">
          {nextSevenDays.map((el) => (
            <div key={el.id} className="day-box border">
              <p>{el.date.split("-").slice(1).join("/")}</p>
              <span id="day-box_temp">{el.temp.toFixed()}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCont;
