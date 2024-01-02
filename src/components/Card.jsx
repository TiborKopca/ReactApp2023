//if we want to import image from file structure
import profilePicture from '../assets/images/project1.jpeg'
import propTypes from 'prop-types'

//The component receives the argument as a props object
function Card(props){
    return(
        <div className="card">
            <p className='projectYear'>{props.year}</p>
            <img className='cardImage' alt="Project picture alternate description" src={profilePicture}></img>
            <h2 className='cardTitle'>{props.projectName}</h2>
            <p className='cardText'>Project Description</p>
        </div>
    );
}
//PROP TYPES DEFINITION
Card.propTypes = {
    projectName: propTypes.string.isRequired,
    year: propTypes.string.isRequired
}
Card.defaultProps = {
    projectName: "unknown",
    year: "20xx"
}

export default Card