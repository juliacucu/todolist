import React, { useState, useEffect } from "react";
import axios from "axios";

import { List } from "../../Components/List";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000/tasks";

export const Home = () => {
  const titleList = "This is your task list:";

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
      <h1>Home</h1>
      <p>This is a to do app.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List
          title={titleList}
          tasksArray={tasksState}
          setTasksState={setTasksState}
        />
      )}

      <Link to="/create">
        <button>+</button>
      </Link>
    </>
  );
};
