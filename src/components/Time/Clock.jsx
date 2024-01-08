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
    
    const today = new Date();
    
    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long'}
            ).format(date);
    }

    setInterval(UpdateTime)

    return <div style={{display:"inline",textAlign:"left"}}>{formatDate(today)}:{currentTime}</div>
}
export default Clock

//PROPS VALIDATION
// Clock.propTypes = {
//     time: propTypes.func
// }