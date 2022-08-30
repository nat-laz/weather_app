import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState({
    feels_like: 21.17,
    icon: "01d",
    pressure: 1002,
    humidity: 55,
    temp: 24,
    min_temp: 27,
    max_temp: 27,
    city: "Berlin",
  });

  console.log(process.env.REACT_APP_API_KEY)

const getWeatherInfo = ()=>{
  fetch(`https://www.meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=${process.env.REACT_APP_API_KEY}
  `)
     .then((response) => response.json())
     .then((result) => console.log(result))
}
useEffect(()=>{getWeatherInfo()},[])
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.cod !== 200) {
  //         alert(result.message);
  //       } else {
  //         console.log(result);
  //         setWeather({
  //           feels_like: result.main.feels_like,
  //           pressure: result.main.pressure,
  //           humidity: result.main.humidity,
  //           temp: result.main.temp,
  //           min_temp: result.main.temp_min,
  //           max_temp: result.main.temp_max,
  //           city: result.name,
  //           wind: result.wind.speed,
  //         });
  //       }
  //     });
  // }, []);



  // const getWeatherInfo = () => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.cod !== 200) {
  //         alert(result.message);
  //       } else {
  //         console.log(result);
  //         setWeather({
  //           feels_like: result.main.feels_like,
  //           pressure: result.main.pressure,
  //           humidity: result.main.humidity,
  //           temp: result.main.temp,
  //           min_temp: result.main.temp_min,
  //           max_temp: result.main.temp_max,
  //           wind: result.wind.speed,
  //           city: result.name,
  //         });
  //       }
  //     });
  // };

  return (
    <>
      <div className="main-container">
        <div className="left">
          <h3>Weather App</h3>
          <div className="info_left">
            <div className="city_data">
              <div id="temp">{Math.floor(weather.temp)}°</div>
              <div>
                <div className="city_icon">
                  <h2 id="city_name">{weather.city}</h2>
                  <div className="wether-icon">icon</div>
                </div>

                <div className="actual_date_clouds">
                  <h5>9:30 - Friday, 27 May '22</h5>
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

        <div className="right">
          <div className="info_box">
            <input
              type="text"
              placeholder="Enter a city"
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
            <p>
              10am <span>30°</span>
            </p>
            <p>
              10am <span>30°</span>
            </p>
            <p>
              10am <span>30°</span>
            </p>
            <p>
              10am <span>30°</span>
            </p>
          </div>
          <div className="search-btn">
            <MdSearch onClick={getWeatherInfo} />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default App;
