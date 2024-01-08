import classes from "./Forecast.module.css";
import { useState } from "react";
import { API_KEY } from "../../process.env";
import axios from "axios";
import { MapContainer, TileLayer } from "react-leaflet";
import { processEnv } from "../../process.env"

export function Forecast() {
  const [isSaved, setIsSaved] = useState(false);
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("Tehran");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
  function searchInputHandler(event) {
    setIsSaved(false);
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

  function fetchHandler() {
    setIsSaved(true);
    let city = {};
    if (data && data.main && data.coord) {
      city = {
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        coord: [data.coord.lat, data.coord.lon],
      };
    }
    const url = `${processEnv.REACT_APP_SERVER_URL}cities`
    const response = fetch(url, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
  })
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.name}>{data ? data.name : "Tehran"}</p>
        <p className={classes.status}>
          Mood: {data.weather ? data.weather[0].main : "Cloudy"}
        </p>
        <p className={classes.temprature}>
          Temprature {data.main ? data.main.temp : "23"}
        </p>
        <p className={classes.feels}>
          Feels Like {data.main ? data.main.feels_like : "22"}
        </p>
        <p className={classes.windSpeed}>
          Wind Speed {data.wind ? data.wind.speed : 12}km
        </p>
        <p className={classes.humidity}>
          Humidity {data.main ? data.main.humidity : 32}
        </p>
        <button className={classes.save} onClick={fetchHandler}>
          {isSaved ? 'saved' : '+ save'}
        </button>
        <div className={classes.map}>
          {data.coord && (
            <MapContainer
              style={{ height: "5rem" }}
              center={[data.coord.lat, data.coord.lon]}
              zoom={9}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=m3Uw9viTGOipjGtDWWTu"
              />
            </MapContainer>
          )}
        </div>
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
