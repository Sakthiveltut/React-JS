import React from "react";

export class ReactForm extends React.Component{
    constructor(){
        super();
        this.state={username:"",age:null}
    }
    userValue = (event)=>
    {
        this.setState({username:event.target.value})
    }
    render()
    {
        return(
            <form>
                <h1>Hello {this.state.username}</h1>
                Enter your name:<input type="text" onChange={this.userValue}></input>
            </form>
        )
    }
}