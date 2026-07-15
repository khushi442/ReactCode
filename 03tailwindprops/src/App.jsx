import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-3">Tailwind Test</h1>
      <Card username="Mountain" btnText="click me"/>
      <Card username="Greenery" btnText="Follow me!" />
    </>
  );
}

export default App
