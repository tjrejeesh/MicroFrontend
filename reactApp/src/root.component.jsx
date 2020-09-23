import React from "react";
import "./styles/scss/index.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Topics from "./components/pages/Topics";

export default function Root() {
    return (
        <Router>
            <div className="container">
                <Navigation/>
                <Switch>
                    <Route path="/one/about">
                        <About />
                    </Route>
                    <Route path="/one/topics">
                        <Topics />
                    </Route>
                    <Route path="/one">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
