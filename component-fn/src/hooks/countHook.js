import { useState } from "react";

const useCounter = (value) => {
    console.log(value)
  const [state, setState] = useState(0);

  const handleAdd = (value) => {
    setState(state + value) 
  };
  const handleSub = (value) => {
      if(state > 0){
          setState(state - value) 
        } else {
            alert('Cannot go less than 0')
        }
  };

  const handleClear = (value) => {
    setTimeout(() => {
        setState(0)
        alert('The current count is: ' + value)
    }, "5000")
  }

  return [state, handleAdd, handleSub, handleClear];
};

export default useCounter;
