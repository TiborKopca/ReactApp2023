import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(100);
  const [star, setStar] = useState(3);
  const [comment, setComment] = useState("");
  const [dropdown, setDropdown] = useState("");

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

  return (
    <div id="contact" className={styles.contactFormWrapper}>
      <h3>Contact me, or leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName">Name (required)</label>
        <input
          id="inputName"
          value={name}
          onChange={handleNameChange}
          placeholder="enter your name"
          required
        />
        <label htmlFor="inputStar">How many slaps do you want?</label>
        <input
          id="inputStar"
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
            type="range"  
            value={star}
            min={1} 
            max={5}
            onChange={handleStarChange} 
        />
        <label htmlFor="inputComment">Comment</label>
        <textarea 
            id="inputComment" 
            type="textarea" 
            placeholder="Leave a comment here."
            value={comment}
            onChange={handleCommentChange}
            rows={2}
        />
        <label htmlFor="inputSelect">What do like the most on me</label>
        <select
            id="inputSelect"
            value={dropdown}
            onChange={handleDropdownChange}
        >
            <option value="">Select an option</option>
            <option value="nice attitute">Tibor has nice attitute</option>
            <option value="great at coding">Tibor is great at coding</option>
            <option value="looks like a model">Tibor looks like a model</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
export default ContactForm;
