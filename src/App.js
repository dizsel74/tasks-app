import './App.scss';
import TaskList from './commponents/TaskList';


function App() {
  return (
    <div className="App">
      <h1>Task tracker app</h1>
      <div className='main-container'>
       <h2>Tasks to do</h2>
       
       <TaskList />
      
      </div>
    </div>
  );
}

export default App;
