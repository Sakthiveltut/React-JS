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
