import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CreateTask } from "./Pages/CreateTask";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreateTask />}/>
      </Routes>
    </div>
  );
}

export default App;
