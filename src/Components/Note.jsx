import React, { useState } from "react";
import '../styles/Note.css'


function Note(props) {
    const [isDone, setIsDone] = useState(true);




    return (

        <div className="Note" onClick={() => props.Delete(props.id)} style={props.styles}>
            <li>{props.list}</li>
        </div>
    )
}

export default Note;