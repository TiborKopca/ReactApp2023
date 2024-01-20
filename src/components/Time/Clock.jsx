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


  const digitActive2 = {
    opacity: 1,
    color: 'hsla(23, 79%, 52%, 0.63)',
    // transform: 'scale(0.9)',
    // 'text-shadow' : '0px 0px 8px #e70d0d'
    shadowText: '0px 0px 8px #e70d0d', //its not registering
  }
  const digitNull = {
    display: 'none'
  }

  return (
    <>
      <div className={styles.clockWrapper}>
        {currentTime} : {formatDate(todayWeekDay)}
      </div>
      <div className={[styles.clockWrapper, styles.nixie].join(" ")}>
        {formatTimeEU(timeEU)}
      </div>
      <div className={styles.nixieWrapper}>
        <div className={styles.digit1}>
          <div className={[styles.digit]}>0</div>
          <div id="digit0" className={[styles.digit]} style={digitNull}>0</div>
          <div className={[styles.digit]}>1</div>
          <div id="digit1" className={styles.digit} style={digitNull}>1</div>
          <div className={[styles.digit, styles.digitActive].join(" ")}>2</div>
          <div className={[styles.digit]} style={digitActive2}>2</div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>3</div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>4</div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>5</div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>6</div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>7</div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>8</div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>9</div>
        </div>
        <div className={styles.digit2}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>0</div>
          <div className={styles.digit} style={digitActive2}>0</div>
          <div className={styles.digit}>1</div>
          <div className={styles.digit}>2</div>
          <div className={styles.digit}>3</div>
          <div className={styles.digit}>4</div>
          <div className={styles.digit}>5</div>
          <div className={styles.digit}>6</div>
          <div className={styles.digit}>7</div>
          <div className={styles.digit}>8</div>
          <div className={styles.digit}>9</div>
        </div>
      </div>
  
    </>
  );
}
export default Clock;

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }
