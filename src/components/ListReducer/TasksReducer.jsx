//function Reducer(state,action){}
  //To move your state setting logic from your event handlers to a reducer function
  //arguments = declare current state and action
  //Because the reducer function takes state (tasks) as an argument, you can declare it outside of your component
  export default function tasksReducer(tasks,action){
    //returns the next state
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }