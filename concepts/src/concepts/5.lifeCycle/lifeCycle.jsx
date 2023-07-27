import React from "react";

export class LifeCycle extends React.Component{

    constructor()
    {
        super();
        this.state = {intialValue:"Welcome", name:"Guys"}
    }

    componentWillMount()
    {
        alert("Learn React JS Life Cycle")
    }
    componentDidMount()
    {
        setTimeout(() => {
            this.setState({intialValue:"Thank you"})
        }, 5000);
    }
    componentWillUpdate()
    {
        alert("Do you want to update the new value?")
    }
    componentDidUpdate()
    {
        // document.getElementById('root').innerHTML = "New value is updated"this.state.initialValue;
    }
    shouldComponentUpdate()
    {
        return true;
    }
    componentWillUnmount()
    {
        alert("Hearder Deleted");
    }

    render()
    {
        return (
        <>
        <h4>{this.state.intialValue} {this.state.name}</h4>
        <button type="button" onClick={this.changeValue}>Change Value</button>
        <button type="button" onClick={this.deleteHeader}>Change Delete</button>
        </> )
    }
    deleteHeader = () =>
    {
        this.setState({intialValue:false,name:false})
    }
    changeValue = () =>  
    {
        this.setState({intialValue:"Learn React Life Cycle" })   
    }
} 