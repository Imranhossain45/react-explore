import React, { useState } from "react";

const useCounter = (intialValue =0) => {
  const [counter, setCounter] = useState(intialValue);
  const increment = () => {
    setCounter (counter + 1);
  };
  const decrement = () => {
    setCounter (counter - 1);
  };
  return [counter,increment,decrement];
};

export default useCounter;
