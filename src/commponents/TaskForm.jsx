import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {v4 as uuidv4} from 'uuid';


function TaskForm(props){

const [ input, setInput ] = useState('');

const manejarCambios =  e => {
  setInput(e.target.value);
  console.log(e.target.value);
}

const manejarEnvio = e  =>{
  e.preventDefault(); //evita que se recargue la app

  const tareaNueva ={
    id:uuidv4(), //gen id
    texto:input,
    estado: false
  }
  console.log(tareaNueva);
  props.onSubmit(tareaNueva);
}

  return(
   <form className='task-form' onSubmit={manejarEnvio}>
    <input className='task-input' type="text" placeholder='add a task' name='texto' onChange={manejarCambios}/>
    <button className='task-btn'><AiOutlinePlus /></button>
   </form>
   
  );
}

export default TaskForm;