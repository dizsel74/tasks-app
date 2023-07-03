import './App.scss';
import Tasks from './commponents/Tasks';
import TaskForm from './commponents/TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Task tracker app</h1>
      <div className='main-container'>
       <h2>Tasks</h2>
       <TaskForm />
       <Tasks 
        tarea='text dummmy text dummmy text du' 
        estado='y'
       />
      </div>
    </div>
  );
}

export default App;
