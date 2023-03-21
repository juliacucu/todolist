import React, { useState, useEffect } from "react";
import axios from "axios";

import { List } from "../../components/List";
import { Link } from "react-router-dom";

import "../../styles/styles.css";

const API_URL = "http://localhost:3000/tasks";

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
        <List
          tasksArray={tasksState}
          setTasksState={setTasksState}
        />
      )}

      <Link className="create-task" to="/create">
        <button>NEW TASK</button>
      </Link>
    </>
  );
};
