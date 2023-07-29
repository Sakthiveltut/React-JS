import React from "react";

export class EventHandler extends React.Component{
    constructor(){
        super();
        this.state = {initialValue:"Welcome",name:"Guys"}
    }
    changevalue = (a) => 
    {
        this.setState({initialValue:"Hello"+a});
    }
    render()
    {
        return (
        <>
        <h1>{this.state.initialValue} {this.state.name}</h1>
        <br/> 
        <button type="button" onClick={()=>this.changevalue("world")}>Change Value</button>
        </>
        )
    }
}

// ReactDOM.render(<ReactState/>, document.getElementById('root'))