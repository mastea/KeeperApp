import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function CreateArea(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(noteItem);
    setNoteItem({
      title: "",
      content: ""
    });
  }
  return (
    <form>
      <input
        onChange={handleChange}
        name="title"
        placeholder="Title"
        value={noteItem.title}
      />
      <textarea
        onChange={handleChange}
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={noteItem.content}
      />
      <button onClick={handleSubmit}>
        <AddIcon />
      </button>
    </form>
  );
}
