import { useState, useEffect } from "react";

function Timer() {
  // let time = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0);
  const [countedTime, setCountedTime] = useState(0);

  //useEffect runs on every render
  useEffect(() => {
    let timer = 
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    //Clean up the timer at the end of the useEffect hook
    return () => clearTimeout(timer)
  }, []);

  //this useEffect runs every 1000ms = 1s and counts time in seconds
  useEffect(() => {
    let timer =
    setTimeout(() => {
      setCountedTime((countedTime) => countedTime + 1);
    }, 1000);
    //Clean up the timer at the end of the useEffect hook
    return () => clearTimeout(timer)
  });
  
  return (
    <>
      <div style={{ display: "inline", marginLeft: "1em" }}>
        Rendered: {count} times
      </div>
      <div style={{ display: "inline", marginLeft: "1em" }}>
        Time on page: {countedTime}s
      </div>
    </>
  );
}
export default Timer;
