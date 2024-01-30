// import propTypes from 'prop-types'
import { useState } from "react";

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
    //for EUROPE format>
      // return new Intl.DateTimeFormat("es-ES", {
      //   hour: "numeric",
      //   minute: "numeric",
      //   second: "numeric",
      // }).format(date);
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  
  //setInterval(function, miliseconds)
  setInterval(UpdateTime);

 
  return (
    <>
      <div >
        {currentTime} : {formatDate(todayWeekDay)}
      </div>

    </>
  );
}
export default Clock;

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }
