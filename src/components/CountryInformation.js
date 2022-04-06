import React from "react";
import { Link , useParams} from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import PageNotFound from "./PageNotFound";

export default function CountryInformation(props){

    const countryName = useParams().name;

    if( countryName !== "" && props.countries.length !== 0 && Array.isArray(props.countries)){

        const country = props.countries.find( country => country.name.common === countryName );

        if( country === undefined ){
            return <PageNotFound></PageNotFound>
        }

        let borders;

        if ( country.hasOwnProperty("borders") ){
                borders = country.borders.map( border => {
                return props.countries.find( element => element.cca3 === border ).name.common;
            })
        }

        return (
            <>
                <Link to="/react-api-countries" className="backLink" onClick={props.backOnClick}>Back</Link>
                    <div className="countryInformation">
                        <img 
                        className="countryImg" 
                        src={country.flags.svg}
                        alt=""
                        ></img>
                        <div className="countryInfo">
                            <h1 className="countryInfo__countryName">
                                {country.name.common}
                            </h1>
                            <div className="countryInfo__primaryInfo">
                                <p>
                                    <span className="bolder">Native Name: </span>
                                    {Object.entries(country.name.nativeName)[0][1].official}
                                </p>
                                <p>
                                    <span className="bolder">Population: </span>
                                    {country.population}
                                </p>
                                <p>
                                    <span className="bolder">Region: </span>
                                    {country.region}
                                </p>
                                <p>
                                    <span className="bolder">Region: </span>
                                    {country.subregion}
                                </p>
                                <p>
                                    <span className="bolder">Capital: </span>
                                    {country.capital}
                                </p>
                            </div>
                            <div className="countryInfo__secondaryInfo">
                                <p>
                                    <span className="bolder">Top level domain: </span>
                                    {country.tld}
                                </p>
                                <p>
                                    <span className="bolder">Currencies: </span>
                                    {Object.entries(country.currencies)[0][1].name}
                                </p>
                                <p>
                                    <span className="bolder">Languages: </span>
                                    {Object.values(country.languages).join(", ") + "."}
                                </p>
                            </div>
                            <div className="countryInfo__borderLines">
                                <h3 className="countryInfo__borderLines--title bolder">
                                    Border countries:
                                </h3>
                                {
                                borders === undefined ? 
                                <p>No country borders</p>
                                : borders.map((border)=>{
                                    return (
                                    <Link to={`/react-api-countries/CountryInformation/${border}`}
                                    key={border}
                                    className="borderLink"
                                    >
                                        {border}
                                    </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
            </>
        )
    }else {
        return props.isFetchError ? <ErrorMessage/> : <Loader/>;
    }
}