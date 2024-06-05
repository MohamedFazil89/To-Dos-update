import React, {useState } from "react"
import Header from './Components/Header.jsx';
import TaskInput from "./Components/TaskInput.jsx";
import Note from "./Components/Note.jsx";
import './styles/App.css'

function App() {

 

  return (
    <div className="body">
      <Header />
      <TaskInput />
      <Note />
   
    </div>
  )
}

export default App
