import React from "react";

class FirstClass extends React.Component{
    render(){
        return(
            <>
            <h3>2.Class Component</h3>
            </>
        )
    }
}

export class SecondClass extends React.Component{
    render(){
        return(
            <>
            <FirstClass></FirstClass>
            <p>A class component must include the extends React.Component statement.</p>
            </>
        )
    }
}