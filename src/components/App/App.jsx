import React from "react"
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import './App.css'
import Home from "../Home/Home"

const theme = createMuiTheme({
  palette: {
    background: {
      primary: '#2a2a2a'
    },
    color: {
      primary: '#fff'
    }
  },
})


function App() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
}

export default App
