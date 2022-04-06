import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/404.svg"

export default function PageNotFound(props){
    return(
        <>
            <div className="pageNotFound">
                <img className="pageNotFound__img" src={img}></img>
                <Link to={"/"} reloadDocument className="backLink">Go home</Link>
            </div>
        </>
    )
}