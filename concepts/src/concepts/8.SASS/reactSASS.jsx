import React from "react";
import './style.scss'

export class ReactSASS extends React.Component{
    render()
    {
        return(
            <>
            <h4 className="a">Sass stands for Syntactically Awesome Stylesheet</h4>
            <h4 className="b">Sass is an extension to CSS</h4>
            <h4 className="c">Sass is a CSS pre-processor</h4>
            <h4 className="d">Sass reduces repetition of CSS and therefore saves time</h4>
            </>
        )
    }
}