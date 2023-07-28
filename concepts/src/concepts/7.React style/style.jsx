import React from "react";
import style from "./main.module.css"

export class ReactStyle extends React.Component{
    render()
    {
        const myStyle = {color:"blue",background:"yellow"}
        return(
            <>
            <h4 style={{color:"red",background:"yellow"}}>1.Inline Style</h4>
            <h4 style={myStyle}>2.Style using object</h4>
            <h4>3.External Style</h4>
            <h4 className={style.heading}>4.CSS Module</h4>
            </>
        )
    }
}

