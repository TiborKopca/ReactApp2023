import { useState, useEffect, useRef } from "react";

function Timer() {
  // let time = new Date().toLocaleTimeString();
  // const [count, setCount] = useState(0);
  const [countedTime, setCountedTime] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1
  })
  // useEffect(() => {
  //   // let timer = 
  //   setTimeout(() => {
  //     //updater function
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [count]);

  //this useEffect runs every 1000ms = 1s and counts time in seconds
  //useEffect(()=>{})             runs on every re-render
  //useEffect(()=>{},[])          runs only on mount, Empty array of dependencies === effect runs only on mount/first render
  //useEffect(()=>{},[value])     runs on mount + when value/dependency changes
  //useEffect(function,[dependencies])
  useEffect(() => {
    let timer =
    setTimeout(() => {
      setCountedTime((countedTime) => countedTime + 1);
    }, 1000);
    //Clean up the timer at the end of the useEffect hook
    return () => clearTimeout(timer)
  });
  
  function handleWindowResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
  // window.addEventListener(event, function)
  window.addEventListener("resize",handleWindowResize)
  console.info('event listener to window fired')

  //Cleanup
  return ()=>{
    window.removeEventListener("resize",handleWindowResize)
    console.info('event listener to window removed')
  }
  },[])

  return (
    <>
      <div style={{ display: "inline", marginLeft: "1em" }}>
        Rendered: {count.current} times
      </div>
      <div style={{ display: "inline", marginLeft: "1em" }}>
        Time on page: {countedTime}s
      </div>
      <div>Window Width:{width}px Height:{height}px</div>
    </>
  );
}
export default Timer;
