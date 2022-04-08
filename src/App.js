import React, {Component} from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import CountryCard from './components/CountryCard';
import CountryInformation from "./components/CountryInformation";
import Header from "./components/Header";
import Nav from "./components/Nav"
import Loader from "./components/Loader";
import "./components/styles.css"
import ErrorMessage from "./components/ErrorMessage";
import PageNotFound from "./components/PageNotFound";

class App extends Component{

    constructor(props){
        super(props);
        this.handleSelectBox = this.handleSelectBox.bind(this);
        this.handleSearchBar = this.handleSearchBar.bind(this);
        this.backOnClick = this.backOnClick.bind(this);
        this.switchMode = this.switchMode.bind(this);
    }

    state = {
        allCountries: [],
        countries: [],
        selection: "All",
        isDarkMode: true,
        isFetchError: false,
    };

    componentDidMount(){
        let url = "https://restcountries.com/v3.1/all";

        fetch(url)
        .then( res => {
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        })
        .then( (json) => {
            this.setState({
                allCountries: json,
                countries: json,
            })
        })
        .catch( (err) => { 
            console.log(err)
            this.setState({
                isFetchError: true,
            })
        })
    };

    handleSelectBox(e){
    
        let selection = e.target.innerHTML;

        if( e.target.className === "option"){

    
            if ( selection !== "All" ){

                document.querySelector(".optionCurrent").innerHTML = selection;

                this.setState({
                    countries: this.state.allCountries.filter((country) => { 
                        return country.region === selection;
                    })
                })

            }else{

                this.setState({
                    countries: this.state.allCountries,
                })

            }

            this.setState({
                selection: selection,
            })
        }
        
    }

    handleSearchBar(e){
        let input = e.target;

        let countries , selection = this.state.selection

        if ( selection !== "All" ){

            countries = this.state.allCountries.filter((country) => { 
                    return country.region === selection;
                })

        }else{

            countries = this.state.allCountries;
            
        }

        this.setState({
            countries: countries.filter((country)=>{
                return country.name.common.toLowerCase().startsWith( input.value.toLowerCase() );
            })
        })
    }

    backOnClick(e){
        if ( this.state.selection === "All" ){
            this.setState({
                countries: this.state.allCountries,
            })
        }
    }

    switchMode(e){
        this.setState({
            isDarkMode: !this.state.isDarkMode,
        })
    }

    render(){
        return(
            <div className="app">

                <Router>
                    <Header switchMode={this.switchMode}></Header>
                    <Routes>
                        <Route path="/react-api-countries" element={
                            <>
                                <Nav 
                                myOnClick={this.handleSelectBox}
                                mySearchBar={this.handleSearchBar}
                                selection={this.state.selection}
                                isDarkMode={this.state.isDarkMode}
                                ></Nav>
                                    {this.state.isFetchError ?
                                        <ErrorMessage></ErrorMessage>:
                                        (
                                            (this.state.allCountries.length === 0 &&
                                            Array.isArray(this.state.allCountries)) ?
                                            <Loader></Loader>:
                                            <div className="grid"> 
                                            {
                                                this.state.countries.map( (el,index)=>(
                                                    <CountryCard
                                                        key={index}
                                                        src={el.flags.svg}
                                                        name={el.name.common}
                                                        population={el.population} 
                                                        region={el.region}
                                                        capital={el.capital}
                                                    ></CountryCard>
                                                ))
                                            }
                                            </div> 
                                        )
                                    }
                            </>
                        }/>
                        <Route
                        path="/react-api-countries/CountryInformation/:name" 
                        element={<CountryInformation  
                            countries={this.state.allCountries}
                            backOnClick={this.backOnClick}
                            isFetchError={this.state.isFetchError}
                            />}
                        />
                        <Route path="/*" element={<PageNotFound></PageNotFound>}/>
                    </Routes>
                    
                </Router>
            </div>
        )
    }
           
}

export default App;