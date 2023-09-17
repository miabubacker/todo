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
          <div><input type="checkbox"  checked={task.completed}onClick={() => completeTask(index)}/></div>
          <div className="titleConatiner">{task.title}</div>
          <div className="buttonContainer">
          <div>
            {/* {editindex !== index && (
              // <button  className="buttonMainStyle" style={{background:"blue",color:"white"}} >complete</button>
              
            )} */}
          </div>
          <div>
            {editindex !== index && (
              <>
              <button  className="buttonMainStyle" style={{color:"white",background:'#BA4747'}} onClick={() => removeTask(index)}> Delete
            </button>
              </>
            )}
          </div>
          <div>
            <button className="buttonMainStyle" style={{color:'white',background:"#557A46"}} onClick={() => editTask(index, task)}>Edit</button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
