import './App.css'
import { useState } from 'react'

function App() {
  // let color = 'red'
  const [color, setColor] = useState('red')
  const changeColor = () => {
    setColor('green')
    console.log('Color: ', color)
  }
  return (
    <div>
      <h1>Hello ReactJS!!</h1>
      <h2>Color Value {color}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default App
