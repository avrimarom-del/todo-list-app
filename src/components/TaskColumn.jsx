import React from "react";
import TaskCard from "./TaskCard";
import "./TaskColumn.css"
import DropArea from "./DropArea";

const TaskColumn = ({icon, title, tasks, status, handleDelete, setActiveCard}) => {
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={icon} alt="icon" />{title}
            </h2>
            
            {
                tasks.map((task, index) => task.status === status && ( 
                <React.Fragment key={index}>
                <TaskCard
                    title={task.task}
                    tags={task.tags} 
                    handleDelete={handleDelete}
                    index={index}
                    setActiveCard={setActiveCard}
                    />
                    <DropArea />
                    </React.Fragment>
                )
            )}
        </section>
    )
}

export default TaskColumn;