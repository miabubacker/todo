import React, { useState } from "react";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
 import './Container.css'

export default function Container() {
  const [value, setValue] = useState("");
  const [editable, setEditable] = useState(false);
  const [editindex, setEditIndex] = useState("");
  const [tasks, setTasks] = useState([
  
  ]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if(value.trim()===''||!value){
       alert('Please Enter Valuble Values')
       return
     }
    addTask(value);
    setValue("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if(value.trim()===''||!value){
      alert('Please Enter Valuble Values')
      return
    }
    const preValue = [...tasks];
    preValue[editindex] = {
      title: value,
      completed: preValue[editindex].completed,
    };
    setTasks(preValue);
    setEditable(false);
    setValue("");
    setEditIndex("");
  };
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index, task) => {
    if (task.completed) {
      alert("completed Task not to be editable");
    } else {
      setValue(tasks[index].title);
      setEditable(true);
      setEditIndex(index);
    }
  };

  return (
    <div className="container">
      <div className="main">
<div className="Header">Todo List +</div>
      <div>
        <CreateTask
          editable={editable}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="todo-container">
        {/* <div className="header">TODO - ITEMS</div> */}
        <div className="tasks">
          <Task
            tasks={tasks}
            editindex={editindex}
            completeTask={completeTask}
            removeTask={removeTask}
            editTask={editTask}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

