import React from "react";
import {navigateToUrl} from "single-spa";
import "../styles/scss/modules/SideMenu.scss";

export default function SideMenu() {
    return <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a href="/" onClick={navigateToUrl}><li>Home</li></a>
                <a href="/one" onClick={navigateToUrl}><li>React App One</li></a>
                <a href="/two" onClick={navigateToUrl}><li>React App Two</li></a>
                <a href="/" onClick={navigateToUrl}><li>Angular App</li></a>
            </ul>
        </div>
    </nav>
}
