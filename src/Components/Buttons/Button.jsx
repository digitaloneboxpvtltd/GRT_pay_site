import React from "react";
import './Button.css';
export default function Button(props){
    
    return (<button className={props.trans?"trans":null}>{props.value}</button>)
}