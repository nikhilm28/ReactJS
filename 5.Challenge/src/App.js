import './App.css'

function App() {
  const hour = new Date().getHours()
  console.log('Hours : ', hour)
  let greetings = ''
  // let colorValue = ''
  let colorStyle = {
    color: 'black',
  }

  if (hour >= 1 && hour < 12) {
    greetings = 'Good Morning'
    // colorValue = 'red'
    colorStyle.color = 'red'
  } else if (hour >= 12 && hour < 19) {
    greetings = 'Good Afternoon'
    // colorValue = 'green'
    colorStyle.color = 'green'
  } else {
    greetings = 'Good Evening'
    // colorValue = 'orange'
    colorStyle.color = 'orange'
  }

  return (
    <div>
      {/* <h1 style={{ color: colorValue }}>Hello Sir, {greetings}</h1> */}
      <h1 style={colorStyle}>Hello Sir, {greetings}</h1>
    </div>
  )
}

export default App
