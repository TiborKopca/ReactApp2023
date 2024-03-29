import styles from "./SearchBar.module.css";
import { useState , useRef} from "react";

export default function SearchBar() {
  //inputs is a state variable and setInputs is the setter function
  const [inputs, setInputs] = useState({searchInputField:""});
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  //UPDATER
  const [inputStatus, setInputStatus] = useState('ready'); //this has more advantages as true/false
  // const [isSent, setIsSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setInputStatus('submited'); //block all inputs until next change
    try{
      await submitForm(inputs);
      setInputStatus('sent') //all good
    }catch (err){
      setInputStatus('ready') //default state
      setError(err)
    }
  }

  function submitForm(inputs) {
    // Pretend it's hitting the network, 500ms delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = inputs.searchInputField.toLowerCase() !== 'hovno'
        if (shouldError) {
          reject(new Error(`Youre trying to search ${inputs.searchInputField}, but there is only shit on this page. Try again!`));
        } else {
          resolve();
        }
      }, 500);
    });
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    //SPREAD OPERATOR TO ITERATE ALL PROPERTIES IN OBJECT WITH A DYNAMIC NAME
    //Object is inside arrow function
    //setInputs((values) => ({ ...values, searchInputField:event.target.value }));
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSearchReset = () =>{
    setInputStatus('ready');            //to again show inputfield
    // console.log(inputs.searchInputField)
    setError(null)
    const newInput = {searchInputField:""}
    setInputs(newInput) 
  }
  
  function handleGoFocus(){
    //The div on click will focus input field
    inputRef.current.focus();
  }

  function ResetButton(){
    return (
          <div className={styles.buttonWrapper}>
              <button 
                className={styles.searchBarResetButton}
                onClick={handleSearchReset}>New search
              </button>
          </div>
  )}

  //CONDITIONAL RENDERING
  if (inputStatus === 'sent') {
    return (
      <section className={styles.searchWrapper}>
          <p className={styles.searchResult}>Your search &quot;{inputs.searchInputField}&quot; has been indeed encountered on this page!</p>
          <ResetButton></ResetButton>
      </section>
    )
  }

  return (
    <section className={styles.searchWrapper} onClick={handleGoFocus}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInputField"
          value={inputs.searchInputField || ""}
          className={styles.inputBar}
          placeholder="enter your search querry here(hovno)"
          onChange={handleInputChange}
          disabled={inputStatus === 'submited'}
          ref={inputRef}
        />
        <input 
          type="submit" 
          value={"search"} 
          disabled={inputs.searchInputField.length === 0 || inputStatus === 'submited'}
          />
      </form>
      <div 
          className={styles.testParagraph}>
          Test value:{inputs.searchInputField}, characters : {inputs.searchInputField.length}
          {error !== null && 
                            <p className={styles.searchResult}>
                            {error.message}
                            </p>
          }
      </div>
    </section>
  );
}