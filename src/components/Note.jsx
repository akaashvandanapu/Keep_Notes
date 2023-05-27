//This component is used to display the created notes in the web page
import React from "react";
//Imported the delete icon component from material.ui
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from "@mui/material/Fab";

//This input takes props from the app.jsx component and use them to display the notes
//props.onDelete - onDelete is a function in the app.jsx component which is used to delete a note
//props.id - id number od the note to be displayed or deleted 
//props.title- title of the notes 
//props.content- content of the notes
function Note(props) {

  //This function is used to handle the click on delete button and invokes the onDelete function in App 
  //component which used the filter function to delete the component
  function handleClick() {
    //This below line sends the id of the note on which delete is pressed and the onDelete method in App component 
    //deletes the note corressponding to that id(basically- index number).
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><DeleteIcon /></Fab>
    </div>
  );
}

export default Note;
