import AuthorNameText from "./AuthorName.jsx";
import propTypes from 'prop-types'

function Logo(props) {
    

  return (
    <div className="logoWrapper">
      <img
        name={props.name}
        className={props.className}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        id={props.id}
      />
      <AuthorNameText></AuthorNameText>
    </div>
  );
}
//PROPS VALIDATION
Logo.propTypes = {
    className: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
}
export default Logo
