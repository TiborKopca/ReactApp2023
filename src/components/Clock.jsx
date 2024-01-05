// import propTypes from 'prop-types'
import { useState } from "react";

const Clock = () =>{
    let time = new Date().toLocaleTimeString()
    // console.log(time)
    //WITHOUT STATE THE TIME WILL BE STATIC
    const [currentTime, setCurrentTime] = useState(time);
    const UpdateTime = ()=> {
        let currentTime = new Date().toLocaleTimeString()
        setCurrentTime(currentTime) 
    }
    setInterval(UpdateTime)
    return <div style={{textAlign:"left"}}>{currentTime}</div>
}
export default Clock

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }