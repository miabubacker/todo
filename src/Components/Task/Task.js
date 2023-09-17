import React from "react";
import "./Task.css";


export default function Task(props) {
  const { tasks, editindex, completeTask, removeTask, editTask } = props;
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className={!task.completed?"taskMain":'taskMainComplete'}
        >
          <div className="titleConatiner">{task.title}</div>
          <div className="buttonContainer">
          <div>
            {editindex !== index && (
              <button  className="buttonMainStyle" style={{background:"blue",color:"white"}} onClick={() => completeTask(index)}>complete</button>
              
            )}
          </div>
          <div>
            {editindex !== index && (
              <>
              <button  className="buttonMainStyle" style={{color:"white",background:'red'}} onClick={() => removeTask(index)}> Delete
            </button>
              </>
            )}
          </div>
          <div>
            <button className="buttonMainStyle" style={{color:'white',background:"green"}} onClick={() => editTask(index, task)}>edit</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
