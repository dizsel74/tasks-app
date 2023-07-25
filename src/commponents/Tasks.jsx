import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import './TaskForm';

function Tasks( {id, tarea, estado, tareACompletada, eliminarTarea }){
  return(
    <div className={ estado ? 'task-container task-completada' : 'task-container'}>
      <div className='task-text' onClick={()=> tareACompletada(id)}>
      {tarea}
      </div>
      <div className='task-icons-container' onClick={()=> eliminarTarea}>
       <FaTrashAlt className={estado ? 'task-icon completado' : 'task-icon'}/>
      </div>
    </div>
  );
}

export default Tasks;
