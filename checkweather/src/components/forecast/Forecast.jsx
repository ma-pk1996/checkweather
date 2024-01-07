
import classes from "./Forecast.module.css"


export function Forecast() {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p className={classes.name}>Tehran</p>
                <p className={classes.temprature}>Temprature 33 </p>
                <p className={classes.feels}>Feels Like 37</p>
                <p className={classes.windSpeed}>Wind Speed 12km</p>
                <p className={classes.humidity}>Humidity 33</p>
                <p className={classes.tomorrow}>Tomorrow 32</p>
                <button className={classes.save}>+ Save</button>
                <div className={classes.map}>
                </div>
            </div>
            <input className={classes.input} placeholder="Search Wherever You Like"/>
        </div>
    )
}