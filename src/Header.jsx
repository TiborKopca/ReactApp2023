import Logo from "./components/Logo";

function Header(){
    return(
        <header>
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
                    <li><a className="menuHyperLink" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <h1>Website in React!</h1>
        </header>     
    );
}
export default Header
