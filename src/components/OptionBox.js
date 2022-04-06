import React from "react";
import downArrow from "../assets/down-arrow.svg";
import downArrowBlack from "../assets/down-arrow-black.svg"

export default function OptionBox(props){

    function queTal(e){
        props.myOnClick(e);
        const element = document.querySelector(".optionBox");
        element.classList.toggle("active");
    }

    return(
        <div className="optionBox" onClick={queTal}>
            <div className="optionCurrent">
                {props.selection}
            </div>
            <img 
                className="optionImg" 
                src={props.isDarkMode ? downArrow : downArrowBlack } 
                alt="">
            </img>
            <ul className="options">
                <li className="option">All</li>
                <li className="option">Americas</li>
                <li className="option">Europe</li>
                <li className="option">Africa</li>
                <li className="option">Oceania</li>
                <li className="option">Asia</li>
            </ul>
        </div>
    )
}