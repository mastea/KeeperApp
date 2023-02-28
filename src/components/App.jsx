import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteItem) {
    setNotes((prevNotes) => {
      return [...prevNotes, noteItem];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}
