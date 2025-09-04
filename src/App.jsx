import { useState } from 'react'
import './App.css'

//function App({ min = 0, max = 20 }) {
  function App(){
  //const [count, setCount] = useState(0)
  //let [counter, setCounter] = useState(5);
  const [counter, setCounter] = useState(5);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  //let counter = 5;
  const addValue = () => {
    //counter = counter + 1;
    if(counter < max ){
   // setCounter(counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    }
    //console.log("value addeed "+counter+ " times "+ Math.random());
  }

  const removeValue = () => {
    if (counter > min ){
    setCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>Counter title</h1>
    <h2>Counter value: {counter} </h2>

    <div>
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </label>
      </div>

      <br />
  
    <button onClick={addValue} disabled={counter >= max}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue} disabled={counter <= min}>Substract {counter}</button>
    <p>Footer: {counter}</p>
   
     
      
    </>
  )
}

export default App
