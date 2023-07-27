import React from "react";

export class ReactState extends React.Component{
    constructor(){
        super();
        this.state = {initialValue:"Welcome",name:"Guys"}
    }
    changevalue = () => 
    {
        this.setState({initialValue:"Hello"});
    }
    render()
    {
        return (
        <>
        <h1>{this.state.initialValue} {this.state.name}</h1>
        <br/> 
        <button type="button" onClick={this.changevalue}>Exit</button>
        </>
        )
    }
}

// ReactDOM.render(<ReactState/>, document.getElementById('root'))