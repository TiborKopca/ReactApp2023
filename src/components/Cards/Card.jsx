//if we want to import image from file structure
import profilePicture from '../../assets/images/project1.jpeg'
import propTypes from 'prop-types'
import styles from './Card.module.css'

//The component receives the argument as a props object
function Card(props){
    return(
        <div className={styles.card}>
            <p className={styles.projectYear}>{props.year}</p>
            <img className={styles.cardImage} alt="Project picture alternate description" src={profilePicture}></img>
            <h2 className={styles.cardTitle}>{props.projectName}</h2>
            <p className={styles.cardText}>Project Description</p>
        </div>
    );
}

export default Card


//PROP TYPES DEFINITION
Card.propTypes = {
    projectName: propTypes.string.isRequired,
    year: propTypes.string.isRequired
}
Card.defaultProps = {
    projectName: "unknown",
    year: "20xx"
}