import React, {useState} from 'react';

import './App.css';
import TaskForm from './components/TaskForm';
import ToDo from './assets/direct-hit_1f3af.webp';
import Doing from './assets/fire_1f525.webp';
import Done from './assets/white-heavy-check-mark_2705.webp';
import TaskColumn from './components/TaskColumn'; 
import TaskCard from './components/TaskCard';    


const App = () => {
  const [tasks, setTasks] = useState([])

    const handleDelete = (taskIndex) => {
        const newTask = tasks.filter((task, index) => index !== taskIndex);
        setTasks(newTask);
    }
    return (
        <div className='app'>
          <TaskForm setTasks={setTasks} />
          <main className='app_main'>
            <TaskColumn icon={ToDo} title="To Do" tasks={tasks} status="todo" handleDelete={handleDelete}/>
            <TaskColumn icon={Doing} title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete}/>
            <TaskColumn icon={Done} title="Done" tasks={tasks} status="done" handleDelete={handleDelete}/>
          </main>
        </div>
    );
};

export default App;