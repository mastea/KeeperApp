import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function expand() {
    setExpanded(true);
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
    <form className="create-note">
      {expanded && (
        <input
          onChange={handleChange}
          name="title"
          placeholder="Заголовок"
          value={noteItem.title}
        />
      )}
      <textarea
        onClick={expand}
        onChange={handleChange}
        name="content"
        placeholder="Делайте заметки..."
        rows={expanded ? 3 : 1}
        value={noteItem.content}
      />
      <Zoom in={expanded}>
        <Fab onClick={handleSubmit}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
