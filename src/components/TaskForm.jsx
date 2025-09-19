import React from 'react';
import Tag from './Tag';
import './TaskForm.css';
import './Tag.css';
const TaskForm = () => {
    return (
        <header className='app_header'>
            <form>
                <input type="text" className='task_input' placeholder='Enter your task' />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag name="HTML" />
                        <Tag name="css" />
                        <Tag name="JavaScript" />
                        <Tag name="React" />
                    </div>
                    <div>
                        <select className='task_status'>
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        
                        <button type="submit" className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}
export default TaskForm;