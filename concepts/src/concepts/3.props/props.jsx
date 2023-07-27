import React from "react";

export function Props1(props){
    const {name,price} = props
    return(
    <>
    <h3>Product Name:{name}</h3>
    <h3>Product Price:{price}</h3>
    </>
    );
}
export function Props({name,price,offer="%50"}){
    return(
    <>
    <h3>Product Name:{name}</h3>
    <h3>Product Price:{price}</h3>
    <h3>Product Offer:{offer}</h3>
    </>
    );
}


// class PropsParent extends React.Component{
//     render()
//     {
//         return (<h3>Learn {this.props.topic} in {this.props.language}</h3>)
//     }
// }
// ReactDOM.render(<PropsParent topic="Reactjs" language="english"/>, document.getElementById('root'));




// class PropsParent extends React.Component{
//     render()
//     {
//         return (<h3>Learn {this.props.topic}</h3>)
//     }
// }
// class PropsChild extends React.Component{
//     render()
//     {
//         var topic="Reactjs"
//         return(<PropsParent var={r}/>)
//     }
// }
// ReactDOM.render(<PropsChild/>, document.getElementById('root'));



//Passing object
// class PropsParent extends React.Component{
//     render()
//     {
//         return (<h3>Learn {this.props.v.topic}</h3>)
//     }
// }

// class PropsChild extends React.Component{
//     render()
//     {
//         var v={topic:"reactjs",language:"english"}
//         return(<PropsParent var={v}/>)
//     }
// }
// ReactDOM.render(<PropsChild/>, document.getElementById('root'));



//Set default value 
// class PropsChild extends React.Component{
//     render()
//     {
//         return (<h3>Learn {this.props.concept}</h3>)
//     }
// }
// PropsChild.defaultProps = {concept:"props", language:"english"}
// ReactDOM.render(<PropsChild/>, document.getElementById('root'));