import React from "react";
import cloud_icon from "./Assets/cloud.png";
import clear_icon from "./Assets/clear.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import humidity_icon from "./Assets/humidity.png";
import wind_icon from "./Assets/wind.png";

const WeatherData = ({data}) => {
  return (
    <>
      <div className="weather-image">
        <img
          src={
            data?.weather[0]?.main === "Clouds" || "Mist"
              ? cloud_icon
              : data?.weather[0]?.main === "Haze"
              ? drizzle_icon
              : data?.weather[0].main === "Rain" || "Thunderstorm"
              ? rain_icon
              : clear_icon
          }
          alt=""
        />
      </div>
      <div className="weather-temp">{data?.main?.temp}°c</div>
      <div className="weather-location">{data?.name}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontStyle: "italic",
          color: "#d1d5db",
          fontSize: "30px",
        }}
      >
        {data?.weather[0]?.main}
      </div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{data?.main.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">{data?.wind.speed} Km/h</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
