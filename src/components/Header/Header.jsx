import Logo from "./../Logo.jsx";
import UserLoginUI from "./../Login.jsx";
import HeaderColorPicker from "./../HeaderColorPicker.jsx";
import Clock from "./../Time/Clock.jsx";
import Timer from "./../Time/Timer";
import { useState } from "react";
import styles from './Header.module.css';

function Header(){
    const [headerBackgroundColor, setHeaderBackgroundColor] = useState("#e6e6fa");
    function handleHeaderColor(event){
        setHeaderBackgroundColor(event.target.value)
    }
    return(
        <header id="header"  className={styles.headerWrapper}>
            <UserLoginUI 
                id="userLogin" isLogged={true} username="Tibor" 
                onLogin={()=> {}}
                onLogoff={()=> {console.warn("Logoff atempt in progress!")}}
            ></UserLoginUI>
            <Clock></Clock>
            <Timer></Timer>
            <Logo 
                name="Tibor"
                className="logoAvatar"
                src="https://avatars.githubusercontent.com/u/49275231?v=4"
                alt="Logo Avatar"
                width={100}
                height={100}
                id={1}
            ></Logo>
            <HeaderColorPicker></HeaderColorPicker>
            <label className="inputColorPicker" htmlFor="inputColor">Select a header color:</label>
            <input className="inputColorPicker" id="inputColor" type="color" value={headerBackgroundColor} onChange={handleHeaderColor}/>
            <nav className={styles.navbar} style={{backgroundColor:headerBackgroundColor}}>
                <ul>
                    <li><a className="menuHyperLink" href="#header">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#myWorks">My work</a></li>
                    <li><a href="#skillList">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            
        </header>     
    );
}
export default Header