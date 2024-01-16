import Logo from "./Logo.jsx";
import LoginUI from "./LoginUI.jsx";
import HeaderColorPicker from "./HeaderColorPicker.jsx";
import Clock from "./../Time/Clock.jsx";
import Timer from "./../Time/Timer";
import { useState, createContext } from "react";
import styles from "./Header.module.css";

//USE CONTEXT HOOK
//export const MyContext = createContext(defaultValue)
export const UserContext = createContext();

function Header() {
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("#e6e6fa");
  const [logged, setLogged] = useState(true);

  //Navbar/Header Color Picker
  function handleHeaderColor(event) {
    setHeaderBackgroundColor(event.target.value);
  }

  return (
    <header id="header" className={styles.headerWrapper}>
      <UserContext.Provider value={logged}>
        <LoginUI
          id="userLogin"
          //   isLogged={true}
          username={"Tibor"}
          onLogin={() => {
            console.warn("Login atempt in progress!");
            setLogged(true);
          }}
          onLogoff={() => {
            console.warn("Logoff atempt in progress!");
            setLogged(false);
          }}
        ></LoginUI>
      <Timer></Timer>
      </UserContext.Provider>
        <Clock></Clock>
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
      <label className={styles.inputColorPicker} htmlFor="inputColor">
        Select a header color:
      </label>
      <input
        className={styles.inputColorPicker}
        id="inputColor"
        type="color"
        value={headerBackgroundColor}
        onChange={handleHeaderColor}
      />
      <nav
        className={styles.navbar}
        style={{ backgroundColor: headerBackgroundColor }}
      >
        <ul>
          <li>
            <a className="menuHyperLink" href="#header">
              Home
            </a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#myWorks">My work</a>
          </li>
          <li>
            <a href="#skillList">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
