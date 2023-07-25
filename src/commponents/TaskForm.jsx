import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TaskForm(props){

const [ input, setInput ] = useState('');

const manejarCambios =  e => {
  setInput (e.target.value);
  console.log(e.target.value);

}

const manejarEnvio = e  =>{
  const tareaNueva ={
    id:'123',
    texto:'ggg'
  }
}

  return(
   <form className='task-form'>
    <input className='task-input' type="text" placeholder='add a task' name='texto' onChange={manejarCambios}/>
    <button className='task-btn' onClick={ () => manejarEnvio}><AiOutlinePlus /></button>
   </form>
   
  );
}

export default TaskForm;