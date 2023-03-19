import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../../Components/Form";

export const CreateTask = () => {
  return (
    <div>
      <h1>Create new task</h1>
      <Form />
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </div>
  );
};
