//This is the main component which is rendered by the index.js file
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //Creating a constant notes and setting its state
  //notes is a array of objects which contain 3 key, value pairs - id, title, content
  const [notes, setNotes] = useState([]);

  //This function is invoked when the add button in CreateArea component is is clicked
  //This function is used to add a new note in the form of object into the array notes 
  function addNote(newNote) {
  //prevNotes stores all the previously stored notes and adds a newNote to end 
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  //This function is invoked when the delte button is pressed in the note.jsx component
  //This function takes the arguements as the id whihc is sent by the handleClick method in noteComponent 
  //id here denotes the index of the note whihc is to-be deleted 
  function deleteNote(id) {
    //This function returns a array to the notes array by which involeves all the notes except the one 
    //whose id is sent by the handleClick method from the notes component(hence return index!==id)
    setNotes(prevNotes => {
      //Here noteItem refers to each elemt of the array notes and index correspond to each of the note
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  //Here:- onAdd={addNote}, key={index}, id={index}, title={noteItem.title}, content={noteItem.content},
  //onDelete={deleteNote} are the differne tproops send to CreateArea and Note components, whihc either
  //corresspond to a funciton in the App.js component or the key of the object in the array notes.
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* Mapping all the notes , the map funciton takes 3 inputs and we use 2:
      noteItem - iterates through each of the element of the array notes.(can be named anything)
      index- corresponds to indexes of each elemnt whihc are mapped(name cannot be changed) */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
          // the above code sends different props to the NOte component whihc are used over there to create
          //a new note and display it 
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
