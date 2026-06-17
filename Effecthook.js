import React, {useState, useEffect} from 'react'

export const Effecthook = () => {
    const [msg, setMsg] = useState("Loading........");
    useEffect(
        ()=>{
            const timer = setTimeout(
                () => {
                    setMsg("Hello, this is useEffect in action!");
                }, 4000 // waits for 4 seconds
            );
            return () => clearTimeout(timer);
        }, []
        );
  return (
    <div>
        <center>
        <h1>{msg}</h1>
        </center>
    </div>
  )
}
