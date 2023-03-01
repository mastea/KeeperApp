import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteSharpIcon />
      </button>
    </div>
  );
}
