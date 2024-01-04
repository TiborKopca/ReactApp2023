import styles from './SearchBar.module.css'
import {useState} from "react";

export default function SearchBar(){
    //inputs is a state variable and setInputs is the setter function
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The text you're trying to search is: ${inputValue}`)
        console.log(inputs)
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    return(
        <section className={styles.searchWrapper}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="searchInputField"
                    value={inputs.searchInputField || ""} 
                    className={styles.inputBar} 
                    placeholder="search"
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
            {/* <div className={styles.test}>{inputs}</div> */}
        </section>
    )
}
