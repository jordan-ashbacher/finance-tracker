import React from "react"
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Home from "../Home/Home"

function App() {
    return (
        <Router>
            <div>
                <Redirect exact from="/" to="/home" />
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
