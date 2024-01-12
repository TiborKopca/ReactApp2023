import { useState } from 'react';
import styles from '../ListArray/List.module.css'

// eslint-disable-next-line react/prop-types
export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  
  return (
    <div className={styles.skillInputRowWrapper}>
      <input className={styles.inputNewSkill}
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
    </div>
  );
}
