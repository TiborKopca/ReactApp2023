import propTypes from "prop-types";
import { useState } from "react";
import styles from "./List.module.css";

const skill1 = "HTML";
const skill2 = "CSS";
const skill3 = "Javascript";
const skill4 = "React";
let initArray = ["HTML5","CSS3","Javascript","React"];

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
  //USE STATE NEEDS TO BE IN MAIN FUNCTION, BUT DATA/ARRAY DOESNT
  const [skills, setSkills] = useState(initArray);
  
  //ERROR HANDLER
  function findDuplicates(array,newData){
    const duplicate = array.find((item) => {return item === newData})
    if(duplicate === newData){
      return true
    }else{
    return false
  }}

  //LIST/ARRAY HANDLERS
    function handleAddSkill(){
      const newSkill = document.getElementById('skillInput').value;
      document.getElementById('skillInput').value = '';
      //CONDITIONS, if entry already exists, wont add it
        // const duplicate = skills.find((skill) => {return skill === newSkill})
        if(findDuplicates(skills,newSkill)){
          console.error("Error : New entry already exists in array/list.")
        }else{
          //setSkills((skills) => [...skills, newSkill])
          //s === previous state
          // Re-render with the new array
          setSkills((s) => [...s, newSkill])
        }
    }

    function handleRemoveSkill(index){
      //Note that filter does not modify the original array so it could be written like>
      //setSkills(skills.filter((element, i) => i== index))
        setSkills((s) => s.filter((_, i) => i!== index))
    }

    function handleAddSkillBetween(index){
      const newSkill = document.getElementById('skillInput').value;
      document.getElementById('skillInput').value = '';
      //index + 1 ==> the data will be put to the next row
      const insertAt = index + 1;

      if(findDuplicates(skills,newSkill)){
        console.error("Error : New entry already exists in array/list.")
      }else{
        const nextSkill = [
          //items before the insertion point = from 0 to desired id number
          ...skills.slice(0, insertAt),
          //new item {id:nextId++, name: name}
          newSkill,
          //items after
          ...skills.slice(insertAt)
        ];
        setSkills(nextSkill)
      }
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
                                          <button 
                                          className={styles.listInsertButton} 
                                          onClick={()=> handleAddSkillBetween(index)}
                                          >&#x2B05; insert after this</button>
                                        </li>)}
      </ul>
      <label htmlFor="skillInput">Write new skill (at the end):</label>
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
