import { useReducer } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import styles from '../ListArray/List.module.css'
import tasksReducer from './TasksReducer.jsx';

let nextId = 5;
const initialTasks = [
  {id: 0, text: 'Visit Concert Bert & friends', done: false},
  {id: 1, text: 'Grab a beer in the center', done: false},
  {id: 2, text: 'Go to the aviation museum Letnany', done: false},
  {id: 3, text: 'Visit family', done: false},
  {id: 4, text: 'Visit Granddads grave', done: false},
];

//different syntax how to export default function
export default function TaskApp() {
  //const [tasks, setTasks] = useState(initialTasks);
  //The useReducer Hook is similar to useState—you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function).
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch(
      {type:'added', id: nextId++, text: text}
    )
    // setTasks([
    //   ...tasks,
    //   {
    //     id: nextId++,
    //     text: text,
    //     done: false,
    //   },
    // ]);
  }

  function handleChangeTask(task) {
    dispatch(
      {type:'changed', task:task}
    )
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
  }

  function handleDeleteTask(taskId) {
    dispatch(
      //"action" object (regular Javascript):
      {type:'deleted', id:taskId}
    )
    // setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <section className={styles.listSection}>
      <h3>Next trip to Prague itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </section>
  );
}
