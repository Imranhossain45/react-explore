import React from 'react'

const Service = () => {
  function adding(num){
    console.log(num*2);
  }
  return (
    <div>
      <h1>Service Component</h1>
      <button onClick={()=> adding(5)} className='click-btn'>Click Me</button>
    </div>
  )
}

export default Service