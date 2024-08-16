import React from 'react'

// const MyFunc1 = () => {
//   return <h3>External Function1</h3>
// }

// const MyFunc2 = () => {
//   return <h3>External Function2</h3>
// }

const MyFunc1 = () => {
  const MyFunc2 = () => {
    return <h3>External Function2</h3>
  }
  return (
    <div>
      <h3>External Function1</h3>
      <MyFunc2 />
    </div>
  )
}

// export default MyFunc
// export { MyFunc1 } //if need to export many different functions use this
export default MyFunc1 //if onlu 1 function use these
