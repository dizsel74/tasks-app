import './App.scss';
import Tasks from './commponents/Tasks';

function App() {
  return (
    <div className="App">
      <h1>Task tracker app</h1>
      <div className='main-container'>
       <h2>Tasks</h2>
       <Tasks />
      </div>
    </div>
  );
}

export default App;
