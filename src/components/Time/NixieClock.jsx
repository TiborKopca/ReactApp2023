// import propTypes from 'prop-types'
import styles from "./Time.module.css";
import { useState } from "react";

function NixieClock() {
  let timeNixie = new Date();
  //Initial time
  const [currentTime, setCurrentTime] = useState(timeNixie);

  //UPDATER CALLED BY setInterval
  const UpdateTime = () => {
    let currentTime = new Date();
    setCurrentTime(currentTime);
  };

  //setInterval(function, miliseconds)
  setInterval(UpdateTime);

  //To display hours
  function formatTimeHours(currentTime) {
    const hours = currentTime.getHours();
    return `${toOneNumerical(hours)}`;
  }
  //To display ten-hours
  function formatTimeDecimalHours(currentTime) {
    const hours = currentTime.getHours();
    return `${toDecimal(hours)}`;
  }
  //To display minutes
  function formatTimeMinutes(currentTime) {
    const minutes = currentTime.getMinutes();
    return `${toOneNumerical(minutes)}`;
  }
  //To display ten-minutes
  function formatTimeDecimalMinutes(currentTime) {
    const minutes = currentTime.getMinutes();
    return `${toDecimal(minutes)}`;
  }
  //To display seconds
  function formatTimeSeconds(currentTime) {
    const seconds = currentTime.getSeconds();
    return `${toOneNumerical(seconds)}`;
  }

  //To display ten-seconds
  function formatTimeDecimalSeconds(currentTime) {
    const seconds = currentTime.getSeconds();
    return `${toDecimal(seconds)}`;
  }

  function toOneNumerical(unitsOfTime) {
    if (unitsOfTime < 10) {
      return unitsOfTime;
    } else if (unitsOfTime >= 10 && unitsOfTime < 20) {
      return unitsOfTime - 10;
    } else if (unitsOfTime >= 20 && unitsOfTime < 30) {
      return unitsOfTime - 20;
    } else if (unitsOfTime >= 30 && unitsOfTime < 40) {
      return unitsOfTime - 30;
    } else if (unitsOfTime >= 40 && unitsOfTime < 50) {
      return unitsOfTime - 40;
    } else if (unitsOfTime >= 50 && unitsOfTime < 60) {
      return unitsOfTime - 50;
    }
  }

  //Sets the number to first decimal
  function toDecimal(unitsOfTime) {
    if (unitsOfTime < 10) {
      return "0";
    } else if (unitsOfTime >= 10 && unitsOfTime < 20) {
      return "1";
    } else if (unitsOfTime >= 20 && unitsOfTime < 30) {
      return "2";
    } else if (unitsOfTime >= 30 && unitsOfTime < 40) {
      return "3";
    } else if (unitsOfTime >= 40 && unitsOfTime < 50) {
      return "4";
    } else if (unitsOfTime < 60) {
      return "5";
    } else {
      return "-";
    }
  }

  const digitActive2 = {
    opacity: 1,
    color: "hsla(23, 79%, 52%, 0.63)",
    // transform: 'scale(0.9)',
    // 'text-shadow' : '0px 0px 8px #e70d0d'
    shadowText: "0px 0px 8px #e70d0d", //its not registering
  };
  const digitNull = {
    display: "none",
  };

  return (
    <>
      <div className={styles.nixieWrapper}>
        <div className={styles.hours}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeDecimalHours(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeDecimalHours(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
        <div className={styles.hours}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeHours(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeHours(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
        <div
          className={[
            styles.separator,
            styles.digitActive,
            styles.digitActive2,
          ].join(" ")}
        >
          :
        </div>
        <div className={styles.minutes}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeDecimalMinutes(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeDecimalMinutes(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
        <div className={styles.minutes}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeMinutes(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeMinutes(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
        <div
          className={[
            styles.separator,
            styles.digitActive,
            styles.digitActive2,
          ].join(" ")}
        >
          :
        </div>
        <div className={styles.seconds}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeDecimalSeconds(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeDecimalSeconds(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
        <div className={styles.seconds}>
          <div className={[styles.digit, styles.digitActive].join(" ")}>
            {formatTimeSeconds(currentTime)}
          </div>
          <div className={[styles.digit]} style={digitActive2}>
            {formatTimeSeconds(currentTime)}
          </div>
          <div className={[styles.digit]}>0</div>
          <div className={[styles.digit]} style={digitNull}>
            0
          </div>
          <div className={[styles.digit]}>1</div>
          <div className={styles.digit} style={digitNull}>
            1
          </div>
          <div className={[styles.digit]}>2</div>
          <div className={[styles.digit]} style={digitNull}>
            2
          </div>
          <div className={styles.digit}>3</div>
          <div className={[styles.digit]} style={digitNull}>
            3
          </div>
          <div className={styles.digit}>4</div>
          <div className={[styles.digit]} style={digitNull}>
            4
          </div>
          <div className={styles.digit}>5</div>
          <div className={[styles.digit]} style={digitNull}>
            5
          </div>
          <div className={styles.digit}>6</div>
          <div className={[styles.digit]} style={digitNull}>
            6
          </div>
          <div className={styles.digit}>7</div>
          <div className={[styles.digit]} style={digitNull}>
            7
          </div>
          <div className={styles.digit}>8</div>
          <div className={[styles.digit]} style={digitNull}>
            8
          </div>
          <div className={styles.digit}>9</div>
          <div className={[styles.digit]} style={digitNull}>
            9
          </div>
        </div>
      </div>
    </>
  );
}
export default NixieClock;

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }
