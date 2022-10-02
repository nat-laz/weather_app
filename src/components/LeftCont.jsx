import React from 'react'

const LeftCont = ({weatherDetails, city}) => {
   //============== ISO string to a Date ==========
   const isoDate = weatherDetails.current_weather?.time;
   const curentDate = new Date(isoDate);

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
              {city.charAt(0).toUpperCase() + city.slice(1)}
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
        <div className="day-box border">may 28</div>
        <div className="day-box border">may 29</div>
        <div className="day-box border">may 30</div>
        <div className="day-box border">may 31</div>
        <div className="day-box border">jun 01</div>
        <div className="day-box border">jun 02</div>
        <div className="day-box">jun 03</div>
      </div>
    </div>
  </div>
  )
}

export default LeftCont