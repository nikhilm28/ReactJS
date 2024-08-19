import './App.css'

function App() {
  // function test() {
  //   alert('Test OnClick')
  // }

  var myName = 'Nikhil'
  const test = () => {
    console.log('Function call', myName)
    alert('Function call ' + myName)
  }
  return (
    <div>
      <h1>Hello ReactJS!!</h1>
      <button onClick={test}>Click me</button>
    </div>
  )
}

export default App
