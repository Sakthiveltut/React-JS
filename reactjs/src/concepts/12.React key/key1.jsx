// import React from "react";

export function ReactKey(props){

    const content = props.data.map((show) =>
    <div key={show.id}>
        <h3>{show.id}:{show.title}:{show.content}</h3>
    </div>
    )
    return(
        <>
        {content}
        </>
    )
}