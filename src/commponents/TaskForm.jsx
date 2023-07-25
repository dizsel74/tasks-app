import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TaskForm(props){

const [ input, setInput ] = useState('');

const manejarCambios =  e => {
  setInput(e.target.value);
  console.log(e.target.value);
}

const manejarEnvio = e  =>{
  e.preventDefault(); //evita que se recargue la app

  const tareaNueva ={
    id:'123',
    texto:input,
    estado: false
  }
}

  return(
   <form className='task-form' onSubmit={manejarEnvio}>
    <input className='task-input' type="text" placeholder='add a task' name='texto' onChange={manejarCambios}/>
    <button className='task-btn'><AiOutlinePlus /></button>
   </form>
   
  );
}

export default TaskForm;