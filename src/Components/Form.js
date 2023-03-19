import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const Form = () => {
  const navigate = useNavigate();

  const [titleTask, setTitleTask] = useState("");
  const [descTask, setDescTask] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const newTask = {
        title: titleTask,
        desc: descTask,
        completed: false
    }
    axios.post(API_URL, newTask)
    .then(() => {
      setTitleTask("")
      setDescTask("")
      navigate("/")

    })
    .catch((err) => {
      alert('Error connection')
      console.log(err)
    })
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Enter your pending task:
          <input
            type="text"
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
            placeholder="Títol de la tasca"
          />
          <input
            type="text"
            value={descTask}
            onChange={(e) => setDescTask(e.target.value)}
            placeholder="Descripció de la tasca"
          />
          <input type="submit" />
        </label>
      </form>
    </>
  );
};
