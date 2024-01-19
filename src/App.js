import './App.css';
import {useState} from 'react';
function App() {
  const [count,setCount]=useState(0);
  function decreseHandler() {
    setCount(count-1);
  }
  function increseHandler() {
    setCount(count+1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="id">Increment&Decrement</div>
      <div className="con">
        <button onClick={decreseHandler} className="bu1">
           -
        </button>
        <div className="coun">
         {count}
        </div>
        <button onClick={increseHandler} className="bu2">
           +
        </button>
      </div>
      <button onClick={resetHandler} className="bu3">
           Reset
      </button>
    </div>
  );
}

export default App;
