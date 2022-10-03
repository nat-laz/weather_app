import { useContext } from "react";
import { useState } from "react";

import LeftCont from "./components/LeftCont";
import RightCont from "./components/RightCont";
import { AppContext } from "./context/AppContext";

function App() {
  const { weatherDetails } = useContext(AppContext);
  const [city, setCity] = useState("Berlin");

  const getWeatherInfo = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="main-container">
      <LeftCont weatherDetails={weatherDetails} city={city} />
      <RightCont getWeatherInfo={getWeatherInfo} />
    </div>
  );
}

export default App;
