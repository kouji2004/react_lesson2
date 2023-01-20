import { useEffect, useState, useContext, useRef} from 'react';
import './App.css'
import ShinCodeContext from './main';

function App() {
 const [count,setCount] = useState(0);
  const shinCodeInfo = useContext(ShinCodeContext);
  const ref =useRef();


 const handleClick=()=>{
  setCount(count+1);
 }

 useEffect(()=>{
 console.log("hello")
 },[count]);

 const handleRef = () =>{

 };

  return (
    <div className="App">
      <h1>UseState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr/>
      <h1>useCotext</h1>
      <p>{shinCodeInfo.name}</p>
      <p>{shinCodeInfo.age}</p>

      <hr/>
      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>UseRef</button>

    </div>

    
  )
}

export default App
