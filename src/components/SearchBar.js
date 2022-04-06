import React from "react";
import searchIcon from "../assets/search-icon.svg"
import searchIconBlack from "../assets/search-icon-black.svg"

export default function SearchBar(props){
    return(
        <form className="searchForm">
            <img className="searchIcon" src={props.isDarkMode ? searchIcon : searchIconBlack } alt=""/>
            <input 
            className="searchInput" 
            type="text" 
            placeholder="Search for a country..."
            onInput={props.mySearchBar}
            ></input>
        </form>
    )
}