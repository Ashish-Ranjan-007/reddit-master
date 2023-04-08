import { useState } from "react";

const Upvote = () => {

    const [number, setNumber] = useState(0);

    const increment = () =>{
        setNumber(prevNum => prevNum +1);
    };
    
    const decrement = () =>{
        if(number>0){
            setNumber(prevNum => prevNum -1);
        }
        
    }

    return(
        <div>
            <div>{number}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Upvote;