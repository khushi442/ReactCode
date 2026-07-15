import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

const [counter, setCounter] = useState(10)

  // let counter = 10
  const addValue = () => {
          console.log("Cicked",Math.random()); 
          // counter = counter + 1.
          setCounter(prevCounter => prevCounter + 1)
          setCounter(prevCounter => prevCounter + 1);
          setCounter(prevCounter => prevCounter + 1);
          setCounter(prevCounter => prevCounter + 1);
  }
          const removeValue = () => {
            if(counter === 0){
              alert("Counter value is zero")
                return;
            }
              setCounter(counter-1)
          }
          
  
  return (
    <>
       <h1>Khushi or react!</h1>
       <h2>Counter value: {counter}</h2>
       <button
       onClick={addValue}
       >Add value {counter}</button>
       <br />
       <button
       onClick={removeValue}
       >Remove Value {counter}</button>
       <p>Footer{counter}</p>
    </>
  )
}

export default App
