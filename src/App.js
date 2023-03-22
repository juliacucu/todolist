import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateTask } from "./pages/CreateTask";

function App() {
  return (
    <div className="App">
      <h1 className="title">Productive To-Do list</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </div>
  );
}

export default App;
