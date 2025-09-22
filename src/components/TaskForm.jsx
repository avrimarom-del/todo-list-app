import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import Tag from './Tag';
import './TaskForm.css';
import "./Tag"

const TaskForm = ({ setTasks, dark, setDark }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag);
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });
    };
    return (
        <div className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='task'
                    value={taskData.task}
                    className='task_input'
                    placeholder='Enter your task'
                    onChange={handleChange}
                />

                <div className='task_form_bottom_line'>
                    <div className='task_form_tags'>
                        <Tag tagName="ONLINE" selectTag={selectTag} selected={checkTag("ONLINE")} />
                        <Tag tagName="OFFLINE" selectTag={selectTag} selected={checkTag("OFFLINE")} />
                        <Tag tagName="MEETING" selectTag={selectTag} selected={checkTag("MEETING")} />
                        <Tag tagName="HAMAL" selectTag={selectTag} selected={checkTag("HAMAL")} />
                    </div>
                    <div className='task_form_actions'>
                        <select
                            name="status"
                            value={taskData.status}
                            className='task_status'
                            onChange={handleChange}
                        >
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>

                        <button type="submit" className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
            <div className="theme_toggle_wrapper">
                <button aria-label="Toggle theme" className="theme_toggle" onClick={() => setDark(d => !d)}>
                    {dark ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </div>
    )
}
export default TaskForm;