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
      <div className='btnDiv'>
        <button className='restar' onClick={restarUno}>
          Restar
        </button>
        <button className='sumar' onClick={sumarUno}>
          Sumar
        </button>
      </div>
    </div>
  )
}

export default ButtonPractice
