import React, { useState } from 'react';

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    return <div> <h1>To do list</h1>
    <p>addd your items</p>
    </div>
}
export default Todo;