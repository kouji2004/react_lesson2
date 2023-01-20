import { useReducer } from 'react';
import { useEffect, useState, useContext, useRef} from 'react';
import './App.css'
import ShinCodeContext from './main';

const reducer = (state, action)=>{
  switch(action,type){
    case "increment":
      return state+1;
      case "decrement":
        return state-1;
        default:
          return state;
  }
}


function App() {
 const [count,setCount] = useState(0);
  const shinCodeInfo = useContext(ShinCodeContext);
  const ref =useRef();
  const [state, dispatch] = useReducer(reducer,0);

 const handleClick=()=>{
  setCount(count+1);
 }

 useEffect(()=>{
 console.log("hello")
 },[count]);

 const handleRef = () =>{

 };

 //useMemo
 const[ count01,setCount1]= useState(0);
 const[ count02,setCount2]= useState(0);

const square = ()=>{
  let i=0;
  while(i<2){
    i++;
  }
  return count02*count02;
}

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

      <hr/>
      <h1>useReducer</h1>
      <p>カウント:{state}</p>
      <button onClick={()=>dispatch({type: "increment"})}>+</button>
      <button onClick={()=>dispatch({type: "decrement"})}>-</button>


      <hr/>
      <h1>useReducer</h1>
      <div>カウント1:{count01}</div>
      <div>カウント2:{count02}</div>
      <div>結果:{square()}</div>
      <button onClick={()=>setCount01(count01+1)}>+</button>
      <button onClick={()=>setCount01(count02+1)}>-</button>
    </div>

    
  )
}

export default App
