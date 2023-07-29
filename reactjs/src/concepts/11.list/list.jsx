import React from "react";

export function ReactList()
{
    const newList = [1,2,3,4,5,"hi","hello"];
    const rl = newList.map((listValues) =>{
        return <li>{listValues}</li>
    });
    return <ul>{rl}</ul>
}