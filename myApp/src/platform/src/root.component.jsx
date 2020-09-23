import React from "react";
import Header from "./components/Header.jsx";
import "./styles/scss/index.scss"
import 'semantic-ui-css/semantic.min.css'
import SideMenu from "./components/SideMenu";
import 'semantic-ui-css/semantic.min.css';

export default function Root(props) {
    return <div>
              <Header/>
              <SideMenu/>
              <section className="container">Welcome</section>
          </div>;
}
