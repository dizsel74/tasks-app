import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from './Tasks';

function TaskList(props){
    const [task, setTask] = useState([]);

    const agregarTarea = tarea =>{
      console.log ('+');
      console.log(tarea);
    }
    
  return(
    <>
    <TaskForm />
    <div className='task-list-container'>Listado
      <ul className='task-list'>
        <ol className='task-item'>
        <Tasks 
        tarea='texto dummmy text dummmy texto' 
        estado='l'
       />
        </ol>
      </ul>
    </div>
    </>

  );
}

export default TaskList;

/*
Lunes y Viernes de 3 a 7pm
Martes a Jueves de 10 a 6pm
Sábados de 10 am a 3pm
*/