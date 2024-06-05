import React, { useState } from "react";
import '../styles/TaskInput.css';

function TaskInput(props){
    const [inputvalue, setInputValue] = useState("");



    function handelChange(event){
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    function handelSubmit(){
        props.onAdd(inputvalue);
        setInputValue("");
    }

    return (
        <div className="Task-box">
            <input type="text" placeholder="Enter the task" value={inputvalue} onChange={handelChange}/>
            <button onClick={handelSubmit}>Add</button>
        </div>
    )
}

export default TaskInput;