import React, { useReducer } from "react";
import "./App.css";

function App() {
  const intialValue = 10;
  const reducer = (state,action) =>{
    if(action === 'plus'){
      return state+1;
    } else if(action === 'minus'){
      return state-1;
    }else{
      return state;
    }
  }
  const [count,dispatch] = useReducer(reducer,intialValue);
  
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => {dispatch('plus')}}>Plus </button>
      <hr />
      <button onClick={()=>{dispatch('minus')}}>Minus</button>
    </div>
  );
}

export default App;
