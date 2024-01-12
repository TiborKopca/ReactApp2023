/* eslint-disable react/prop-types */
import { useState } from "react";
import propTypes from "prop-types";
import styles from "../ListArray/List.module.css";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  //rendering each line of tasklist, we need to each task/line i.e. 'Task' pass the props from parent
  return (
    <ul className={styles.listWrapper}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskListRow}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  //variable because?
  let taskContent;

  //EDIT RENDER
  if (isEditing) {
    taskContent = (
      <>
        <input
          className={styles.inputNewSkill}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className={styles.taskButton} onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p className={styles.taskText}>{task.text}</p>
        <button className={styles.taskButton} onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  //DEFAULT RENDER
  return (
    <>
      <label className={styles.taskListLabel} >
      </label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className={styles.taskButton} onClick={() => onDelete(task.id)}>
        Delete
      </button>
      
    </>
  );
}

//PROP TYPES DEFINITION
TaskList.propTypes = {
  tasks: propTypes.any,
  onChangeTask: propTypes.any,
  onDeleteTask: propTypes.any,
  // task.text: propTypes.string,
};
TaskList.defaultProps = {
  // projectName: "unknown",
  // year: "20xx"
};
