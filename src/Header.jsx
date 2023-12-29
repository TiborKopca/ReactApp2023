import Logotype from "./components/Logo";

function Header(){
    return(
        <header>
            <Logotype></Logotype>
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
