import React,{Component} from "react";
import ToggleMode from "./ToggleMode";


class Header extends Component{

    render(){
        return(
            <header className="header">
                <h1 className="headerTitle">Where in the world?</h1>
                <ToggleMode switchMode={this.props.switchMode}></ToggleMode>
            </header>
        )
    }
}

export default Header