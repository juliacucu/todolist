import React from "react";
import { ListItem } from "./ListItem";

import axios from "axios";

const API_URL = `${process.env.REACT_APP_TASKS_SERVER}/tasks`;

export const List = ({ tasksArray, setTasksState }) => {
  const handleClick = (task) => {
    const taskFound = tasksArray.find((element) => element.id === task.id);
    taskFound.completed = !taskFound.completed;
    axios
      .put(`${API_URL}/${taskFound.id}`, taskFound)
      .then(() => {
        setTasksState([...tasksArray]);
      })
      .catch((err) => {
        alert("Error connection");
        console.log(err);
      });
  };

  const handleDelete = (task) => {
    axios
      .delete(`${API_URL}/${task.id}`)
      .then(() => {
        const tasksFiltered = tasksArray.filter(
          (element) => element.id !== task.id
        );
        setTasksState(tasksFiltered);
      })
      .catch((err) => {
        alert("Error connection");
        console.log(err);
      });
  };

  return (
    <>
      <ol className="task-list">
        {tasksArray.map((task, index) => (
          <ListItem
            key={index}
            item={task}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ol>
    </>
  );
};
