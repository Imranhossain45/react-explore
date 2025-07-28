import React from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter1 = () => {
  const [counter,increment,decrement] = useCounter(10);
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter1