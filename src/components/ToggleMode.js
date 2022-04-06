import React,{Component} from "react";
import moon from "../assets/moon.svg";
import moonBlack from "../assets/moon-black.svg";

class ToggleMode extends Component{
    constructor(props){
        super(props);
        this.handleToggleMode = this.handleToggleMode.bind(this);
    }

    state = {
        text: "Light Mode",
        src: moon,
    }

    handleToggleMode(e){

        let BackgroundCurrentMode = 
        getComputedStyle(document.documentElement).getPropertyValue("--dark-blue");
    
        let cardCurrentMode =
        getComputedStyle(document.documentElement).getPropertyValue("--very-dark-blue");
    
        let letterCurrentMode =
        getComputedStyle(document.documentElement).getPropertyValue("--white");

        this.setState({
            text: this.state.text === "Light Mode" ? "Dark Mode" : "Light Mode",
            src: this.state.src === moon ? moonBlack : moon,
        })  
    
        BackgroundCurrentMode = BackgroundCurrentMode === "hsl(0, 0%, 100%)" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
        cardCurrentMode = cardCurrentMode === "hsl(0, 0%, 90%)" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 90%)";
        letterCurrentMode = letterCurrentMode === "hsl(0, 0%, 0%)" ? "hsl(0, 0%, 100%)" : "hsl(0, 0%, 0%)";
 
        document.documentElement.style.setProperty("--dark-blue", BackgroundCurrentMode);
    
        document.documentElement.style.setProperty("--very-dark-blue" , cardCurrentMode);
    
        document.documentElement.style.setProperty("--white", letterCurrentMode);

        this.props.switchMode();

    }

    render(){
        return(
            <button className="toggleMode" onClick={this.handleToggleMode}>
                <img className="toggleModeIcon" src={this.state.src} alt=""></img>
                <p className="toggleModeText">{this.state.text}</p>
            </button>
        )
    }
}

export default ToggleMode;