import React, {useState} from 'react'

function Clock(){
    const [count, setCount] = useState(0);
    // function Plus(){
    //     setCount(count + 1);
    // }
    function Minus(){
        setCount(count - 1);
    }
    function Reset(){
        setCount(0);
    }

    return(
        <div>
            <center>
            <h1> {count} </h1>
            <button id="add" onClick = {()=>setCount(count+1)}> Increment </button>
            <button id="sub" onClick = {Minus}> Decrement </button>
            <button id="sub" onClick = {Reset}> Reset </button>
            </center>
            <hr></hr>
        </div>
    );
}
export default Clock;