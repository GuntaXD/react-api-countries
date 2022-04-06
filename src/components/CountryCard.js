import React from "react";
import { NavLink } from "react-router-dom";

function CountryCard(props){
    
    return(
        <NavLink to={`/CountryInformation/${props.name}`} className="countryCard">
            <img className="countryFlag" src={props.src} alt=""/>
            <p className="countryName">{props.name}</p>
            <div className="cardStats">
                <p className="population">Population: {props.population}</p>
                <p className="region">Region: {props.region}</p>
                <p className="capital">Capital: {props.capital}</p>
            </div>
        </NavLink >
    )
    
}

export default CountryCard;