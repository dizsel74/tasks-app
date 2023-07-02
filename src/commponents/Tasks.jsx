import React from "react";



function Tasks(props){
  return(
    <div className='task-container'>
      <div className='task-text'>
      {props.task}
      </div>
      <div className='task-icon'>
        icon
      </div>
    </div>
  );
}

export default Tasks;