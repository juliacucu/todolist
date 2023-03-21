import React, { useState } from "react";
import { FaUndoAlt, FaCheck, FaTimes } from "react-icons/fa";

export const ListItem = ({ handleClick, handleDelete, item }) => {
  const [openDesc, setOpenDesc] = useState(false);
  const handleOpen = () => {
    setOpenDesc(!openDesc);
  };

  return (
    <li className="task-item">
      <div className="task-content">
        <strong
          className={`${item.completed ? "task-done" : ""}`}
          onClick={handleOpen}
        >
          {item.title}
        </strong>
        <div className="task-buttons">
          {item.completed ? (
            <button className="button-undo" onClick={() => handleClick(item)}>
              <FaUndoAlt />
            </button>
          ) : (
            <button className="button-done" onClick={() => handleClick(item)}>
              <FaCheck />
            </button>
          )}
          <button className="button-delete" onClick={() => handleDelete(item)}>
            <FaTimes />
          </button>
        </div>
      </div>
      {openDesc && (
        <div>
          <i> {item.desc}</i>
        </div>
      )}
    </li>
  );
};
