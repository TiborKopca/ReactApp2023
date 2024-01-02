import propTypes from "prop-types";

function UserLoginUI(props){
    const userNotLogged = <p className="loginPropmt">Log in</p>
    const userLogged = <p className="welcomeMessage">Welcome {props.username}</p>
    return props.isLogged ? userLogged : userNotLogged
}
export default UserLoginUI

//PROPS VALIDATION
UserLoginUI.propTypes = ({
    isLogged: propTypes.bool.isRequired,
    username: propTypes.string.isRequired,
  });
//DEFAULT PROPS
UserLoginUI.defaultProps = {
    isLogged: false,
    username: "Guest"
}