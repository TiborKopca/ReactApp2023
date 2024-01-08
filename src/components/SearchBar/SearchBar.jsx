import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar() {
  //inputs is a state variable and setInputs is the setter function
  const [inputs, setInputs] = useState({searchInputField:""});
  //UPDATER
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The text you're trying to search is: ${inputValue}`)
    console.log(inputs);
    setIsSent(true)
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //SPREAD OPERATOR TO ITERATE ALL PROPERTIES IN OBJECT
    //Object is inside arrow function
    //setInputs((values) => ({ ...values, searchInputField:event.target.value }));
    setInputs((values) => ({ ...values, [name]: value }));
};

  //CONDITIONAL RENDERING
  if (isSent) {
    return <p className={styles.searchResult}>Your search &quot;{inputs.searchInputField}&quot; is not encountered!</p>;
  }
  return (
    <section className={styles.searchWrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInputField"
          value={inputs.searchInputField || ""}
          className={styles.inputBar}
          placeholder="enter your search querry here"
          onChange={handleChange}
        />
        <input type="submit" value={"search"} />
      </form>
      <div className={styles.testParagraph}>Test value:{inputs.searchInputField}</div>
    </section>
  );
}