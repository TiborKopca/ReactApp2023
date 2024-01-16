// import propTypes from 'prop-types'
import { useState } from "react";
import styles from "./Time.module.css";

function Clock() {
  let time = new Date().toLocaleTimeString();
  //Initial time
  const [currentTime, setCurrentTime] = useState(time);

  //UPDATER CALLED BY setInterval
  const UpdateTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
  };

  //To display day of the week
  const todayWeekDay = new Date();
  //Formater of the day of the week
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  //To display time without useState
  const timeEU = new Date();
  function formatTimeEU(timex) {
    return new Intl.DateTimeFormat("es-ES", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(timex);
  }

  //setInterval(function, miliseconds)
  setInterval(UpdateTime);

  return (
    <div className={styles.clockWrapper}>
      {currentTime} : {formatDate(todayWeekDay)} : {formatTimeEU(timeEU)}
    </div>
  );
}
export default Clock;

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }
