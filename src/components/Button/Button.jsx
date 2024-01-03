import styles from './Button.module.css'

function Button(){
    const buttonClick = (a,b) => {
        alert(a);                               //a - Passed atribute from bellow == the text
        console.info(b.type + " registered.")   //b - the react event that triggered the function, in this case "click"
      }
    return(
        <button 
            className={styles.contactButton} 
            onClick={(event) => buttonClick("You almost contacted me.",event)}
            >Contact me!
        </button>
    );
}
export default Button