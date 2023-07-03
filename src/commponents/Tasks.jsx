import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import './TaskForm';

function Tasks( {tarea, estado}){
  return(
    <div className={ estado ? 'task-container task-completada' : 'task-container'}>
      <div className='task-text'>
      {tarea}
      </div>
      <div className='task-icons-container'>
       <FaTrashAlt className={estado ? 'task-icon completado' : 'task-icon'}/>
      </div>
    </div>
  );
}

export default Tasks;
