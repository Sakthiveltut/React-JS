import { useEffect, useState } from "react"

export function ReactHook(){
    const [getCount, setCount] = useState(0);
    useEffect(()=>alert("hello"));
    return(
        <>
        <p>Total click is {getCount}</p>
        <button type="button" onClick={()=>setCount(getCount+1)}>Click Me</button>
        </>
    )
}