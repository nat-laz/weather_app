import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";

const LeftCont = () => {
  const { weatherDetails, city } = useContext(AppContext);
  const [nextSevenDays, setNextSevenDays] = useState([]);

  console.log(weatherDetails);

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
              <div className="wether-icon">icon</div>
            </div>

            <div className="actual_date_clouds">
              <h5>
                {weatherDetails.current_weather &&
                  curentDate.toString().slice(0, 15)}
              </h5>
              <h5>partly cloudy</h5>
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
