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
          <button onClick={() => handleClick(item)}>item done</button>
        )}
        <button onClick={() => handleDelete(item)}>Delete item</button>
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
