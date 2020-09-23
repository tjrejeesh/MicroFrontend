import React from "react";
import {Link} from "react-router-dom";

export default function Navigation() {
    return(
        <div className="topnav" id="myTopnav">
            <Link to="/one/home">Home</Link>
            <Link to="/one/about">About</Link>
            <Link to="/one/topics">Topics</Link>
        </div>
    );
}
