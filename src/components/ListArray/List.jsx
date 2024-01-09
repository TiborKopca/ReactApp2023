import propTypes from "prop-types";
import { useState } from "react";
import styles from "./List.module.css";

const skill1 = "HTML";
const skill2 = "CSS";
const skill3 = "Javascript";
const skill4 = "React";

function Item({ name, isDone}) {
  if (isDone) {
    return <li className="item">{name} &#x2713;</li>;
  }
  //we can use also nothing => return null;
  return <li className="item">{name}</li>;
}

function TernaryItem({ name, isDone }) {
  return (
    <li className="item">
      {isDone ? (
        "Did you finish " + name + " yet ?"
      ) : (
        <del>You should stop wasting your time and learn {skill4} already!</del>
      )}
    </li>
  );
}
function AndOperatorItem(props) {
  return (
    <li className="item">
      {props.name} {props.isDone && " done also!"}
    </li>
  );
}

export default function List() {
  //arrays has ids, automatically
  /*
  let people = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ]
  */
  const [skills, setSkills] = useState(["HTML5","CSS3","Javascript","React"]);
  
  //LIST/ARRAY HANDLERS
    function handleAddSkill(){
      const newSkill = document.getElementById('skillInput').value;
      document.getElementById('skillInput').value = '';
      //setSkills((skills) => [...skills, newSkill])
      //s === previous state
      setSkills((s) => [...s, newSkill])
  
    }
    function handleRemoveSkill(index){
      //setSkills(skills.filter((element, i) => i== index))
        setSkills(skills.filter((_, i) => i!== index))
    }
  return (
    <section className={styles.listSection}>
      <h2>List of things on the website</h2>
      <ul>
        <Item isDone={true} name={skill1} />
        <Item isDone={true} name={skill2} />
        <Item isDone={true} name={skill3} />
        <AndOperatorItem isDone={false} name={skill4} />
        <TernaryItem isDone={true} name={skill4} />
        <li>Or &quot;just&quot; {skill2.toUpperCase()}?</li>
      </ul>

      <h3>List of skills using Arrays</h3>
      <ul>
        {skills.map((skill, index) => <li 
                                        key={index}
                                        >{skill} (id:{index})
                                        <button 
                                          className={styles.listDeleteButton} 
                                          onClick={()=> handleRemoveSkill(index)}
                                          >&#x2B05; delete</button>
                                        </li>)}
      </ul>
      <label htmlFor="skillInput">Write new skill or click on existing to delete:</label>
      <input 
          className={styles.inputNewSkill}
          type="text"
          id="skillInput"
          placeholder="Enter new skill"
      />
      <button 
        className={styles.addNewSkillButton}
        onClick={handleAddSkill}
        >Add new 
      </button>
    </section>
  );
}
//PROPS VALIDATION
Item.propTypes,TernaryItem.propTypes,AndOperatorItem.propTypes = ({
    name: propTypes.string.isRequired,
    isDone: propTypes.bool.isRequired,
  });
