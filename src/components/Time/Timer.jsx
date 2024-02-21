import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../Header/Header.jsx";

function Timer() {
  // let time = new Date().toLocaleTimeString();
  // const [count, setCount] = useState(0);
  const [countedTime, setCountedTime] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const count = useRef(0);

  const [counting, setCounting] = useState(false);
  const startTimeRef = useRef(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const internalIDRef = useRef(null); 

  //====================EFFECTS==========================

  //If component re-renders, it will count each time + 1
  useEffect(() => {
    // Code here will run after *every* render
    count.current = count.current + 1
  })

  //THIS EFFECT WOULD ONLY BE IN ACTION ON MOUNT AND WHEN [count] variable changes
  // useEffect(() => {
  //   // let timer = 
  //   setTimeout(() => {
  //     //updater function
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [count]);


  //TIMER EFFECT COUNTS TIME ON THE PAGE
  //this useEffect runs every 1000ms = 1s and counts time in seconds
  useEffect(() => {
    let timer =
    setTimeout(() => {
      setCountedTime((countedTime) => countedTime + 1);
    }, 1000);
    //Clean up the timer at the end of the useEffect hook
    return () => clearTimeout(timer)
  });
  
  //EFFECT FOR WINDOW RESIZE INFO
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


  //EVERY STATE CHANGE OF VARIABLE COUNTING, THIS CODE RUNS
  useEffect(()=>{
    if(counting){
      //setInterval(callback,timeout in miliseconds)
      //tracked the interval via another useRef variable
      internalIDRef.current = setInterval(()=> {
        setElapsedTime(Date.now() - startTimeRef.current)
      },10)
    }
    //Cleanup function
    return () => {
      clearInterval(internalIDRef.current)
    }
  },[counting])

  //====================HANDLERS==========================

  //RENDER UPDATE HANDLER
  function handleWindowResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  //FUNCTIONS FOR STOPWATCH
  function startStop(){
    if(counting){
      setCounting(false)
      //console.info(`Counting : ${counting}, Currenttime : ${formatTimeEU(startTimeRef.current)}, Elapsed time :${formatTimeEU(elapsedTime)}`)
    }else{
      setCounting(true)
      startTimeRef.current = Date.now() - elapsedTime;
      //console.info(` Currenttime : ${formatTimeEU(startTimeRef.current)}, Elapsed time :${formatTimeEU(elapsedTime)}`)
    }
  }

  //USED TO RESET TIMER
  function reset(){
      setElapsedTime(0);
      setCounting(false)
  }


  //To display time without useState. The time we pass will be in Miliseconds
  function formatTimeEU(params){
    let hours = Math.floor(params / (1000 * 60 * 60) );
    let minutes = Math.floor(params / (1000 * 60) % 60);
    let seconds = Math.floor(params / (1000) % 60);
    let miliseconds = Math.floor((params % 1000) / 10 );
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds} : ${miliseconds}` 
  }

//==================================RENDERING===============================================
  //READING CONTEXT FROM CONTEXT PROVIDER
  const isLogged = useContext(UserContext);
  if(isLogged){
    
    return (
      <>
        <div style={{ display: "inline" }}>
          Rendered: {count.current} times
        </div>
        <div style={{ display: "inline", marginLeft: "1em" }}>
          Time on page: {countedTime}s
        </div>
        <div onClick={startStop} onDoubleClick={reset}>STOPWATCH Start/Stop, doubleclick to reset: {formatTimeEU(elapsedTime)}</div>
        <div>Window Width:{width}px Height:{height}px</div>
      </>
    );

  }
  return <></>

}
export default Timer;
