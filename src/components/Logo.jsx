import AuthorNameText from "./AuthorName.jsx";
import propTypes from 'prop-types'
import { useState } from "react";

let clickNumber = 0;

function Logo(props) {
  //STATE MANAGEMENT
  const [showMore, setShowMore] = useState(false);
  //EVENT HANDLER
  const handleClickImg = (e) => {
    if(clickNumber %2 == 0){
      // e.target.style = "transform: scale(1.4)";
      e.target.style = "rotate: 180deg;transition: rotate 0.5s;";
    }else{
      e.target.style = "rotate: 0deg;transition: rotate 0.5s;";
      //e.target.style = "transform: scale(1)";
    }
    clickNumber += 1; //iterate clickCount, so next time the number will be even/odd
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
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
        onClick={(e) => handleClickImg(e)}
      />
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <AuthorNameText></AuthorNameText>}
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

