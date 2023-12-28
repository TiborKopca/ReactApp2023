//if we want to import image from file structure
import profilePicture from '../assets/images/project1.jpeg'

function Card(){
    return(
        <div className="card">
            <img className='cardImage' alt="Project picture alternate description" src={profilePicture}></img>
            <h2 className='cardTitle'>Project Name</h2>
            <p className='cardText'>Project Description</p>
        </div>
    );
}

export default Card