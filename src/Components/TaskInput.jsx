import React from "react";
import '../styles/TaskInput.css'

function TaskInput(){
    return (
        <div className="Task-box">
            <input type="text" placeholder="Enter the task" />
            <button>Add</button>
        </div>
    )
}

export default TaskInput;