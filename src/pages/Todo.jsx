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

  const removeTask =(index) => { //fuction to remove task
    const newTasks = [...tasks];//kopera task 
    newTasks.splice(index,1); //remove task
    setTasks(newTasks);
  };

    return <div> <h1>To do list</h1>
    <p>add your items</p>
    <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your to do"
    />
    
  
       <p><button onClick={addTask}>Add yout To Do</button></p>
       <p><button onClick={removeTask}>Remove your To Do</button></p>
    </div>
}
export default Todo;