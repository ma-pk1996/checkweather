import classes from "./Forecast.module.css";
import { useState } from "react";
import { API_KEY } from "../../process.env";
import axios from "axios";
export function Forecast() {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("Tehran");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  function searchInputHandler(event) {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      setCityName("");
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.name}>{data ? data.name : ""}</p>
        <p className={classes.status}>
          Mood: {data.weather ? data.weather[0].main : ""}
        </p>
        <p className={classes.temprature}>
          Temprature {data.main ? data.main.temp : ""}
        </p>
        <p className={classes.feels}>
          Feels Like {data.main ? data.main.feels_like : ""}
        </p>
        <p className={classes.windSpeed}>
          Wind Speed {data.win ? data.wind.speed : 12}km
        </p>
        <p className={classes.humidity}>
          Humidity {data.main ? data.main.humidity : 32}
        </p>
        <button className={classes.save}>+ Save</button>
        <div className={classes.map}></div>
      </div>
      <input
        value={cityName}
        onKeyPress={searchInputHandler}
        onChange={(event) => setCityName(event.target.value)}
        className={classes.input}
        placeholder="Enter Wherever You Like"
      />
    </div>
  );
}
