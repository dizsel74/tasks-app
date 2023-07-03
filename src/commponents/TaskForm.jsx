import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TaskForm(props){
  return(
   <form className='task-form'>
      <input className='task-input'
      type="text"
      placeholder='add a task' 
    />
    
    <button className='task-btn'><AiOutlinePlus /></button>
 
   </form>
   
  );
}

export default TaskForm;