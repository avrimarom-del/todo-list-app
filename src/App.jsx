import React, {useState, useEffect} from 'react';

import './App.css';
import TaskForm from './components/TaskForm';
import ToDo from './assets/direct-hit_1f3af.webp';
import Doing from './assets/fire_1f525.webp';
import Done from './assets/white-heavy-check-mark_2705.webp';
import TaskColumn from './components/TaskColumn'; 
import TaskCard from './components/TaskCard';    
import js from '@eslint/js';

const oldTask = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = (taskIndex) => {
        const newTask = tasks.filter((task, index) => index !== taskIndex);
        setTasks(newTask);
    }

    const onDrop = (status, position) => {
     if (activeCard == null || activeCard === undefined) return

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task,index) => index !== activeCard)

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    })

    setTasks(updatedTasks)
    };    
    return (
        <div className='app'>
          <TaskForm setTasks={setTasks} />
          <main className='app_main'>
            <TaskColumn icon={ToDo} title="To Do" tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskColumn icon={Doing} title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskColumn icon={Done} title="Done" tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
          </main>
        </div>
    );
};

export default App;