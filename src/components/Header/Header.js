import React from 'react'
import './Header.css'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./../Home/Home"
import Running from "./../Running/Running"
import Distance from "./../Distance/Distance"
import Pace from "./../Pace/Pace"

const Header = (props) => (
    <Router>
        <div>
            <nav className="navigation">
                <h3 className="title"><Link to="/">MY RUN TRACKER</Link></h3>
                <div className="navItems">
                    <Link to="/running">Running Log</Link>
                    <Link to="/distance">Distance Converter</Link>
                    <Link to="/pace">Pace Calculator</Link>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/running">
                    <Running />
                </Route>
                <Route path="/distance">
                    <Distance />
                </Route>
                <Route path="/pace">
                    <Pace />
                </Route>
            </Switch>
        </div>
    </Router>
)

export default Header

