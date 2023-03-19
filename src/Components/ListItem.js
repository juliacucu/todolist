import React, { useState } from "react";

export const ListItem = ({ handleClick, handleDelete, item }) => {
  const [openDesc, setOpenDesc] = useState(false);

  const handleOpen = () => {
    setOpenDesc(!openDesc);
  };

  return (
    <li
      style={
        item.completed
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      <div>
        <strong>{item.title}</strong>
        {item.completed ? (
          <button onClick={() => handleClick(item)}>Undo</button>
        ) : (
          <button onClick={() => handleClick(item)}>Done</button>
        )}
        <button onClick={() => handleDelete(item)}>Delete</button>
        <button onClick={handleOpen}>Read more</button>
      </div>
      {openDesc && (
        <div>
          <i> {item.desc}</i>
        </div>
      )}
    </li>
  );
};
