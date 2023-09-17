import React from 'react'
import './CreateTask.css'
function CreateTask(props) {
     const{editable,handleSubmit,handleUpdate,value,setValue}= props
  return (
    <div><form  style={{margin:'0 0.7rem'}}onSubmit={!editable ? handleSubmit : handleUpdate}>
    <input
      type="text"
      value={value}
      placeholder="Add a new task"
     className='inputBox'
      onChange={(e) => setValue(e.target.value)}
    />
  </form></div>
  )
}

export default CreateTask