import './App.css'

function App() {
  const count =0;
 const handleClick = () =>{
  count++;
 }

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  )
}

export default App
