//if we want to import image from file structure
import profilePicture from '../assets/images/project1.jpeg'
import propTypes from 'prop-types'

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
    year: propTypes.number.isRequired
}
Card.defaultProps = {
    projectName: "unknown",
    year: 2000
}

export default Card