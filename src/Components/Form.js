import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import axios from "axios";

const API_URL = `${process.env.REACT_APP_TASKS_SERVER}/tasks`;

export const Form = () => {
  const navigate = useNavigate();

  const [titleTask, setTitleTask] = useState("");
  const [descTask, setDescTask] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const newTask = {
      title: titleTask,
      desc: descTask,
      completed: false,
    };
    axios
      .post(API_URL, newTask)
      .then(() => {
        setTitleTask("");
        setDescTask("");
        navigate("/");
      })
      .catch((err) => {
        alert("Error connection");
        console.log(err);
      });
  };

  return (
    <div className="form-box">
      <Link to="/">
        <button className="form-box-button-close">
          <FaTimes />
        </button>
      </Link>
      <form onSubmit={handleForm}>
        <label>
          <input
            className="form-box-input"
            type="text"
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
            placeholder="Title"
            required
          />
        </label>
        <label>
          <input
            className="form-box-input"
            type="text"
            value={descTask}
            onChange={(e) => setDescTask(e.target.value)}
            placeholder="Description"
          />
        </label>
        <input className="form-box-button-submit" type="submit" />
      </form>
    </div>
  );
};
