import React from "react";
import { Link } from "react-router-dom";

export default function ErrorMessage(props){
    return(
        <>
            <div className="error">
                <p className="errorMessage">Error loading data</p>
                <Link to={""} reloadDocument className="errorButton">Try again</Link>
            </div>
        </>
    )
}