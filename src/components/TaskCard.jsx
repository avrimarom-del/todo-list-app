import React from "react";
import './TaskColumn.css';
import Tag from "./Tag";
import deleteIcon from '../assets/cross-mark_274c.webp';
import './TaskCard.css';

const TaskCard = ({ title, tags }) => { 
    return (
        <article className="task_card">
            <p className="task_text">{title}</p>

            <div className="task_card_bottom_line">
                <div className="task_card_tags">
                  {
                    tags.map((tag, index) => 
                        <Tag key={index} tagName={tag} selected={true} />
                    )
                  }
                </div>
                <div className="task_delete">
                  <img src={deleteIcon}  className="delete_icon" alt="delete icon" />
               </div>
            </div>
        </article>
    )

}

export default TaskCard;