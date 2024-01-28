import { useState } from "react";

const Counter = () =>{
    const [count,setcount] = useState(0)

const Increment =()=>{
    setcount(count +1)
}
const Decrement = () =>{
    setcount(count -1)
}
    return(
      
        <div id="counter-Box">
            <h1>Count : {count}</h1>
        <button onClick={Increment}>Increase by 1</button>
        <button onClick={Decrement}>Decrease by 1</button>
        
        </div>
        
    )
}


export default Counter;