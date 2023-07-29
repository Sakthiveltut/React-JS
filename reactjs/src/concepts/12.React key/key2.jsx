import React from "react";

function ListKey(props){
    const item = props.item;
    const key = props.keys;
    return(
        <li>{key}:{item}</li>
    );
}
export function MyList(props){
    console.log(props.myValue);
    const listItem = props.myValue.map((listValue) =>
        <ListKey keys={listValue} item={listValue}></ListKey>
    );
    return(
        <>
        <h2>Correct key usage in example</h2>
        <ul>{listItem}</ul>
        </>
    )
}
// export function MyList(props){
//     const listItem = props.myValue.map((listValue, index) =>
//         <ListKey keys={index} item={listValue}></ListKey>
//     );
//     return(
//         <>
//         <h2>Correct key usage in example</h2>
//         <ul>{listItem}</ul>
//         </>
//     )
// }