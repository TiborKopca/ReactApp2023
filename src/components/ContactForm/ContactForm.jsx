import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(100);
  const [star, setStar] = useState(3);
  const [comment, setComment] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [conditions, setConditions] = useState("Not accepted");

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

  return (
    <div id="contact" className={styles.contactFormWrapper}>
      <h3>Contact me, or leave a comment</h3>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="inputName">Name (required)</label>
        <input
          className={styles.inputFieldContactForm}
          id="inputName"
          value={name}
          onChange={handleNameChange}
          placeholder="enter your name"
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
