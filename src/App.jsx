import {useState, useEffect} from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import './App.css';
import TaskForm from './components/TaskForm';
import ToDo from './assets/direct-hit_1f3af.webp';
import Doing from './assets/fire_1f525.webp';
import Done from './assets/white-heavy-check-mark_2705.webp';
import TaskColumn from './components/TaskColumn'; 

const oldTask = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

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
          <TaskForm setTasks={setTasks} dark={dark} setDark={setDark} />
          <main className='app_main'>
            <TaskColumn icon={ToDo} title="To Do" tasks={tasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskColumn icon={Doing} title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
            <TaskColumn icon={Done} title="Done" tasks={tasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop}/>
          </main>
        </div>
    );
};

export default App;