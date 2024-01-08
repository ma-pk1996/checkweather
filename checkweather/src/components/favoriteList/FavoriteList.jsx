import classes from "./FavoriteList.module.css";

export function FavoriteList() {
  return (
    <>
      <ul className={classes.list}>
        <li>
          <div className={classes.card}>
            <div className={classes.city}>Tehran, Iran</div>
            <div className={classes.frame2}></div>
            <div className={classes.today}>Today </div>
            <div className={classes.humidity}>Humidity</div>
          </div>
        </li>
      </ul>
    </>
  );
}
