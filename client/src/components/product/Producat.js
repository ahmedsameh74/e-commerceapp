import React from "react";
import "./Gallry.css";

const Producat =(props)=>{
    return(
        <div className="box">
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <div className="text">
            <p>{props.text}</p>
            <span>{props.price}</span> 
            </div>        
            <button>Buy now</button>
        </div>

    )
}
export default Producat;