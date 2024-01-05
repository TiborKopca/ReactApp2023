import Logo from "./components/Logo";
import UserLoginUI from "./components/Login.jsx";
import HeaderColorPicker from "./components/HeaderColorPicker.jsx";
import Clock from "./components/Time/Clock.jsx";
import Timer from "./components/Time/Timer";

function Header(){
    let headerBackgroundColor = '#a3a3a34d';
    
    return(
        <header id="header" style={{backgroundColor:headerBackgroundColor}} >
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
            <HeaderColorPicker ></HeaderColorPicker>
            <nav>
                <ul>
                    <li><a className="menuHyperLink" href="#header">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#myWorks">My work</a></li>
                    <li><a href="#skillList">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <h1>Website in React!</h1>
        </header>     
    );
}
export default Header