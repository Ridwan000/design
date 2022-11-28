import React, {useState} from 'react'

const State = () => {
    const [count, setcount]= useState(0)
    
    const increment=()=>{
        setcount(count +1);
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={increment}>click me</button>
    
    </>




  )
}

export default State;