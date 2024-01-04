import propTypes from "prop-types";

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

function UserLoginUI({username, isLogged, onLogoff}){
    //INLINE EVENT HANDLER - wrapped in an anonymous function
    const handlerLogin = (message,event) => {
        console.warn(message);
        console.log(event);
        console.info(`is logged = ${isLogged}`)
        // isLogged=true
        // console.info(`is logged = ${isLogged}`)
    }
    //Warning, the first function is stopped from propagating for testing purposes
    const userNotLogged = <LoginWrapper 
                            className="loginPropmt"
                            onClick={(event) => event.stopPropagation(handlerLogin("Login atempt in progress!",event))}
                            >
                            Log in
                            </LoginWrapper>
    const userLogged = <p 
                        onClick={onLogoff}
                        className="welcomeMessage">
                        Welcome {username}
                        </p>
    return isLogged ? userLogged : userNotLogged
}
export default UserLoginUI

//PROPS VALIDATION
UserLoginUI.propTypes = ({
    isLogged: propTypes.bool.isRequired,
    username: propTypes.string.isRequired,
    onLogoff:propTypes.any
  });
//DEFAULT PROPS
UserLoginUI.defaultProps = {
    isLogged: false,
    username: "Guest"
}