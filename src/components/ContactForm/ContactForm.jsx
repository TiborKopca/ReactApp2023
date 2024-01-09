import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(100);
  const [star, setStar] = useState(3);
  const [comment, setComment] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [conditions, setConditions] = useState("Not accepted");
 
  const [person, setPerson] = useState({
    firstName: 'Papa',
    lastName: 'Noel',
    email: 'Papa.Noel@Pornhub.com'
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The text you're trying to search is: ${inputValue}`)
    // console.log(inputs)
  };

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantity(event) {
    setQuantity(event.target.value);
  }
  function handleStarChange(event) {
    setStar(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handleDropdownChange(event) {
    setDropdown(event.target.value);
  }
  function handleConditionsChange(event) {
    setConditions(event.target.value);
  }
  function handleFirstNameChange(e) {
    // this only mutates the state from past render
    // person.firstName = e.target.value; 
    setPerson({
        ...person,                  // Copy the old fields
        firstName: e.target.value   // But override this one
      });
  }

//   function handleLastNameChange(e) {
//     setPerson({
//         ...person,                  // Copy the old fields
//         lastName: e.target.value    // But override this one
//       });
//   }

  function handleEmailChange(e) {
    setPerson({
        ...person,                  // Copy the old fields
        email: e.target.value       // But override this one
      });
  }
  //DYNAMIC NAME TO A PROPERTY USING [], this handler is used in "last name" input field instead of "handleLastNameChange"
  function handlePersonChange(e){
    setPerson({
        ...person,
        [e.target.name]: e.target.value
    });
  }

  return (
    <div id="contact" className={styles.contactFormWrapper}>
      <h3>Contact me, or leave a comment</h3>
      <form onSubmit={handleSubmit} className={styles.contactForm}>

      <label htmlFor="inputFirstName">First name:</label>
        <input 
            id="inputFirstName"
            className={styles.nameInput}
            value={person.firstName}
            placeholder="enter your name"
            onChange={handleFirstNameChange}
        />
        <label htmlFor="inputLastName">Last name:</label>
        <input
            id="inputLastName" 
            className={styles.nameInput}
            name="lastName"
            value={person.lastName}
            onChange={handlePersonChange}
        />
        <label htmlFor="inputEmail">Email:(required)</label>
        <input 
            id="inputEmail"
            className={styles.nameInput}
            value={person.email}
            onChange={handleEmailChange}
            required
        />
        <div className={styles.testParagraph}>TestValue/default is : {person.firstName} {person.lastName}, {person.email}</div>

        <label htmlFor="inputName">Name (required)</label>
        <input
          id="inputName"
          className={styles.inputFieldContactForm}
          placeholder="enter your name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="inputStar">How many slaps do you want?</label>
        <input
          id="inputStar"
          className={styles.inputFieldContactForm}
          type="number"
          value={quantity}
          onChange={handleQuantity}
          min={100}
          max={500}
        />
        <label htmlFor="inputRange">Rate me (1-5)!</label>
        <p>{star}</p>
        <input
          id="inputRange"
          className={styles.inputFieldContactForm}
          type="range"
          value={star}
          min={1}
          max={5}
          onChange={handleStarChange}
        />
        <label htmlFor="inputComment">Comment</label>
        <textarea
          id="inputComment"
          className={styles.textareaInContactForm}
          type="textarea"
          placeholder="Leave a comment here."
          value={comment}
          onChange={handleCommentChange}
          rows={2}
        />
        <label htmlFor="inputSelect">What do like the most on me</label>
        <select
          id="inputSelect"
          className={styles.selectInContactForm}
          value={dropdown}
          onChange={handleDropdownChange}
        >
          <option value="">Select an option</option>
          <option value="nice attitute">Tibor has nice attitute</option>
          <option value="great at coding">Tibor is great at coding</option>
          <option value="looks like a model">Tibor looks like a model</option>
        </select>
        <p className={styles.conditionParagraph}>
          Accept all terms and conditions (dont worry)
        </p>
        <div className={styles.radioN}>
          <label htmlFor="inputRadioNo">No way!</label>
          <input
            name="radioCondition"
            type="radio"
            id="inputRadioNo"
            value="Not accepted"
            checked={conditions === "Not accepted"}
            onChange={handleConditionsChange}
          />
        </div>
        <div className={styles.radioY}>
          <label htmlFor="inputRadioYes">Sure, I dont care</label>
          <input
            name="radioCondition"
            type="radio"
            id="inputRadioYes"
            value="Accepted"
            checked={conditions === "Accepted"}
            onChange={handleConditionsChange}
          />
        </div>
        <div className={styles.testParagraph}>TestValue/default is : {conditions}</div>

        <input type="submit" className={styles.submitContactForm} />
      </form>
    </div>
  );
}
export default ContactForm;
