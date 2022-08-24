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

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod !== 200) {
          alert(result.message);
        } else {
          console.log(result);
          setWeather({
            feels_like: result.main.feels_like,
            pressure: result.main.pressure,
            humidity: result.main.humidity,
            temp: result.main.temp,
            min_temp: result.main.temp_min,
            max_temp: result.main.temp_max,
            city: result.name,
            wind: result.wind.speed,
          });
        }
      });
  }, []);

  const getWeatherInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.cod !== 200) {
          alert(result.message);
        } else {
          console.log(result);
          setWeather({
            feels_like: result.main.feels_like,
            pressure: result.main.pressure,
            humidity: result.main.humidity,
            temp: result.main.temp,
            min_temp: result.main.temp_min,
            max_temp: result.main.temp_max,
            wind: result.wind.speed,
          });
        }
      });
  };

  return (
    <>
      <div className="main-container">
        <div className="left">
          <h3>Weather App</h3>
          <div className="info_left">
            <div className="city_data">
              <div id="h1">{Math.floor(weather.temp)}°</div>
              <h2>{weather.city}</h2>
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
          </div>
          <div className="search-btn">
            <MdSearch onClick={getWeatherInfo} />
          </div>
        </div>
      </div>
      {/* <div ><img className="img-box"src={image} alt="" /></div>
      <div className="card">
        <h1>Weather App</h1>
        <div>
          <input type="text" onChange={(e) => setInputValue(e.target.value)} />
          <button >get weather data</button>
        </div>
        

      <div className="weather-container">
          <div className="left">
            
           
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt=""
            />
          </div>
          <div className="right">
           
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/d3/b9/76/d3b97619-f61d-1d6d-7bea-81fbe12fc8ea/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
              width="150"
              alt=""
            />
            
           
            <h2>Min Temp: {weather.min_temp}</h2>
            <h2>Max Temp: {weather.max_temp}</h2>
          </div>
        </div>
        </div> */}
    </>
  );
}

export default App;
