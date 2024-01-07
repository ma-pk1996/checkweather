import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";


export function NavigationBar() {
    return (
        <>
            <div className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink></li>
                        <li><NavLink to="auth" className={({ isActive }) => isActive ? classes.active : undefined}>Signup</NavLink></li>
                        <li><NavLink to="fav" className={({ isActive }) => isActive ? classes.active : undefined}>My Favorite Places</NavLink></li>
                        <div className={classes.icon}>
                            <p>theme</p>
                        </div>
                        <h2 className={classes.name}>My Weather</h2>
                    </ul>
                </nav>
            </div>
            <div className={classes.line1}></div>
        </>
    )
}