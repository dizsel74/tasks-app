import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Tasks from './Tasks';

function TaskList(){
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
      console.log(tarea);

      if(tarea.texto.trim()){
        tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
        console.log(setTareas)
      }
       
    }


  const eliminarTarea =id =>{
    const  tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }


  const tareACompletada = id => {
    const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.estado = !tarea.estado;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return(
    <>
    <TaskForm onSubmit={agregarTarea} />
    <div className='task-list-container'>
      {
        tareas.map((tarea) =>
        <Tasks
          key={tarea.id}
          id={tarea.id}
          tarea={tarea.texto}
          estado={tarea.estado}
          eliminarTarea={eliminarTarea}
          tareACompletada={tareACompletada}
        />
        )
      }
      
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