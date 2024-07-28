import { useState } from "react";
import "./App.css";
import searchIcon from "./assets/search.svg";
import windIcon from "./assets/wind.svg";
import humidityIcon from "./assets/humidity.svg";
import weatherIcon from "./assets/weather.svg";
import api from "./api.jsx";

const { apiURL, apiKey } = api;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);

      let data = await response.json();
      setData(data);
      setInputValue("");
      console.log(data);
    } catch (error) {
      console.error("Error de red: ", error);
      alert("Hubo un problema al acceder a la red.");
    } finally {
      setLoading(false);
    }
  };

  const checkIsEmpty = () => {
    if (inputValue == "") {
      alert("Ingrese el nombre de la ciudad");
    } else {
      checkWeatherData(inputValue);
    }
  };

  return (
    <div>
      <div className="app">
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Ingrese el nombre de la ciudad"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                checkIsEmpty();
              }
            }}
          />
          <button className="search__btn" onClick={checkIsEmpty}>
            <img src={searchIcon} className="search__icon" />
          </button>
        </div>
        <div className="weather">
          <img src={weatherIcon} className="weather__icon" />
          {loading && <p>Cargando...</p>}
          {error && <p>Error: {error}</p>}
          {data && !loading && (
            <>
              <h1 className="temperature">{Math.round(data.main.temp)} °C</h1>
              <h2 className="city">{data.name}</h2>
              <strong className="country">{data.sys.country}</strong>
            </>
          )}
        </div>
        <div className="feature__container">
          <div className="feature">
            <img src={humidityIcon} className="feature__icon" />
            <div className="text">
              {loading && <p>Cargando...</p>}
              {error && <p>Error: {error}</p>}
              {data && !loading && (
                <h3 className="humidity">{data.main.humidity}%</h3>
              )}
              <p>Humidity</p>
            </div>
          </div>
          <div className="feature">
            <img src={windIcon} className="feature__icon" />
            <div className="text">
              {loading && <p>Cargando...</p>}
              {error && <p>Error: {error}</p>}
              {data && !loading && (
                <h3 className="wind">{data.wind.speed} km/h</h3>
              )}
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
