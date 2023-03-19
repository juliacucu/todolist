import React, { useState } from "react";

export const List = () => {
  const [tasks, setTasks] = useState([]);
  const handleForm = (e) => {
    if (e.key === 'Enter') {
        setTasks([...tasks, e.target.value]);
        e.target.value = ''
    }
    }
    
  return (
    <>
     <p>Enter your pending task:</p> 
      <input type="text" onKeyDown={handleForm} />
      <ol>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ol>
      
    </>
  );
};
