import propTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "./Header";

// eslint-disable-next-line react/prop-types
function LoginWrapper({onClick,children,className}){
    return(
        <p 
        className={className} 
        onClick={onClick}
        >
        {children}
        </p>
    )
}

function LoginUI({username, onLogoff, onLogin}){
    //INLINE EVENT HANDLER - wrapped in an anonymous function
    // const handlerLogin = (message,event) => {
    //     console.warn(message);
    //     console.log(event);
    //     console.info(`is logged = ${isLogged}`)
    // }
    //READING CONTEXT FROM CONTEXT PROVIDER
    const isLogged = useContext(UserContext);

    //Warning, the first function is stopped from propagating for testing purposes
    const userNotLogged = <LoginWrapper 
                            className="loginPropmt"
                            onClick={onLogin}
                            >
                            Log in
                            </LoginWrapper>
    const userLogged = <p 
                        onClick={onLogoff}
                        className="welcomeMessage"
                        >
                        Welcome {username}
                        </p>
    return isLogged ? userLogged : userNotLogged
}
export default LoginUI

//PROPS VALIDATION
LoginUI.propTypes = ({
    isLogged: propTypes.bool.isRequired,
    username: propTypes.string.isRequired,
    onLogoff:propTypes.any,
    onLogin: propTypes.any
  });
//DEFAULT PROPS
LoginUI.defaultProps = {
    isLogged: false,
    username: "Guest"
}