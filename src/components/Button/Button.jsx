import styles from './Button.module.css'

function Button(){
    const handleButtonClick = (a,e) => {
        console.log(e)
        alert(a);                                   //a - Passed atribute from bellow == the text
        console.info(`${e.type} registered`);       //e - the react event that triggered the function, in this case "click"
        e.target.textContent = "Thanks. Bye!";      //Change the text content of the button
        // e.target.disabled = true                //This will disable the button
      }
    return(
        <button 
            className={styles.contactButton} 
            onClick={(event) => handleButtonClick("You almost contacted me.",event)}
            //onMouseOver={}
            >Contact me!
        </button>
    );
}
export default Button
