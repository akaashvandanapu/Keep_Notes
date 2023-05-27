//This file returns a div which displays the area whihc is used to create the note
import React, { useState } from "react";
//Taking + icon, Fab and zoom cpmpoinents from material.ui
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

//This function takes arguements as props, sent by the app.js component
function CreateArea(props) {
  //Setting the state of the variable isExpanded to check wheteher the create note box is clicked or not
  const [isExpanded, setExpanded] = useState(false);

  //Creating an state object, which stores the input of (title and content), entered by the user
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //This funciton is used to handle the change in the note inputs- title or content
  function handleChange(event) {
    //name stores the name of input which called this function
    //value stores the input entered by the user
    const { name, value } = event.target;
    //setNote is the function used to change the note and prevValue stores the previouly existing values
    //in title and content
    setNote(
      (prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      } //this function returns the newly entered value into its corressponding key by checking the name of the event 
    );
  }

  //This function checks for the onClick event in the Add button and send back the new inputs to a fucntion 
  //named onAdd which is present in the App component.
  //The on Add functions recieves the object note and saves it in a array of elements
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  //this function is used to set the state of the expansion in the create note area
  //and is invoked to the event onCLick in the content input tag 
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {/* Checking for the state of isExpanded and displaying the input only if it is true   */}
        {isExpanded && ( 
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        {/* Checking for an onClick on this input and invoking the funciton expand to set the state of isExapnded  */}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // changing the number of rows depending upon if the create note area is expanded or not 
          rows={isExpanded ? 3 : 1}
        />
        {/* Zoom component is used to animate the addButton(zooming in animation) - only when the createnote area is expanded  */}
        <Zoom in={isExpanded}>
          {/* Fab is a type of in built react button which changes its colour when hovered upon*/}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
