import React from "react";

export class ReactForm2 extends React.Component{
    constructor()
    {
        super();
        this.state={username:"",age:null,errmsg:""}
    }
    userValue = (event) =>
    {
        let n = event.target.name;
        let v = event.target.value;
        let err = "";
        if(n === "age")
        {
            if(v!="" && !Number(v))
            {
                err = <strong>Invalid value, your age must be number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    formSubmit = (event) =>
    {
        event.preventDefault();
        alert("Username:"+this.state.username);
    }
    render()
    {
        return(
            <form onSubmit={this.formSubmit}>
                <h3>Hello {this.state.username}</h3>
                <h3>Your age is {this.state.age}</h3>
                Enter your name:<input type="text" name="username" onChange={this.userValue}></input>
                Enter your age:<input type="text" name="age" onChange={this.userValue}></input>{this.state.errmsg}
                <input type="submit" />
            </form>
        )
    }
}