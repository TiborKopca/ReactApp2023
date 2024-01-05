import { useState } from "react";

function HeaderColorPicker(){
    const [color, setColor] = useState("lightgray");
    let buttonStyles = {backgroundColor:color,flex:"auto",fontSize:"xx-small",border:"1px solid grey",cursor:"pointer"}
    
    const handleChangeC = () =>{
        setColor("#c9e8eb");
    }
    return (
        <div style={{margin:"auto",width:"100%",display:"flex"}}>
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