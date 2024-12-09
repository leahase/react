import React, { useState } from 'react';

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

  const addTask =() => { //fuction to add task
    if (task.trim() !== '') {
        setTasks([...tasks, task]);
        setTask('');
    }
  };

  const removeTask =() => { //fuction to remove task

  }
    return <div> <h1>To do list</h1>
    <p>add your items</p>
    <input
        type="text"
        value={task}
        onChange={() setTask()
        placeholder="Enter your to do"
    />
    <button onClick={addTask}></button>
    <ul>
       
    </ul>
    </div>
}
export default Todo;