import { useState } from "react";

function HeaderColorPicker(){
    const [color, setColor] = useState("lightgray");
    let buttonStyles = {backgroundColor:color,display:"inline-block",fontSize:"xx-small",border:"none",cursor:"pointer"}
    
    const handleChangeC = () =>{
        setColor("#c9e8eb");
    }
    return (
        <div style={{margin:"auto",width:"100%",display:"inline"}}>
            <button 
                type="button"
                onClick={() => setColor("#91e191")}
                style={buttonStyles}
                >
                Greenish
            </button>
            <button 
                type="button"
                onClick={() => setColor("#f7f587")}
                style={buttonStyles}>
                Yellowish
            </button>
            <button 
                type="button"
                onClick={handleChangeC}
                style={buttonStyles}>
                Bluish
            </button>
        </div>
    )
}
export default HeaderColorPicker