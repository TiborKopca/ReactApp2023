import Logo from "./components/Logo";
import UserLoginUI from "./components/Login.jsx";

function Header(){
    return(
        <header id="header">
            <UserLoginUI id="userLogin" isLogged={true} username="Tibor"/>
            <Logo 
                name="Tibor"
                className="logoAvatar"
                src="https://avatars.githubusercontent.com/u/49275231?v=4"
                alt="Logo Avatar"
                width={100}
                height={100}
                id={1}
            ></Logo>
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