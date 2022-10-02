import { useEffect } from "react";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [weatherDetails, setWeatherDetails] = useState({});
  const [inputValue, setInputValue] = useState("Berlin");

  const key = process.env.REACT_APP_API_KEY_COORD;

  const getCityCoord = async () => {
    console.log("1-Get city coordinates");
    try {
      const result = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${key}`
      );
      const resJSON = await result.json();
      console.log(resJSON)
      getCurrentWeatherInfo(resJSON.results[0].geometry);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentWeatherInfo = ({ lat, lng }) => {
    // console.log("2-Get weather details");
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat?.toFixed(
        2
      )}&longitude=${lng?.toFixed(
        2
      )}&hourly=weathercode,pressure_msl,temperature_2m,relativehumidity_2m,apparent_temperature&current_weather=true&daily=temperature_2m_max&timezone=auto`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWeatherDetails(result);
        // hourForecast(result.hourly);
        // nextFourHours();
      });
  };
  useEffect(() => {
    console.log("UseEffect")
  getCityCoord()
  }, [inputValue, weatherDetails])
  console.log(weatherDetails);

  return (
    <AppContext.Provider
      value={{ getCityCoord, weatherDetails, setInputValue, inputValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
