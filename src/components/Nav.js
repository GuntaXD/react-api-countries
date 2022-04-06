import React, {Component} from "react";
import OptionBox from "./OptionBox";
import SearchBar from "./SearchBar";

export default class Nav extends Component{

    render(){
        return(
            <nav className="nav">
                <SearchBar 
                    mySearchBar={this.props.mySearchBar}
                    isDarkMode={this.props.isDarkMode}
                    ></SearchBar>
                <OptionBox 
                myOnClick={this.props.myOnClick}
                selection={this.props.selection}
                isDarkMode={this.props.isDarkMode}
                ></OptionBox>
            </nav>
        )
    }
}