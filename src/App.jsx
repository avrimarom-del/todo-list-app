import React from 'react';

import './App.css';
import TaskForm from './components/TaskForm';
import ToDo from './assets/direct-hit_1f3af.webp';
import Doing from './assets/fire_1f525.webp';
import Done from './assets/white-heavy-check-mark_2705.webp';
import TaskColumn from './components/TaskColumn'; 
import TaskCard from './components/TaskCard';    


const App = () => {
    return (
        <div className='app'>
          <TaskForm />
          <main className='app_main'>
            <TaskColumn icon={ToDo} title="To Do" />
            <TaskColumn icon={Doing} title="Doing" />
            <TaskColumn icon={Done} title="Done" />
          </main>
        </div>
    );
};

export default App;