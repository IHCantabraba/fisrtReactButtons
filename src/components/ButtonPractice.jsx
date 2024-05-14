import React from 'react'
const ButtonPractice = () => {
  const [count, setCount] = React.useState(0)
  function sumarUno() {
    const updatedCounter = count + 1
    setCount(updatedCounter)
  }
  function restarUno() {
    const updatedCounter = count - 1
    setCount(updatedCounter)
  }
  return (
    <div>
      <h1>You have clicked {count} times</h1>
      <button className='btnLess' onClick={restarUno}>
        Restar
      </button>
      <button className='btnPlus' onClick={sumarUno}>
        Sumar
      </button>
    </div>
  )
}

export default ButtonPractice
