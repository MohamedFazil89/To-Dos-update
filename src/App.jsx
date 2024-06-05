import React, { useState } from "react"
import Header from './Components/Header.jsx';
import TaskInput from "./Components/TaskInput.jsx";
import Note from "./Components/Note.jsx";
import './styles/App.css'
// import note from "./array.js";

function App() {
  const [task, setTask] = useState(['Your task goes here']);
  const [styles, setStyles] = useState({
    color: "white",
    border: "1px solid green",
    textDecoration: "none"

  })

  function addTask(input) {
    setTask(prevValue =>  [...prevValue, input]);

    setStyles((prevValue) =>{
      return {
        color: "white",
        border: "1px solid green",
        textDecoration: "none"
  
      }
    })

  }

  function deleteTask(id) {
    setTask((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id 
      })
    })

  }





  return (
    <div className="body">
      <Header />
      <TaskInput onAdd={addTask} />
      <div className="note-view">
        {task.map((text, index) => (
          <Note key={index} list={text} Delete={deleteTask} id={index} styles={styles} />
        ))}


      </div>

    </div>
  )
}

export default App
