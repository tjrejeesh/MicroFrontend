import React from "react";
import logo from "../assets/images/head.png";
import { platformConstants } from "../utils/constants";

export default function Header() {
    return <header>
                <div className="title">{platformConstants.title}</div>
                <img className="logo" src={logo}></img>
           </header>
}
