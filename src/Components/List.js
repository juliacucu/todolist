import React from "react";
import axios from "axios";

import { ListItem } from "./ListItem";

const API_URL = "http://localhost:3000/tasks";

export const List = ({ title, tasksArray, setTasksState }) => {
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
      <p>{title}</p>
      <ol>
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
