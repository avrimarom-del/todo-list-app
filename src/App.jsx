import { useState, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import ToDo from './assets/direct-hit_1f3af.webp';
import Doing from './assets/fire_1f525.webp';
import Done from './assets/white-heavy-check-mark_2705.webp';
import TaskColumn from './components/TaskColumn';
import './App.css';

const oldTask = localStorage.getItem("tasks");
const tags = ["ONLINE", "OFFLINE", "MEETING", "HAMAL"];

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');
  


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

  const filteredTasks = tasks.filter(task => {
    const matchesTag = activeTag ? task.tags.includes(activeTag) : true;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = q ? task.task.toLowerCase().includes(q) : true;
    return matchesTag && matchesQuery;
  });

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  }

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard)

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
        <div className="search_bar">
          <input className="search_input" placeholder="Search tasks..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <div className="tag_buttons">
            {tags.map(tag => (
              <button key={tag} className={`tag_btn tag-btn-${tag.toLowerCase()} ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(a => a === tag ? '' : tag)}>{tag}</button>
            ))}
            <button className={`tag_btn tag-btn-all ${activeTag === '' ? 'active' : ''}`} onClick={() => setActiveTag('')}>All</button>
          </div>
        </div>
        <TaskColumn icon={ToDo} title="To Do" tasks={filteredTasks} status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon={Doing} title="Doing" tasks={filteredTasks} status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
        <TaskColumn icon={Done} title="Done" tasks={filteredTasks} status="done" handleDelete={handleDelete} setActiveCard={setActiveCard} onDrop={onDrop} />
      </main>
    </div>
  );
};

export default App;