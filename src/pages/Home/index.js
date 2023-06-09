import React, { useState, useEffect } from "react";
import { List } from "../../components/List";
import { Link } from "react-router-dom";

import axios from "axios";

import "../../styles/styles.css";

const API_URL = `${process.env.REACT_APP_TASKS_SERVER}/tasks`;

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [tasksState, setTasksState] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setTasksState(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List tasksArray={tasksState} setTasksState={setTasksState} />
      )}

      <Link className="create-task" to="/create">
        NEW TASK
      </Link>
    </>
  );
};
